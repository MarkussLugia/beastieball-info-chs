import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";

import styles from "./Shared.module.css";
import MoveModalContext from "./MoveModalContext";
import BEASTIE_DATA from "../data/Beastiedata";
import { LEARN_SETS } from "../data/Learnsets";
import { Move } from "../data/MoveData";
import InfoBox from "./InfoBox";

const SCROLL_KEYS = [
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown",
  " ",
  "PageUp",
  "PageDown",
  "Home",
  "End",
];

export default function MoveModalProvider(props: PropsWithChildren) {
  const [move, setMove] = useState<null | Move>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const preventDefault = useCallback((event: Event) => {
    let elem: HTMLElement | null = event.target as HTMLElement;
    while (elem && elem != dialogRef.current) {
      if (elem.scrollHeight > elem.clientHeight) {
        return;
      }
      elem = elem.parentElement;
    }
    event.stopPropagation();
    event.preventDefault();
  }, []);

  const preventScrollKeys = useCallback(
    (event: KeyboardEvent) => {
      if (SCROLL_KEYS.includes(event.key)) {
        preventDefault(event);
      }
    },
    [preventDefault],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.addEventListener("wheel", preventDefault, {
        passive: false,
      });
      dialog.addEventListener("touchmove", preventDefault, {
        passive: false,
      });
      dialog.addEventListener("keydown", preventScrollKeys, {
        passive: false,
      });
      return () => {
        dialog.removeEventListener("wheel", preventDefault);
        dialog.removeEventListener("touchmove", preventDefault);
        dialog.removeEventListener("keydown", preventScrollKeys);
      };
    }
  }, [preventDefault, preventScrollKeys]);

  useEffect(() => {
    if (dialogRef.current) {
      if (move) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [move]);

  const levelBeasties: [string, number][] = [];
  const friendBeasties: string[] = [];
  if (move) {
    BEASTIE_DATA.forEach((beastie) => {
      const learnLevel = LEARN_SETS[beastie.learnset].find(
        (value) => value[0] == move.id,
      );
      if (learnLevel) {
        levelBeasties.push([beastie.name, learnLevel[1]]);
      } else if (beastie.attklist.includes(move.id)) {
        friendBeasties.push(beastie.name);
      }
    });
  }

  return (
    <MoveModalContext.Provider value={setMove}>
      <dialog
        ref={dialogRef}
        onClick={(event) => {
          if (event.target == dialogRef.current) {
            setMove(null);
          }
        }}
      >
        <InfoBox header={`Beasties that learn ${move?.name}`}>
          <div className={styles.movebeastielist}>
            {levelBeasties.length ? "From Level" : ""}
            {levelBeasties.map((name) => (
              <>
                <Link
                  to={`/beastiepedia/${name[0]}`}
                  key={name[0]}
                  onClick={() => setMove(null)}
                >
                  <img src={`/icons/${name[0]}.png`} />
                  {name[0]} - {name[1]}
                </Link>
              </>
            ))}
          </div>
          {levelBeasties.length && friendBeasties.length ? <br /> : null}
          <div className={styles.movebeastielist}>
            {friendBeasties.length ? "From Friends" : ""}
            {friendBeasties.map((name) => (
              <>
                <Link
                  to={`/beastiepedia/${name}`}
                  key={name}
                  onClick={() => setMove(null)}
                >
                  <img src={`/icons/${name}.png`} />
                  {name}
                </Link>
              </>
            ))}
          </div>
        </InfoBox>
      </dialog>
      {props.children}
    </MoveModalContext.Provider>
  );
}
