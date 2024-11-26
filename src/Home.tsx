import { NavigationMenu, NavigationMenuOption } from "./shared/NavigationMenu";

import { useTranslation } from "react-i18next";

export default function Home(): React.ReactNode {
  const { t } = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuOption
        text={t("playdex.title")}
        image={"/gameassets/sprMainmenu/6.png"}
        hoverImage={"/gameassets/sprMainmenu/7.png"}
        location={"/playdex/"}
      />
      <NavigationMenuOption
        text={t("beastiepedia.title")}
        image={"/gameassets/sprMainmenu/0.png"}
        hoverImage={"/gameassets/sprMainmenu/1.png"}
        location={"/beastiepedia/"}
      />
      <NavigationMenuOption
        text={t("map.title")}
        image={"/gameassets/sprMainmenu/2.png"}
        hoverImage={"/gameassets/sprMainmenu/3.png"}
        location={"/map/"}
      />
      <NavigationMenuOption
        text={t("teams.title")}
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
