import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //   .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      zh: {
        translation: {
          playdex: { title: "招式图鉴" },
          beastiepedia: {
            title: "Beastie 图鉴",
            contentPreview: {
              loading: "加载中",
              glError: "WebGL 错误",
              canvasPlaceholder: "Beastie 预览",
              previewOptions: "预览选项",
            },
            noSelected: {
              prompt: "未选中 Beastie",
              sidebarVisible: "在左侧栏选中一个 Beastie 以查看详情",
              sidebarHidden: "打开左侧栏选择一个 Beastie 以查看详情",
            },
            animationOptions: {
              title: "播放选项",
              play: "播放",
              pause: "暂停",
              speed: "播放速度：",
              framenum: "当前帧：",
              reset: "重置",
              altSprite: "不同的外观：",
              altSpriteNormal: "一般外观",
              altSpriteAlt: "外观",
              AnimationOptionTitle: "动画选择：",
              animationNames: {
                idle: "待机",
                move: "移动",
                ready: "就绪",
                spike: "扣杀",
                volley: "击球",
                good: "成功了！",
                bad: "失败了…",
                fall: "跌倒",
                air: "跃起",
                stop: "立定",
                menu: "菜单",
                hug: "抱抱",
              },
            },
            colorTabs: {
              tabColor: "常见色",
              tabColor2: "常见色2",
              tabShiny: "稀有色",
              tabCustom: "自定义颜色",
              reset: "重置配色",
              random: "随机配色",
              copyLink: "复制包含当前配色的链接",
              otherBeastie: "套用其他 Beastie 的配色：",
            },
            previewSettings: {
              title: "预览选项",
              savePNG: "保存 PNG",
              copyPNG: "复制 PNG",
              saveGIF: "保存 GIF",
              speedNotify:
                "设置的播放速度较高时，保存的 GIF 可能无法达到此速度。",
              displaySize: "图框大小：",
              background: "背景：",
              crop: "缩放至合适大小：",
            },
            contentInfo: {
              number: "编号",
              name: "名称",
              development: "设计进度",
              description: "图鉴介绍",
              traits: "特性",
              recessiveTrait: "（隐藏）",
              unknownTrait: "未收录的特性：",
              recruitCondition: "收服条件",
              recruitNoWild: "无法在野外收服。",
              allyTraining: "同伴特训",
              pow: "攻击",
              def: "防御",
              statDist: "能力值",
              expForLevelPre: "等级",
              expForLevelPost: "所需经验",
              research: "开发笔记",
              researcher: "设计师：",
              videographer: "动画师：",
            },
            evolution: {
              atLevel: "达到等级 {{level}} 时",
              atPlace: "在 {{place}} ",
              atRelationship: "达成 {{relationship}} 好感时",
              metamorph: "进化",
              from: "自",
              to: "至",
              or: "或",
              noEvoFrom: "此 Beastie 是基础形态。",
              noEvoTo: "此 Beastie 无进化形态。",
              spoilerAlert: "此处可能包含剧透，点击显示隐藏的内容。",
            },
            statDistribution: {
              pow: "攻",
              def: "防",
            }
          },
          map: { title: "地图" },
          teams: { title: "推荐的配队" },
        },
      },
    },
    lng: "zh",
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
