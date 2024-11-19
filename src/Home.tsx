import { NavigationMenu, NavigationMenuOption } from "./shared/NavigationMenu";

export default function Home(): React.ReactNode {
  return (
    <NavigationMenu>
      <NavigationMenuOption
        text={"招式图鉴"}
        image={"/gameassets/sprMainmenu/6.png"}
        hoverImage={"/gameassets/sprMainmenu/7.png"}
        location={"/playdex/"}
      />
      <NavigationMenuOption
        text={"Beastie 图鉴"}
        image={"/gameassets/sprMainmenu/0.png"}
        hoverImage={"/gameassets/sprMainmenu/1.png"}
        location={"/beastiepedia/"}
      />
      <NavigationMenuOption
        text={"地图"}
        image={"/gameassets/sprMainmenu/2.png"}
        hoverImage={"/gameassets/sprMainmenu/3.png"}
        location={"/map/"}
      />
      <NavigationMenuOption
        text={"推荐的配队"}
        image={"/gameassets/sprMainmenu/20.png"}
        hoverImage={"/gameassets/sprMainmenu/21.png"}
        location={"/teams/"}
      />
      {/* <NavigationMenuOption
        text={"Modding"}
        image={"/gameassets/sprMainmenu/12.png"}
        hoverImage={"/gameassets/sprMainmenu/13.png"}
        location={"/modding/"}
      /> */}
    </NavigationMenu>
  );
}
