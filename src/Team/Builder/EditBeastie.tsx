import abilities from "../../data/abilities";
import BEASTIE_DATA from "../../data/BeastieData";
import BeastieSelect from "../../shared/BeastieSelect";
import type { TeamBeastie } from "../Types";
import MoveSelect from "./MoveSelect";

const TYPES = [
  ["b", "Body"],
  ["h", "Spirit"],
  ["m", "Mind"],
];

type COACHING = "ba_r" | "bd_r" | "ha_r" | "hd_r" | "ma_r" | "md_r";
type TRAINING = "ba_t" | "bd_t" | "ha_t" | "hd_t" | "ma_t" | "md_t";

export default function EditBeastie({
  beastie,
  setBeastie,
}: {
  beastie: TeamBeastie;
  setBeastie: React.Dispatch<React.SetStateAction<TeamBeastie>>;
}) {
  const changeValue: <T extends keyof TeamBeastie>(
    key: T,
    value: TeamBeastie[T],
  ) => void = (key, value) => {
    setBeastie((beastie) => ({ ...beastie, [key]: value }));
  };
  const beastiedata = BEASTIE_DATA.get(beastie.specie);
  if (!beastiedata) {
    return null;
  }
  const extraPoints = Math.min(
    Math.max(
      0,
      Math.ceil(
        (240 -
          (beastie.ba_t +
            beastie.bd_t +
            beastie.ha_t +
            beastie.hd_t +
            beastie.ma_t +
            beastie.md_t)) /
          4,
      ),
    ),
  );

  const setAllCoaching = (value: number) => {
    TYPES.map(([char]) => {
      changeValue((char + "a_r") as COACHING, value);
      changeValue((char + "d_r") as COACHING, value);
    });
  };

  return (
    <>
      <label>
        Specie:{" "}
        <BeastieSelect
          beastieId={beastie.specie}
          setBeastieId={(beastieId) => {
            console.log(beastieId);
            if (beastieId) {
              changeValue("specie", beastieId);
              const newBeastie = BEASTIE_DATA.get(beastieId);
              if (!newBeastie) {
                return;
              }
              changeValue(
                "xp",
                (beastie.xp / beastiedata.growth) * newBeastie.growth,
              );
              if (beastie.name == beastiedata.name) {
                changeValue("name", newBeastie.name);
              }
              changeValue(
                "attklist",
                beastie.attklist.map((moveId) =>
                  newBeastie.attklist.includes(moveId)
                    ? moveId
                    : newBeastie.attklist[0],
                ),
              );
            }
          }}
        />
      </label>
      <label>
        Name:{" "}
        <input
          type="text"
          maxLength={12}
          defaultValue={beastie.name}
          onChange={(event) => changeValue("name", event.currentTarget.value)}
        />
      </label>
      <label>
        Number:{" "}
        <input
          type="number"
          min={0}
          max={999}
          defaultValue={Number(beastie.number)}
          onChange={(event) =>
            changeValue("number", event.currentTarget.value.padStart(2, "0"))
          }
        />
      </label>
      <label>
        Level:{" "}
        <input
          type="number"
          min={1}
          max={100}
          defaultValue={Math.floor(Math.cbrt(beastie.xp / beastiedata.growth))}
          onChange={(event) =>
            changeValue(
              "xp",
              Number(event.currentTarget.value) ** 3 * beastiedata.growth,
            )
          }
        />
      </label>
      <label>
        Trait:{" "}
        <select
          defaultValue={beastie.ability_index}
          onChange={(event) =>
            changeValue("ability_index", Number(event.currentTarget.value))
          }
        >
          {beastiedata.ability.map((abilityId, index) => (
            <option key={abilityId} value={index}>
              {abilities[abilityId].name}
            </option>
          ))}
        </select>
      </label>
      <div>
        Coaching - <button onClick={() => setAllCoaching(0)}>All to 0%</button>{" "}
        - <button onClick={() => setAllCoaching(1)}>All to 100%</button>
      </div>
      {TYPES.map(([char, name]) => {
        const pow_key = (char + "a_r") as COACHING;
        const def_key = (char + "d_r") as COACHING;
        return (
          <div key={char}>
            <label>
              {name} POW{" "}
              <input
                type="number"
                min={0}
                max={100}
                value={Math.round(beastie[pow_key] * 100000) / 1000}
                onChange={(event) =>
                  changeValue(pow_key, Number(event.currentTarget.value) / 100)
                }
              />
              %
            </label>
            {" - "}
            <label>
              {name} DEF{" "}
              <input
                type="number"
                min={0}
                max={100}
                value={Math.round(beastie[def_key] * 100000) / 1000}
                onChange={(event) =>
                  changeValue(def_key, Number(event.currentTarget.value) / 100)
                }
              />
              %
            </label>
          </div>
        );
      })}
      <div>
        Training - {extraPoints} Point{extraPoints == 1 ? "" : "s"} Left -{" "}
        <button
          onClick={() => {
            TYPES.map(([char]) => {
              changeValue((char + "a_t") as TRAINING, 0);
              changeValue((char + "d_t") as TRAINING, 0);
            });
          }}
        >
          Clear
        </button>
      </div>
      {TYPES.map(([char, name]) => {
        const pow_key = (char + "a_t") as TRAINING;
        const pow_val = beastie[pow_key];
        const def_key = (char + "d_t") as TRAINING;
        const def_val = beastie[def_key];
        return (
          <div key={char}>
            <label>
              {name} POW +
              <input
                type="number"
                min={0}
                max={Math.min(Math.floor(pow_val / 4) + extraPoints, 30)}
                value={Math.floor(pow_val / 4)}
                onChange={(event) =>
                  changeValue(
                    pow_key,
                    Math.min(
                      Math.floor(pow_val / 4) + extraPoints,
                      30,
                      Number(event.currentTarget.value),
                    ) * 4,
                  )
                }
              />
            </label>
            {" - "}
            <label>
              {name} DEF +
              <input
                type="number"
                min={0}
                max={Math.min(Math.floor(def_val / 4) + extraPoints, 30)}
                value={Math.floor(def_val / 4)}
                onChange={(event) =>
                  changeValue(
                    def_key,
                    Math.min(
                      Math.floor(def_val / 4) + extraPoints,
                      30,
                      Number(event.currentTarget.value),
                    ) * 4,
                  )
                }
              />
            </label>
          </div>
        );
      })}
      <MoveSelect
        beastieMovelist={beastiedata.attklist}
        teamBeastieMovelist={beastie.attklist}
        setMove={(index, move) => {
          beastie.attklist[index] = move;
          changeValue("attklist", beastie.attklist);
        }}
      />
    </>
  );
}
