import {
  DEFAULT_SEEN,
  FRIEND_SPOILERS,
  SpoilerMode,
  useFriendSpoiler,
  useSpoilerMode,
  useSpoilerSeen,
} from "./useSpoiler";

export default function SpoilerOptions() {
  const [spoilerMode, setSpoilerMode] = useSpoilerMode();
  const [, setSpoilerSeen] = useSpoilerSeen();
  const [, setFriendSpoiler] = useFriendSpoiler();

  return (
    <div>
      <label>
        防剧透设置：{" "}
        <select
          value={spoilerMode || SpoilerMode.OnlySeen}
          onChange={(event) =>
            setSpoilerMode(Number(event.currentTarget.value))
          }
        >
          <option value={SpoilerMode.OnlySeen}>仅展示查看过的 Beastie/角色</option>
          <option value={SpoilerMode.All}>显示全部 Beastie/角色</option>
        </select>
      </label>
      <br />
      {spoilerMode == SpoilerMode.OnlySeen ? (
        <button
          onClick={() => {
            setSpoilerSeen(DEFAULT_SEEN);
            setFriendSpoiler(FRIEND_SPOILERS);
          }}
        >
          清除查看过的 Beastie/角色记录
        </button>
      ) : null}
    </div>
  );
}
