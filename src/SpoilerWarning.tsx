import { useLocalStorage } from "usehooks-ts";
import SpoilerOptions from "./shared/SpoilerOptions";

export default function SpoilerWarning(props: {
  children: React.ReactElement;
}) {
  const [spoilersOk, setSpoilersOk] = useLocalStorage("spoilersOk2", false, {
    serializer: String,
    deserializer: (value) => value == "true",
  });
  const site = import.meta.env.VITE_BRANDING;

  return spoilersOk ||
    window.navigator.userAgent.toLowerCase().includes("prerender") ? (
    props.children
  ) : (
    <div className="commoncontainer">
      <img src="/gameassets/sprExclam_1.png" />
      <h1>嘿！注意啦！</h1>
      <p>
        {site} 不是 Beastieball 的官方站点！
        <br />
        也就是说，这里可能出现游戏内未包含的内容，
        请不要把这里的内容转发到 Wishes Unlimited 的官方社区
        （比如 Wishes Unlimited 的 Discord 服务器），
        这样会违反 Wishes Unlimited 的社群规范。
        <br />
        {site} 包含对完整游戏的剧透！你可以在此处设置只显示点击过的 Beastie/角色。
        每个你没有点进去过的 Beastie/角色都不会显示图像或名称。
      </p>
      <SpoilerOptions />
      <br />
      <p>
        <button onClick={() => setSpoilersOk(true)}>确认进入</button>
      </p>
    </div>
  );
}
