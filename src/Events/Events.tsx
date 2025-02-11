import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { BallEvent, EventResponse, NoEvent } from "./Types";
import styles from "./Events.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ns = "events";

function updateBigmoon(setBigmoon: (event: NoEvent | BallEvent) => void) {
  fetch("https://api.beastieballgame.com/api/events")
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("gameEvent", JSON.stringify(data));
      setBigmoon(data.currentEvent);
    })
    .catch(() => setBigmoon(NoEvent.NoEvent));
}

function useBigmoon(open: boolean): [NoEvent | BallEvent, () => void] {
  const [bigmoon, setBigmoon] = useState<NoEvent | BallEvent>(
    NoEvent.WaitingForResponse,
  );

  const [reloadTrigger, setReloadTrigger] = useState(false);
  const forceReload = () => setReloadTrigger(!reloadTrigger);

  useEffect(() => {
    if (!open) {
      return;
    }

    const current = localStorage.getItem("gameEvent");
    if (!current) {
      return updateBigmoon(setBigmoon);
    }
    let currentJson: EventResponse;
    try {
      currentJson = JSON.parse(current);
    } catch {
      return updateBigmoon(setBigmoon);
    }
    const endTime = new Date(currentJson.currentEvent.times[0][1]);
    if (endTime < new Date(Date.now())) {
      return updateBigmoon(setBigmoon);
    }
    setBigmoon(currentJson.currentEvent);
  }, [open, reloadTrigger]);

  return [bigmoon, forceReload];
}

function EventBlock({ children }: { children: React.ReactNode }) {
  return <div className={styles.eventBlock}>{children}</div>;
}

function TimeDelta({ startDate, endDate }: { startDate: Date; endDate: Date }) {
  const { t } = useTranslation();

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timeout = setTimeout(() => setNow(Date.now()), 1000);
    return () => clearTimeout(timeout);
  });

  const usingStartDate = now < startDate.valueOf();
  const focusDate = usingStartDate ? startDate : endDate;

  const totalLength = endDate.valueOf() - startDate.valueOf();
  const done = Math.max(
    Math.min((now - startDate.valueOf()) / totalLength, 1),
    0,
  );

  const future = focusDate.valueOf() > now;
  let delta = Math.abs((focusDate.valueOf() - now) / 1000);
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  let hours = delta / 3600;
  const hoursRounded = Math.round(hours * 10) / 10;
  hours = Math.floor(hours);
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60);
  delta -= minutes * 60;
  const seconds = Math.ceil(delta);

  return (
    <>
      <div
        className={styles.eventDoneBar}
        style={{
          width: `${done * 100}%`,
        }}
      ></div>
      <div>
        {t(`${ns}.timePrefix`)}
        {days >= 1
          ? ` ${days} ${t(`${ns}.day`)}${hoursRounded > 0 ? ` ${hoursRounded} ${t(`${ns}.hour`)}` : ""}`
          : hours >= 1
            ? `${hours} ${t(`${ns}.hour`)}, ${minutes} ${t(`${ns}.minute`)}`
            : minutes >= 1
              ? `${minutes} ${t(`${ns}.minute`)}, ${seconds} ${t(`${ns}.second`)}`
              : `${seconds} ${t(`${ns}.second`)}`}
        {future ? "" : " ago"}
        {usingStartDate
          ? t(`${ns}.startsIn`)
          : future
            ? t(`${ns}.endsIn`)
            : t(`${ns}.ended`)}
      </div>
    </>
  );
}

const DATETIME_FORMATTER: Intl.DateTimeFormat = new Intl.DateTimeFormat(
  undefined,
  {
    dateStyle: "medium",
    timeStyle: "short",
  },
);

function Bigmoon({ bigmoon }: { bigmoon: BallEvent }) {
  const { t } = useTranslation();
  const startDate = new Date(bigmoon.times[0][0]);
  const endDate = new Date(bigmoon.times[0][1]);
  return (
    <EventBlock>
      <div className={styles.eventImage}>
        <img src={`https://dumbandfat.com/beastieball/${bigmoon.img_url}`} />
      </div>
      <div className={styles.eventBar}>
        <Link to={bigmoon.url} target="_blank" rel="noopener">
          Bigmoon Bash
        </Link>
        <TimeDelta startDate={startDate} endDate={endDate} />
        <div>{t(`${ns}.from`)}{"："}{DATETIME_FORMATTER.format(startDate)}</div>
        <div>{t(`${ns}.until`)}{"："}{DATETIME_FORMATTER.format(endDate)}</div>
      </div>
    </EventBlock>
  );
}

export default function Events() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const [bigmoon, bigmoonReload] = useBigmoon(open);

  return (
    <ErrorBoundary fallbackRender={() => null}>
      <div className={styles.events}>
        <div
          className={open ? styles.toggleButtonOpen : styles.toggleButton}
          role="button"
          onClick={() => setOpen(!open)}
          tabIndex={0}
        >
          {t(`${ns}.title`)}
        </div>
        <div className={open ? styles.openBox : styles.closedBox}>
          {bigmoon == NoEvent.WaitingForResponse ? (
            <EventBlock>{t(`${ns}.loading`)}</EventBlock>
          ) : bigmoon == NoEvent.NoEvent ? (
            <EventBlock>
              <img className={styles.wahhhhwahhhh} src="/nojs.png" />
              {t(`${ns}.noEvent`)}{" "}
              <button onClick={bigmoonReload}>{t(`${ns}.reload`)}</button>
            </EventBlock>
          ) : (
            <Bigmoon bigmoon={bigmoon} />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
