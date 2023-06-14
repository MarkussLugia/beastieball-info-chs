// @flow strict

import type { BeastieType } from "./BeastieType.js";

const BEASTIE_DATA: Map<string, BeastieType> = new Map();

// Note: all the -1's are probably actually non existant lists/arrays
BEASTIE_DATA.set("shroom1", {
  ability: ["tagheal", "fieldclear"],
  ability_hidden: true,
  attklist: [
    "careful",
    "bomb",
    "hazeball",
    "dropshot",
    "rocksmash",
    "healhit",
    "healhit2",
    "dig",
    "allycover",
    "allyrush",
    "refresh",
    "protect",
    "rest",
    "fieldclear",
    "mark",
    "preblock",
    "substitute",
    "lifepass",
    "callout",
    "set",
  ],
  attklist_randomize: -1,
  ba: 45,
  ball_impact_pos: {
    x: 43.5,
    y: -177.3399014778,
  },
  ball_miss_pos: {
    x: 119,
    y: -121,
  },
  ball_ready_pos: {
    x: 214.5,
    y: -224.4616467277,
  },
  base_exp: 117.4,
  bd: 50,
  body_color_index: 0,
  colors: [
    {
      array: [
        {
          color: 11131786,
          x: 0,
        },
        {
          color: 8323027,
          x: 1,
        },
      ],
    },
    {
      array: [
        {
          color: 13696983,
          x: 0.1008333333,
        },
        {
          color: 13630975,
          x: 0.4683333333,
        },
        {
          color: 10878939,
          x: 0.9258333333,
        },
      ],
    },
    {
      array: [
        {
          color: 2829120,
          x: 0.0783333333,
        },
        {
          color: 3983871,
          x: 0.2433333333,
        },
        {
          color: 7763680,
          x: 0.4358333333,
        },
        {
          color: 6377894,
          x: 0.6158333333,
        },
        {
          color: 6382059,
          x: 0.8133333333,
        },
        {
          color: 13339273,
          x: 1,
        },
      ],
    },
    {
      array: [
        {
          color: 7707135,
          x: 0,
        },
        {
          color: 6514897,
          x: 1,
        },
      ],
    },
  ],
  combos: [
    [46, 0, 12],
    [49, 1, 1, 8, 1, 0.25],
    [49, 1, 1, 8, 1, 1],
    [49, 2, 1, 8, 2, 0.25],
  ],
  desc:
    "Its body is covered in microscopic fungal feelers, making it feel sticky. They tend to all varieties of plant life.",
  designer: 2,
  evo_pose: [
    {
      anim: "good",
      scale: 2,
      x: 0,
      y: 0,
    },
    {
      anim: "good",
      scale: 2,
      x: 0,
      y: 0,
    },
    {
      anim: "good",
      scale: 2,
      x: 0,
      y: 0,
    },
  ],
  evolution: null,
  face_color_index: 0,
  first_frame: 30,
  foot_size: 18,
  foot_type: 0,
  growth: 1,
  ha: 43,
  hd: 67,
  id: "shroom1",
  isBaby: true,
  learnset: 0,
  learnset_randomize: -1,
  loco: {
    anim_min_speed: 0.2,
    char_width: 66.75,
    emote_hop_height: 25,
    float_dist: 0,
    float_wave: 0,
    float_wave_freq: 1000,
    hop_height: 0,
    hop_length: 1.5,
    hop_min_speed: 0.04,
    hop_shake: 0,
    hop_wobble: 0,
    move_accel: 3,
    move_decel: 0.6666666667,
    move_min_dist: 0,
    move_pause_frames: [],
    move_speed: 1,
    move_speed_start: -0.66,
    move_to_idle_transition_anim: "",
    move_to_idle_transition_frames: [8, 9, 10, 11, 12, 13, 14, 15],
    randomize_idle: false,
    squishiness: 0.2,
    stretchiness: 0.2,
  },
  ma: 42,
  md: 55,
  name: "Sprecko",
  number: 1,
  partner_impact: {
    angle: 310.0793457031,
    anim: "volley",
    x: 120.75,
    y: -64.8557353976,
  },
  prev_ids: ["tree1"],
  recruit: {
    conditions: [
      {
        effect_type: 42,
        event: null,
        freq: -1,
        func: null,
        my_data: null,
        player: 2,
        rel_color: -1,
        type: 32,
      },
    ],
    description: "Create any type of field effect",
  },
  roamer_style: 1,
  scale: [0.85, 1],
  shiny: [
    {
      array: [
        {
          color: 15528703,
          x: 0,
        },
        {
          color: 15528703,
          x: 1,
        },
      ],
    },
    {
      array: [
        {
          color: 9021384,
          x: 0.2883333333,
        },
        {
          color: 9939131,
          x: 0.6658333333,
        },
        {
          color: 15593464,
          x: 1,
        },
      ],
    },
    {
      array: [
        {
          color: 2829120,
          x: 0.0783333333,
        },
        {
          color: 3983871,
          x: 0.2433333333,
        },
        {
          color: 7763680,
          x: 0.4358333333,
        },
        {
          color: 6377894,
          x: 0.6158333333,
        },
        {
          color: 6382059,
          x: 0.8133333333,
        },
        {
          color: 13339273,
          x: 1,
        },
      ],
    },
    {
      array: [
        {
          color: 7112637,
          x: 0,
        },
        {
          color: 6979005,
          x: 1,
        },
      ],
    },
  ],
  splash_pos: {
    angle: 339.3672485352,
    anim: "ready",
    x: 85,
    y: -112,
  },
  spr: 4,
  tamecond: null,
  tamelvl: 2,
  tyield: ["hd", 1],
})
  .set("cassowary1", {
    ability: ["starter_b", "lifeorb"],
    ability_hidden: true,
    attklist: [
      "bounce",
      "healhit",
      "set",
      "jump",
      "rush",
      "body",
      "rushattack",
      "pushattack",
      "superpower",
      "recover",
      "curse",
      "defheal",
      "preblock",
      "desperate",
      "cover",
      "callout",
      "bdefup",
      "storedpower",
      "protect",
      "breakswipe",
      "starterbody",
    ],
    attklist_randomize: -1,
    ba: 75,
    ball_impact_pos: {
      x: 145.1428571429,
      y: -84.5714285714,
    },
    ball_miss_pos: {
      x: 178,
      y: -94,
    },
    ball_ready_pos: {
      x: 153.1428571429,
      y: -291.4285714286,
    },
    base_exp: 100.75,
    bd: 65,
    body_color_index: 0,
    colors: [
      {
        array: [
          {
            color: 8824263,
            x: 0,
          },
          {
            color: 8366034,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 2908850,
            x: 0,
          },
          {
            color: 2640033,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 5201800,
            x: 0,
          },
          {
            color: 9337701,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 1423345,
            x: 0,
          },
          {
            color: 511999,
            x: 0.5458333333,
          },
          {
            color: 1216495,
            x: 1,
          },
        ],
      },
    ],
    combos: [
      [47, 0, 1.2],
      [0, 2, 1, 3, 2, 1],
      [0, 2, 2, 3, 2, 2],
      [3, 2, 2],
    ],
    desc:
      "Anytime they encounter something new, they kick it. Kicking is their way of understanding the world.",
    designer: 256,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 1,
    first_frame: -1,
    foot_size: 24,
    foot_type: 1,
    growth: 1,
    ha: 40,
    hd: 25,
    id: "cassowary1",
    isBaby: true,
    learnset: 1,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 90.25,
      emote_hop_height: 25,
      float_dist: 0,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 0,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 3,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [],
      move_speed: 1,
      move_speed_start: -0.3,
      move_to_idle_transition_anim: "",
      move_to_idle_transition_frames: [8, 9, 13, 14, 15, 18],
      randomize_idle: true,
      squishiness: 0.2,
      stretchiness: 0.2,
    },
    ma: 20,
    md: 45,
    name: "Kichik",
    number: 2,
    partner_impact: {
      angle: 350.4820556641,
      anim: "spike",
      x: 181.7142857143,
      y: -222.8571428571,
    },
    prev_ids: ["bunny"],
    recruit: {
      conditions: [
        {
          damage: ">=80",
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          target: [0, 1],
          type: 11,
        },
      ],
      description: "Deal 80+ damage with an attack",
    },
    roamer_style: 1,
    scale: [0.85, 1],
    shiny: [
      {
        array: [
          {
            color: 5658752,
            x: 0,
          },
          {
            color: 9149109,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 6796799,
            x: 0.0083333333,
          },
          {
            color: 10132223,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 3813165,
            x: 0,
          },
          {
            color: 7632042,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 5460977,
            x: 0,
          },
          {
            color: 9521612,
            x: 1,
          },
        ],
      },
    ],
    splash_pos: {
      angle: 348.3026123047,
      anim: "ready",
      x: 106,
      y: -130,
    },
    spr: 251,
    tamecond: null,
    tamelvl: 2,
    tyield: ["ba", 1],
  })
  .set("frog1", {
    ability: ["starter_h", "allheart"],
    ability_hidden: true,
    attklist: [
      "hearthitbody",
      "pepshot",
      "heart",
      "commit",
      "minddown",
      "allyprotect",
      "rush",
      "cover",
      "allyrush",
      "heartup",
      "followme",
      "healbell",
      "myheartpass",
      "cheer",
      "rhythm",
      "protect",
      "noisytag",
      "set",
      "introduction",
      "healhit",
      "storedpower",
      "serve",
      "vigor",
      "shakenmind",
      "moon",
    ],
    attklist_randomize: -1,
    ba: 37,
    ball_impact_pos: {
      x: 103.5,
      y: -212.3011963406,
    },
    ball_miss_pos: {
      x: 102,
      y: -163,
    },
    ball_ready_pos: {
      x: 116.25,
      y: -331.6256157635,
    },
    base_exp: 102.1,
    bd: 45,
    body_color_index: 0,
    colors: [
      {
        array: [
          {
            color: 4611317,
            x: 0,
          },
          {
            color: 5329371,
            x: 0.3333333333,
          },
          {
            color: 6638819,
            x: 0.6433333333,
          },
          {
            color: 8209633,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 7097784,
            x: 0,
          },
          {
            color: 8211898,
            x: 0.500952381,
          },
          {
            color: 8537762,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 5392034,
            x: 0,
          },
          {
            color: 5721968,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 10139382,
            x: 0.0533333333,
          },
          {
            color: 9360366,
            x: 0.9808333333,
          },
        ],
      },
    ],
    combos: [
      [1, 2, 2],
      [15, 1, 1, 1, 2, 1],
      [42, 2, 2, 1, 2, 1],
      [42, 2, 2],
    ],
    desc:
      "They crave attention. They can hardly spend time with their own kind because they compete for an audience.",
    designer: 9,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 0,
    first_frame: 21,
    foot_size: 23,
    foot_type: 0,
    growth: 1,
    ha: 70,
    hd: 60,
    id: "frog1",
    isBaby: true,
    learnset: 2,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 65.25,
      emote_hop_height: 25,
      float_dist: 0,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 0,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 0.4444444444,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [],
      move_speed: 1,
      move_speed_start: 0,
      move_to_idle_transition_anim: "",
      move_to_idle_transition_frames: [8, 12, 13, 14],
      randomize_idle: true,
      squishiness: 0.2,
      stretchiness: 0.2,
    },
    ma: 25,
    md: 33,
    name: "Axolati",
    number: 3,
    partner_impact: {
      angle: 342.950958252,
      anim: "spike",
      x: 214,
      y: -238,
    },
    prev_ids: ["tadpole"],
    recruit: {
      conditions: [
        {
          effect_type: 58,
          event: null,
          freq: -1,
          my_data: null,
          rel_color: -1,
          target: 2,
          type: 32,
        },
      ],
      description: "Boost [sprIcon,1]POW +3 or more on a Beastie",
    },
    roamer_style: 1,
    scale: [0.85, 1],
    shiny: [
      {
        array: [
          {
            color: 11641317,
            x: 0,
          },
          {
            color: 10724331,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 11260651,
            x: 0,
          },
          {
            color: 10138855,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 7762366,
            x: 0,
          },
          {
            color: 6442151,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 9860313,
            x: 0,
          },
          {
            color: 7438796,
            x: 1,
          },
        ],
      },
    ],
    splash_pos: {
      angle: 348.5530395508,
      anim: "ready",
      x: 10,
      y: -95,
    },
    spr: 340,
    tamecond: null,
    tamelvl: 2,
    tyield: ["ha", 1],
  })
  .set("bilby1", {
    ability: ["starter_m", "fwdpass"],
    ability_hidden: true,
    attklist: [
      "bounce",
      "set",
      "dump",
      "mindup",
      "dropshot",
      "markattack",
      "mind",
      "rollshot",
      "mindbomb",
      "body",
      "jazzpass",
      "superquick",
      "allycover",
      "mindpass",
      "rush",
      "allyrush",
      "allyprotect",
      "stresspass",
      "recover",
      "protect",
      "refresh",
      "serve",
      "trap",
      "construct",
      "slipshot",
      "passattack",
      "startermind",
      "dig",
    ],
    attklist_randomize: -1,
    ba: 28,
    ball_impact_pos: {
      x: 192.75,
      y: -172.0197044335,
    },
    ball_miss_pos: {
      x: 234.75,
      y: -69.4159042928,
    },
    ball_ready_pos: {
      x: 84.75,
      y: -400.0281491907,
    },
    base_exp: 112,
    bd: 40,
    body_color_index: 1,
    colors: [
      {
        array: [
          {
            color: 16424025,
            x: 0,
          },
          {
            color: 16766833,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 9013712,
            x: 0,
          },
          {
            color: 9744383,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 687313,
            x: 0,
          },
          {
            color: 2664163,
            x: 0.5683333333,
          },
          {
            color: 2644648,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 9420522,
            x: 0,
          },
          {
            color: 11649501,
            x: 0.5058333333,
          },
          {
            color: 11320308,
            x: 1,
          },
        ],
      },
    ],
    combos: [
      [33, 0, 19, 47, 0, 0.75],
      [7, 1, 1, 26, 1, 1],
      [26, 0, 1, 20, 0, 1],
      [26, 2, 1],
    ],
    desc:
      "Their busy mind is only at rest while they dig. They'll hyperfocus for days on a single burrow.",
    designer: 32,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 0,
    first_frame: -1,
    foot_size: 15,
    foot_type: 0,
    growth: 1,
    ha: 17,
    hd: 50,
    id: "bilby1",
    isBaby: true,
    learnset: 3,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 65.5,
      emote_hop_height: 25,
      float_dist: 0,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 0,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 0.4444444444,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [],
      move_speed: 1,
      move_speed_start: 0,
      move_to_idle_transition_anim: "",
      move_to_idle_transition_frames: [10, 11, 12, 13],
      randomize_idle: true,
      squishiness: 0,
      stretchiness: 0,
    },
    ma: 65,
    md: 70,
    name: "Bildit",
    number: 4,
    partner_impact: {
      angle: 341.1914978027,
      anim: "spike",
      x: 190.5,
      y: -342.2660098522,
    },
    prev_ids: ["setter1"],
    recruit: {
      conditions: [
        {
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 35,
        },
        {
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 35,
        },
        {
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 35,
        },
      ],
      description: "Pass the ball 3+ times",
    },
    roamer_style: 1,
    scale: [0.85, 1],
    shiny: [
      {
        array: [
          {
            color: 11321049,
            x: 0,
          },
          {
            color: 9671611,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 8951244,
            x: 0,
          },
        ],
      },
      {
        array: [
          {
            color: 1336245,
            x: 0,
          },
          {
            color: 3096750,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 6450298,
            x: 0,
          },
        ],
      },
    ],
    splash_pos: {
      angle: 343.3531494141,
      anim: "ready",
      x: 101.25,
      y: -146.9387755102,
    },
    spr: 286,
    tamecond: null,
    tamelvl: 2,
    tyield: ["md", 1],
  })
  .set("possum1", {
    ability: ["regenerator"],
    ability_hidden: false,
    attklist: [
      "bounce",
      "body",
      "rocksmash",
      "storedpower",
      "dig",
      "vigor",
      "juggle",
      "curse",
      "recover",
      "libero",
      "allyrush",
      "cover",
      "lockon",
      "mark",
      "protect",
      "bench",
      "batonpass",
      "haze",
      "construct",
      "tagattack",
    ],
    attklist_randomize: -1,
    ba: 45,
    ball_impact_pos: {
      x: 13.7142857143,
      y: -141.7142857143,
    },
    ball_miss_pos: {
      x: 79,
      y: -62,
    },
    ball_ready_pos: {
      x: 74.2857142857,
      y: -235.4285714286,
    },
    base_exp: 81.577,
    bd: 65,
    body_color_index: 0,
    colors: [
      {
        array: [
          {
            color: 5066239,
            x: 0,
          },
          {
            color: 5397756,
            x: 0.4166666667,
          },
          {
            color: 4491514,
            x: 0.7633333333,
          },
          {
            color: 3774202,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 6121858,
            x: 0,
          },
          {
            color: 13351855,
            x: 0.58,
          },
          {
            color: 8945786,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 7829185,
            x: 0,
          },
          {
            color: 9667271,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 12769279,
            x: 0,
          },
          {
            color: 10344703,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 16761717,
            x: 0,
          },
          {
            color: 14806273,
            x: 1,
          },
        ],
      },
    ],
    combos: [
      [33, 0, 20, 47, 0, 0.75],
      [16, 2, 1],
      [16, 2, 2],
      [16, 2, 2],
    ],
    desc:
      "Their semitransparent ears shield their eyes from wind as they glide. They feel safest in large groups, especially with watchful Sefren.",
    designer: 256,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 0,
    first_frame: -1,
    foot_size: 9,
    foot_type: 0,
    growth: 0.97,
    ha: 18,
    hd: 25,
    id: "possum1",
    isBaby: false,
    learnset: 4,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 62.25,
      emote_hop_height: 25,
      float_dist: 0,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 0,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 0.4444444444,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [8],
      move_speed: 1.1,
      move_speed_start: 0,
      move_to_idle_transition_anim: "stop",
      move_to_idle_transition_frames: [
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
      ],
      randomize_idle: true,
      squishiness: 0,
      stretchiness: 0,
    },
    ma: 22,
    md: 57,
    name: "Shooga",
    number: 5,
    partner_impact: {
      angle: 334.698638916,
      anim: "move",
      x: 126.8571428571,
      y: -82.2857142857,
    },
    prev_ids: [],
    recruit: {
      conditions: [
        {
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 18,
        },
      ],
      description: "Land a free point",
    },
    roamer_style: 1,
    scale: [0.85, 1],
    shiny: [
      {
        array: [
          {
            color: 7981055,
            x: 0,
          },
          {
            color: 7986175,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 5549545,
            x: 0,
          },
          {
            color: 4683994,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 8156865,
            x: 0,
          },
          {
            color: 9930445,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 3816513,
            x: 0,
          },
          {
            color: 4673118,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 12961191,
            x: 0,
          },
          {
            color: 13817720,
            x: 1,
          },
        ],
      },
    ],
    splash_pos: {
      angle: -10,
      anim: "ready",
      x: 20.5714285714,
      y: -75.4285714286,
    },
    spr: 237,
    tamecond: null,
    tamelvl: 1,
    tyield: ["bd", 1],
  })
  .set("lyrebird1", {
    ability: ["moldbreaker", "unmarked"],
    ability_hidden: true,
    attklist: [
      "flyback",
      "tailwind",
      "cut",
      "heart",
      "desperate",
      "bomb",
      "rush",
      "heartpass",
      "switch",
      "bench",
      "heartup",
      "bellydrum",
      "protect",
      "whirlwind",
      "cover",
      "basecover",
      "backswitch",
      "hearthitbody",
      "dragontail",
      "noisytag",
      "starterheart",
    ],
    attklist_randomize: -1,
    ba: 23,
    ball_impact_pos: {
      x: -57.1428571429,
      y: -272,
    },
    ball_miss_pos: {
      x: 77,
      y: -117,
    },
    ball_ready_pos: {
      x: 94.8571428571,
      y: -348.5714285714,
    },
    base_exp: 69.509,
    bd: 20,
    body_color_index: 1,
    colors: [
      {
        array: [
          {
            color: 8741209,
            x: 0,
          },
          {
            color: 7956043,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 8670973,
            x: 0,
          },
          {
            color: 12680701,
            x: 0.5,
          },
          {
            color: 16420335,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 16766293,
            x: 0,
          },
          {
            color: 15269702,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 5627385,
            x: 0,
          },
          {
            color: 14004735,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 14931921,
            x: 0,
          },
        ],
      },
    ],
    combos: [
      [-7, 0, 1],
      [7, 1, 1],
      [7, 2, 1],
      [7, 2, 0],
    ],
    desc:
      "They are constantly in motion. Their colorful plumage is a point of pride and they sometimes accessorize it with flower petals.",
    designer: 256,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 1,
    first_frame: -1,
    foot_size: 10,
    foot_type: 1,
    growth: 0.89,
    ha: 68,
    hd: 72,
    id: "lyrebird1",
    isBaby: false,
    learnset: 5,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 48.5,
      emote_hop_height: 25,
      float_dist: 0,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 0,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 0.4444444444,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [],
      move_speed: 1,
      move_speed_start: 0,
      move_to_idle_transition_anim: "",
      move_to_idle_transition_frames: [11, 12, 13, 14],
      randomize_idle: true,
      squishiness: 0,
      stretchiness: 0,
    },
    ma: 30,
    md: 35,
    name: "Sefren",
    number: 6,
    partner_impact: {
      angle: 339.9590454102,
      anim: "spike",
      x: 194.2857142857,
      y: -293.7142857143,
    },
    prev_ids: ["angel1"],
    recruit: {
      conditions: [
        {
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 34,
        },
        {
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 34,
        },
        {
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 34,
        },
      ],
      description: "Make 3+ MOVE actions",
    },
    roamer_style: 1,
    scale: [0.85, 1],
    shiny: [
      {
        array: [
          {
            color: 15959910,
            x: 0,
          },
          {
            color: 15750243,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 15597398,
            x: 0,
          },
          {
            color: 16771963,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 16766293,
            x: 0,
          },
          {
            color: 15269702,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 5627385,
            x: 0,
          },
          {
            color: 14004735,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 14931921,
            x: 0,
          },
        ],
      },
    ],
    splash_pos: {
      angle: 326.5792541504,
      anim: "volley",
      x: 30,
      y: -137,
    },
    spr: 347,
    tamecond: null,
    tamelvl: 1,
    tyield: ["ha", 1],
  })
  .set("kangaroo1", {
    ability: ["prankster", "handsfree"],
    ability_hidden: true,
    attklist: [
      "bounce",
      "breakswipe",
      "sensihit",
      "mind",
      "netattack",
      "dropshot",
      "rollshot",
      "pursuit",
      "heartdown",
      "hazeball",
      "juggle",
      "allyrush",
      "rest",
      "shaken",
      "allnervous",
      "protect",
      "trap",
      "feint",
      "nettle",
      "recover",
      "taunt",
      "preblock",
      "followme",
      "lowattks",
      "threat",
      "stress",
      "slipshot",
      "spitball",
      "startermind",
    ],
    attklist_randomize: -1,
    ba: 50,
    ball_impact_pos: {
      x: 77,
      y: -237,
    },
    ball_miss_pos: {
      x: 92,
      y: -94,
    },
    ball_ready_pos: {
      x: 79,
      y: -297,
    },
    base_exp: 115.36,
    bd: 55,
    body_color_index: 0,
    colors: [
      {
        array: [
          {
            color: 8828393,
            x: 0,
          },
          {
            color: 10864609,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 6060723,
            x: 0,
          },
          {
            color: 10204390,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 6708338,
            x: 0,
          },
          {
            color: 6708310,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 3318015,
            x: 0,
          },
          {
            color: 5426657,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 16758135,
            x: 0,
          },
          {
            color: 16100812,
            x: 1,
          },
        ],
      },
    ],
    combos: [
      [38, 3, 2],
      [12, 8, 1],
      [12, 8, 2, 38, 8, 1],
      [12, 8, 2],
    ],
    desc:
      "They are skilled at mimicry and can even learn human words. They especially favor sounds which get a rise out of others.",
    designer: 256,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 0,
    first_frame: -1,
    foot_size: 38,
    foot_type: 1,
    growth: 1.03,
    ha: 28,
    hd: 25,
    id: "kangaroo1",
    isBaby: true,
    learnset: 6,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 59,
      emote_hop_height: 25,
      float_dist: 0,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 0,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 0.4444444444,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [],
      move_speed: 1,
      move_speed_start: 0,
      move_to_idle_transition_anim: "",
      move_to_idle_transition_frames: [18, 19],
      randomize_idle: true,
      squishiness: 0,
      stretchiness: 0,
    },
    ma: 72,
    md: 80,
    name: "Rookee",
    number: 7,
    partner_impact: {
      angle: 316.4878540039,
      anim: "spike",
      x: 216,
      y: -144,
    },
    prev_ids: ["rookee", "rookee1"],
    recruit: {
      conditions: [
        {
          event: null,
          freq: -1,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 36,
        },
        {
          event: null,
          freq: -1,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 36,
        },
      ],
      description: "Use 2+ [sprIcon,4]SUPPORT plays",
    },
    roamer_style: 1,
    scale: [0.9, 1],
    shiny: [
      {
        array: [
          {
            color: 10597577,
            x: 0,
          },
        ],
      },
      {
        array: [
          {
            color: 9410469,
            x: 0,
          },
          {
            color: 10528175,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 5131088,
            x: 0,
          },
        ],
      },
      {
        array: [
          {
            color: 8752353,
            x: 0,
          },
          {
            color: 11119073,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 12169135,
            x: 0,
          },
        ],
      },
    ],
    splash_pos: {
      angle: 323.9726257324,
      anim: "good",
      x: 57,
      y: -202,
    },
    spr: 199,
    tamecond: null,
    tamelvl: 2,
    tyield: ["md", 1],
  })
  .set("cheerleader", {
    ability: ["cheer"],
    ability_hidden: false,
    attklist: [
      "freeball",
      "cheer",
      "shakenhit",
      "thunder",
      "healhit",
      "breakswipe",
      "set",
      "dig",
      "heartpass",
      "jazzpass",
      "followme",
      "tailwind",
      "swordsdance",
      "healbell",
      "batonpass",
      "juggle",
      "powswitch",
      "vigor",
      "crowd",
      "rhythm",
      "protect",
      "noisytag",
      "dispel",
      "introduction",
      "starterbody",
    ],
    attklist_randomize: -1,
    ba: 65,
    ball_impact_pos: {
      x: 117,
      y: -346.8261787474,
    },
    ball_miss_pos: {
      x: 288,
      y: -4,
    },
    ball_ready_pos: {
      x: 130.5,
      y: -320.2251935257,
    },
    base_exp: 137.25,
    bd: 85,
    body_color_index: 0,
    colors: [
      {
        array: [
          {
            color: 9729791,
            x: 0,
          },
          {
            color: 10790137,
            x: 0.6058333333,
          },
          {
            color: 10201331,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 8831231,
            x: 0,
          },
          {
            color: 8847347,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 16767625,
            x: 0,
          },
          {
            color: 15527325,
            x: 0.5233333333,
          },
          {
            color: 14417792,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 16746741,
            x: 0,
          },
          {
            color: 16741318,
            x: 1,
          },
        ],
      },
    ],
    combos: [
      [15, 0, 1, 47, 0, 0.8],
      [10, 1, 1],
      [10, 0, 2],
      [8, 2, 0.5],
    ],
    desc:
      "Its fluff is made of incredibly thin strands of wax, bundled like wool. If a Cherrily makes you a pom, it considers you a treasured friend.",
    designer: 4,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 0,
    first_frame: 15,
    foot_size: 12,
    foot_type: 0,
    growth: 0.9,
    ha: 50,
    hd: 105,
    id: "cheerleader",
    isBaby: false,
    learnset: 7,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 69.25,
      emote_hop_height: 25,
      float_dist: 30,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 0,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 0.4444444444,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [],
      move_speed: 1,
      move_speed_start: 0,
      move_to_idle_transition_anim: "",
      move_to_idle_transition_frames: [],
      randomize_idle: true,
      squishiness: 0.1,
      stretchiness: 0.1,
    },
    ma: 40,
    md: 60,
    name: "Cherrily",
    number: 8,
    partner_impact: {
      angle: 337.6016540527,
      anim: "spike",
      x: 231.75,
      y: -248.0225193526,
    },
    prev_ids: ["support"],
    recruit: {
      conditions: [
        {
          effect_type: 58,
          event: null,
          freq: -1,
          my_data: null,
          rel_color: -1,
          target: 2,
          type: 32,
        },
      ],
      description: "Gain 4+ [sprBoost,2]BOOSTS on one Beastie",
    },
    roamer_style: 1,
    scale: [0.85, 1],
    shiny: [
      {
        array: [
          {
            color: 7326207,
            x: 0,
          },
          {
            color: 6468064,
            x: 0.5033333333,
          },
          {
            color: 1733285,
            x: 0.9983333333,
          },
        ],
      },
      {
        array: [
          {
            color: 12639999,
            x: 0,
          },
        ],
      },
      {
        array: [
          {
            color: 16767913,
            x: 0,
          },
          {
            color: 16771013,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 9796694,
            x: 0,
          },
          {
            color: 9799545,
            x: 1,
          },
        ],
      },
    ],
    splash_pos: {
      angle: 356.3109741211,
      anim: "spike",
      x: 61.5,
      y: -224.4616467277,
    },
    spr: 71,
    tamecond: null,
    tamelvl: 2,
    tyield: ["ha", 1, "hd", 1],
  })
  .set("rocklizard1", {
    ability: ["heavy", "multiscale"],
    ability_hidden: true,
    attklist: [
      "starterbody",
      "bounce",
      "rocksmash",
      "pushattack",
      "rocket",
      "body",
      "markattack",
      "dropshot",
      "dig",
      "allyrush",
      "allycover",
      "feint",
      "taunt",
      "curse",
      "substitute",
      "preblock",
      "bdefup",
      "distraction",
      "defheal",
      "rest",
      "protect",
    ],
    attklist_randomize: -1,
    ba: 52,
    ball_impact_pos: {
      x: 20,
      y: -209,
    },
    ball_miss_pos: {
      x: 107,
      y: -109,
    },
    ball_ready_pos: {
      x: 53,
      y: -247,
    },
    base_exp: 91.29,
    bd: 85,
    body_color_index: 0,
    colors: [
      {
        array: [
          {
            color: 6511957,
            x: 0,
          },
          {
            color: 8684921,
            x: 0.4833333333,
          },
          {
            color: 10198418,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 8819127,
            x: 0,
          },
          {
            color: 7698586,
            x: 0.4833333333,
          },
          {
            color: 7239811,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 16756867,
            x: 0,
          },
          {
            color: 15792190,
            x: 0.48,
          },
          {
            color: 13432852,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 10399161,
            x: 0,
          },
          {
            color: 9417665,
            x: 0.4858333333,
          },
          {
            color: 9020098,
            x: 1,
          },
        ],
      },
    ],
    combos: [
      [19, 0, 1],
      [5, 2, 2],
      [3, 2, 2, 8, 2, 0.2],
      [3, 2, 2, 8, 2, 0.2],
    ],
    desc:
      "They enjoy basking in the sun, but this leaves them vulnerable. They stick out their tongue to intimidate predators.",
    designer: 32,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 0,
    first_frame: -1,
    foot_size: 44,
    foot_type: 0,
    growth: 1.02,
    ha: 18,
    hd: 57,
    id: "rocklizard1",
    isBaby: true,
    learnset: 8,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 56.75,
      emote_hop_height: 25,
      float_dist: 0,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 0,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 0.4444444444,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [],
      move_speed: 1,
      move_speed_start: -0.6,
      move_to_idle_transition_anim: "",
      move_to_idle_transition_frames: [],
      randomize_idle: true,
      squishiness: 0.1,
      stretchiness: 0.1,
    },
    ma: 41,
    md: 23,
    name: "Skibble",
    number: 9,
    partner_impact: {
      angle: 329.6763916016,
      anim: "volley",
      x: 117,
      y: -130,
    },
    prev_ids: [],
    recruit: {
      conditions: [
        {
          effect_type: 58,
          event: null,
          freq: -1,
          my_data: null,
          rel_color: -1,
          target: 2,
          type: 32,
        },
      ],
      description: "Boost [sprIcon,0]DEF +2 or more on a player",
    },
    roamer_style: 1,
    scale: [0.85, 1],
    shiny: [
      {
        array: [
          {
            color: 14413263,
            x: 0,
          },
          {
            color: 15199714,
            x: 0.9958333333,
          },
        ],
      },
      {
        array: [
          {
            color: 9145728,
            x: 0,
          },
        ],
      },
      {
        array: [
          {
            color: 15110801,
            x: 0,
          },
          {
            color: 15066785,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 14082815,
            x: 0.0233333333,
          },
        ],
      },
    ],
    splash_pos: {
      angle: -10,
      anim: "ready",
      x: 35,
      y: -28,
    },
    spr: 7,
    tamecond: null,
    tamelvl: 1,
    tyield: ["bd", 1],
  })
  .set("bestie", {
    ability: ["friendguard"],
    ability_hidden: false,
    attklist: [
      "jazzpass",
      "lifedew",
      "pepshot",
      "heart",
      "commit",
      "float",
      "dig",
      "desperate",
      "nightshade",
      "refresh",
      "allyrush",
      "healbell",
      "callout",
      "followme",
      "defheal",
      "libero",
      "lifepass",
      "juggle",
      "facade",
      "charm",
      "protect",
      "set",
      "introduction",
      "construct",
    ],
    attklist_randomize: -1,
    ba: 25,
    ball_impact_pos: {
      x: 303,
      y: -246.5024630542,
    },
    ball_miss_pos: {
      x: 360,
      y: -97,
    },
    ball_ready_pos: {
      x: 349,
      y: -390,
    },
    base_exp: 216.91,
    bd: 90,
    body_color_index: 0,
    colors: [
      {
        array: [
          {
            color: 10076657,
            x: 0,
          },
          {
            color: 10274044,
            x: 0.4908333333,
          },
          {
            color: 8498159,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 3884659,
            x: 0,
          },
          {
            color: 5527965,
            x: 0.5133333333,
          },
          {
            color: 5197737,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 9211135,
            x: 0,
          },
          {
            color: 6776829,
            x: 1,
          },
        ],
      },
    ],
    combos: [
      [8, 2, 0.2],
      [49, 1, 1, 8, 1, 0.25],
      [53, 2, 0],
      [53, 2, 0],
    ],
    desc:
      "They lack any aggression at all. Using their tail as a lure, they invite other Beasties into their burrow to offer them food.",
    designer: 2,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 0,
    first_frame: -1,
    foot_size: 57,
    foot_type: 0,
    growth: 1.09,
    ha: 60,
    hd: 100,
    id: "bestie",
    isBaby: false,
    learnset: 9,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 74.5,
      emote_hop_height: 25,
      float_dist: 0,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 0,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 0.4444444444,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [],
      move_speed: 1,
      move_speed_start: -0.7,
      move_to_idle_transition_anim: "",
      move_to_idle_transition_frames: [],
      randomize_idle: true,
      squishiness: 0.1,
      stretchiness: 0.1,
    },
    ma: 50,
    md: 75,
    name: "Diggum",
    number: 10,
    partner_impact: {
      angle: 358.6322937012,
      anim: "spike",
      x: 413,
      y: -333,
    },
    prev_ids: ["caretaker", "bestie"],
    recruit: {
      conditions: [
        {
          effect_pow: ">0",
          effect_type: 8,
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 32,
        },
        {
          effect_pow: ">0",
          effect_type: 8,
          event: null,
          freq: -1,
          func: null,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 32,
        },
      ],
      description: "Heal 2+ times",
    },
    roamer_style: 1,
    scale: [0.85, 1],
    shiny: [
      {
        array: [
          {
            color: 4612284,
            x: 0,
          },
        ],
      },
      {
        array: [
          {
            color: 3816071,
            x: 0,
          },
          {
            color: 1845825,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 9222911,
            x: 0,
          },
          {
            color: 8820147,
            x: 1,
          },
        ],
      },
    ],
    splash_pos: {
      angle: 346.5042724609,
      anim: "ready",
      x: 91,
      y: -142,
    },
    spr: 235,
    tamecond: null,
    tamelvl: 3,
    tyield: ["hd", 2],
  })
  .set("serval", {
    ability: ["spiker"],
    ability_hidden: false,
    attklist: [
      "bounce",
      "jump",
      "rush",
      "feint",
      "hyperbeam",
      "tagattack",
      "cut",
      "pepshot",
      "overheat",
      "desperate",
      "damagedattack",
      "cover",
      "switch",
      "distraction",
      "mark",
      "backswitch",
      "batonpass",
      "substitute",
      "bellydrum",
      "storedpower",
      "rushattack",
      "reversal",
      "protect",
      "noisytag",
      "vigor",
    ],
    attklist_randomize: -1,
    ba: 100,
    ball_impact_pos: {
      x: 174,
      y: -630,
    },
    ball_miss_pos: {
      x: 372,
      y: -64.5,
    },
    ball_ready_pos: {
      x: 174,
      y: -630,
    },
    base_exp: 147.8,
    bd: 64,
    body_color_index: 0,
    colors: [
      {
        array: [
          {
            color: 1071084,
            x: 0,
          },
          {
            color: 884223,
            x: 0.3633333333,
          },
          {
            color: 4236012,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 7626752,
            x: 0,
          },
          {
            color: 5914880,
            x: 0.5958333333,
          },
          {
            color: 8869936,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 14155520,
            x: 0,
          },
          {
            color: 14058260,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 7609855,
            x: 0,
          },
          {
            color: 4737279,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 12049151,
            x: 0,
          },
        ],
      },
    ],
    combos: [
      [48, 0, 2, 47, 0, 1.3],
      [7, 2, 1],
      [7, 2, 1, 15, 2, 1],
      [7, 2, 3],
    ],
    desc:
      "Their leap is second to none. When hunting, they'll often allow prey to escape so that they can continue the chase and practice their pounce more.",
    designer: 8,
    evo_pose: [
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
      {
        anim: "good",
        scale: 2,
        x: 0,
        y: 0,
      },
    ],
    evolution: null,
    face_color_index: 0,
    first_frame: -1,
    foot_size: 55,
    foot_type: 0,
    growth: 0.8,
    ha: 88,
    hd: 99,
    id: "serval",
    isBaby: false,
    learnset: 10,
    learnset_randomize: -1,
    loco: {
      anim_min_speed: 0.2,
      char_width: 107,
      emote_hop_height: 25,
      float_dist: 0,
      float_wave: 0,
      float_wave_freq: 1000,
      hop_height: 25,
      hop_length: 1.5,
      hop_min_speed: 0.04,
      hop_shake: 0,
      hop_wobble: 0,
      move_accel: 0.4444444444,
      move_decel: 0.6666666667,
      move_min_dist: 0,
      move_pause_frames: [],
      move_speed: 1,
      move_speed_start: 0,
      move_to_idle_transition_anim: "",
      move_to_idle_transition_frames: [],
      randomize_idle: true,
      squishiness: 0.1,
      stretchiness: 0.1,
    },
    ma: 45,
    md: 30,
    name: "Servace",
    number: 11,
    partner_impact: {
      angle: 324.9587097168,
      anim: "good",
      x: 400.5,
      y: -480,
    },
    prev_ids: ["decoy", "hinata"],
    recruit: {
      conditions: [
        {
          event: null,
          freq: -1,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 7,
        },
        {
          event: null,
          freq: -1,
          my_data: null,
          player: 2,
          rel_color: -1,
          type: 7,
        },
      ],
      description: "Launch 2+ attacks from the net",
    },
    roamer_style: 1,
    scale: [0.85, 1],
    shiny: [
      {
        array: [
          {
            color: 6974207,
            x: 0,
          },
          {
            color: 8026879,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 3620172,
            x: 0.1133333333,
          },
          {
            color: 5391481,
            x: 0.6758333333,
          },
          {
            color: 5750527,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 4576767,
            x: 0.2533333333,
          },
          {
            color: 44799,
            x: 0.8108333333,
          },
        ],
      },
      {
        array: [
          {
            color: 6842579,
            x: 0,
          },
          {
            color: 5599429,
            x: 1,
          },
        ],
      },
      {
        array: [
          {
            color: 13492991,
            x: 0,
          },
        ],
      },
    ],
    splash_pos: {
      angle: 338.2994689941,
      anim: "ready",
      x: -25.5,
      y: -202.5,
    },
    spr: 62,
    tamecond: null,
    tamelvl: 4,
    tyield: ["ba", 2],
  });

export default BEASTIE_DATA;
