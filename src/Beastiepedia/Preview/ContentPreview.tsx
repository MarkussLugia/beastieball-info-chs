import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import setupWebGL, {
  WebGLError,
  setColorUniforms,
  setImage,
} from "../../shared/beastieRender/WebGL";
import styles from "../Content.module.css";
import type { BeastieType } from "../../data/BeastieType";
import ColorTabs from "./ColorTabs";
import SPRITE_INFO, { BBox } from "../../data/SpriteInfo";
import useLoadBeastieImages from "../../utils/useLoadBeastieImages";
import BEASTIE_ANIMATIONS, {
  BeastieAnimation,
} from "../../data/BeastieAnimations";
import { hexToRgb } from "../../utils/color";
import saveGif from "./saveGif";
import DevUtil from "./DevUtil";
import AnimationOptions from "./AnimationOptions";
import PreviewSettings from "./PreviewSettings";
import useScreenOrientation from "../../utils/useScreenOrientation";

type Props = {
  beastiedata: BeastieType;
};

export default function ContentPreview(props: Props): React.ReactNode {
  const [colors, setColors] = useState<number[][]>([
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const cropCanvasRef = useRef<HTMLCanvasElement>(null);

  const [animation, setAnimation] = useState("idle");
  const animdata = BEASTIE_ANIMATIONS.get(
    `_${SPRITE_INFO[props.beastiedata.spr].name}`,
  )?.anim_data;

  let anim: BeastieAnimation | undefined = undefined;
  const tempanim = animdata ? animdata[animation] : undefined;
  if (
    tempanim != undefined &&
    typeof tempanim != "number" &&
    typeof tempanim != "string"
  ) {
    anim = tempanim;
  }

  const loadedImages = useLoadBeastieImages(
    `/gameassets/beasties/${SPRITE_INFO[props.beastiedata.spr].name}`,
    SPRITE_INFO[props.beastiedata.spr].frames,
  );
  const requestRef = useRef(0);
  const frameIndexRef = useRef<number | null>(null); // if multiple beastieframe for animation
  const frameNumRef = useRef<number | null>(null);
  const frameTimeRef = useRef(0);
  const prevTimeRef = useRef<DOMHighResTimeStamp | null>(null);
  const holdRef = useRef<number | null>(null);

  const animPausedRef = useRef<boolean>(false);

  const frameInputRef = useRef<HTMLInputElement>(null);
  const pausedButtonRef = useRef<HTMLButtonElement>(null);

  const [noDisplayRender, setNoDisplayRender] = useState(false);
  const [noDisplayReason, setNoDisplayReason] = useState(
    "Beastie Preview Failed",
  );

  const setFrame = useCallback(
    (frame: number) => {
      frameNumRef.current = frame;
      if (glRef.current && loadedImages[frame]) {
        setImage(glRef.current, loadedImages[frame]);
        setNoDisplayRender(false);
      }
    },
    [loadedImages],
  );

  const changeFrame = useCallback(
    (diff: number) => {
      animPausedRef.current = true;
      setFrame(
        frameNumRef.current != null
          ? Math.min(
              SPRITE_INFO[props.beastiedata.spr].frames,
              Math.max(0, frameNumRef.current + diff),
            )
          : 0,
      );
    },
    [setFrame, props.beastiedata],
  );

  const [userSpeed, setUserSpeed] = useState(0.5); // default 0.5 seems to match in game more...

  const beastiesprite = SPRITE_INFO[props.beastiedata.spr];

  const getCrop = useCallback(
    (bbox: BBox) => {
      const beastiescale =
        bbox.width > bbox.height
          ? beastiesprite.width / bbox.width
          : beastiesprite.height / bbox.height;
      return `scale(${beastiescale}) translate(${((-bbox.x - bbox.width / 2 + beastiesprite.width / 2) / beastiesprite.width) * 100}%, ${((-bbox.y - bbox.height / 2 + beastiesprite.height / 2) / beastiesprite.height) * 100}%)`;
    },
    [beastiesprite],
  );

  const getAnimBbox = useCallback(() => {
    if (!anim || animPausedRef.current) {
      return getCrop(beastiesprite.bbox);
    }
    let bbox: { x: number; y: number; endx: number; endy: number } | undefined =
      undefined;
    const frames = Array.isArray(anim.frames) ? anim.frames : [anim.frames];
    for (const state of frames) {
      const startFrame = state.startFrame || 0;
      const endFrame = state.endFrame || 0;
      for (let i = startFrame; i <= endFrame; i++) {
        const framebbox = beastiesprite.bboxes[i % beastiesprite.frames];
        if (bbox == undefined) {
          bbox = {
            x: framebbox.x,
            y: framebbox.y,
            endx: framebbox.x + framebbox.width,
            endy: framebbox.y + framebbox.height,
          };
        } else {
          bbox.x = Math.min(bbox.x, framebbox.x);
          bbox.y = Math.min(bbox.y, framebbox.y);
          bbox.endx = Math.max(bbox.endx, framebbox.x + framebbox.width);
          bbox.endy = Math.max(bbox.endy, framebbox.y + framebbox.height);
        }
      }
    }
    if (!bbox) {
      return getCrop(beastiesprite.bbox);
    }
    return getCrop({
      x: bbox.x,
      y: bbox.y,
      width: bbox.endx - bbox.x,
      height: bbox.endy - bbox.y,
    });
  }, [beastiesprite, getCrop, anim]);

  const [fitBeastie, setFitBeastie] = useState(true);

  const step = useCallback(
    (time: DOMHighResTimeStamp) => {
      if (fitBeastie && canvasRef.current)
        canvasRef.current.style.transform = getAnimBbox();
      if (anim === undefined) {
        console.log(`Incorrect Anim: ${animation}`);
        setAnimation("idle");
        return;
      }
      const beastie_anim_speed =
        animdata?.__anim_speed != undefined ? animdata.__anim_speed : 1;
      const anim_speed = anim.speed ? anim.speed : 1;
      let frames;
      if (!Array.isArray(anim.frames)) {
        frameIndexRef.current = null;
        frames = anim.frames;
      }
      if (Array.isArray(anim.frames)) {
        if (
          frameIndexRef.current === null ||
          frameIndexRef.current > anim.frames.length
        ) {
          frameIndexRef.current = 0;
        }
        frames = anim.frames[frameIndexRef.current];
      }
      if (frames == undefined) {
        console.log(`No Frames? ${props.beastiedata.name} ${animation}`);
        return;
      }
      let startFrame = 0;
      let endFrame = 0;
      if (frames.startFrame != undefined) {
        startFrame = frames.startFrame;
        endFrame = frames.startFrame;
      }
      if (frames.endFrame != undefined) {
        endFrame = frames.endFrame;
      }
      if (
        frameNumRef.current === null ||
        (frameNumRef.current < startFrame && !animPausedRef.current)
      ) {
        if (glRef.current) {
          if (loadedImages[startFrame % beastiesprite.frames]) {
            setImage(
              glRef.current,
              loadedImages[startFrame % beastiesprite.frames],
            );
            frameNumRef.current = startFrame;
            setNoDisplayRender(false);
          } else if (loadedImages[0]) {
            setImage(glRef.current, loadedImages[0]);
            frameNumRef.current = 0;
            setNoDisplayRender(false);
          } else {
            setNoDisplayRender(true);
            setNoDisplayReason("Loading...");
          }
        }
      }
      if (prevTimeRef.current && frameNumRef.current !== null) {
        const delta = time - prevTimeRef.current;
        if (!animPausedRef.current) {
          frameTimeRef.current += delta;
        }
        if (holdRef.current == null) {
          holdRef.current = 1;
          if (frames.holds && frames.holds[frameNumRef.current]) {
            const holds = frames.holds[frameNumRef.current];
            if (Array.isArray(holds)) {
              holdRef.current = holds[Math.floor(Math.random() * holds.length)];
            } else if (typeof holds == "number") {
              holdRef.current = holds;
            }
          }
        }
        const frameLength =
          ((1000 / (24 * beastie_anim_speed) / anim_speed) * holdRef.current) /
          userSpeed;
        if (frameTimeRef.current > frameLength) {
          frameTimeRef.current = frameTimeRef.current % frameLength;
          holdRef.current = null;
          frameNumRef.current += 1;
          if (frameNumRef.current > endFrame) {
            if (frames.transitions && Array.isArray(anim.frames)) {
              frameIndexRef.current =
                frames.transitions[
                  Math.floor(Math.random() * frames.transitions.length)
                ];
              const newstart = anim.frames[frameIndexRef.current].startFrame;
              if (newstart != null) {
                frameNumRef.current = newstart;
              } else {
                frameNumRef.current = 0;
              }
            } else {
              frameNumRef.current = startFrame;
            }
          }
          const frameN = frameNumRef.current % beastiesprite.frames;
          if (glRef.current && loadedImages[frameN]) {
            setImage(glRef.current, loadedImages[frameN]);
            setNoDisplayRender(false);
          }
        }
      }
      if (frameInputRef.current)
        frameInputRef.current.value = String(frameNumRef.current);
      if (pausedButtonRef.current)
        pausedButtonRef.current.innerText = animPausedRef.current
          ? "PLAY"
          : "PAUSE";
      prevTimeRef.current = time;
      requestRef.current = requestAnimationFrame(step);
    },
    [
      loadedImages,
      props.beastiedata,
      animation,
      anim,
      animdata,
      userSpeed,
      getAnimBbox,
      fitBeastie,
      beastiesprite,
    ],
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestRef.current);
  }, [step, animation]);

  useEffect(() => {
    frameIndexRef.current = null;
    frameNumRef.current = null;
    frameTimeRef.current = 0;
  }, [loadedImages]);

  useEffect(() => {
    if (
      canvasRef.current &&
      ((glRef.current &&
        glRef.current.getError() == glRef.current.CONTEXT_LOST_WEBGL) ||
        !glRef.current ||
        !programRef.current)
    ) {
      let newGl;
      try {
        newGl = setupWebGL(canvasRef.current, glRef.current);
      } catch (error) {
        if (error instanceof WebGLError) {
          console.log(`WebGL Error: ${error.message}`);
          setNoDisplayRender(true);
          setNoDisplayReason("Beastie Preview Failed");
          return;
        } else {
          throw error;
        }
      }
      glRef.current = newGl.gl;
      programRef.current = newGl.program;
    }
  }, []);

  useEffect(() => {
    if (glRef.current && programRef.current) {
      setColorUniforms(glRef.current, programRef.current, colors);
    }
  }, [colors]);

  const colorChange = useCallback(
    (change_index: number, color: number[]) => {
      setColors((old) => {
        return old.map((value, index) => {
          if (index == change_index) {
            return color;
          }
          return value;
        });
      });
    },
    [setColors],
  );

  const downloadImage = useCallback(() => {
    if (!canvasRef.current || !cropCanvasRef.current) {
      return;
    }
    let canvas = canvasRef.current;
    if (fitBeastie && frameNumRef.current) {
      cropCanvasRef.current.width =
        beastiesprite.bboxes[frameNumRef.current].width;
      cropCanvasRef.current.height =
        beastiesprite.bboxes[frameNumRef.current].height;
      cropCanvasRef.current
        .getContext("2d")
        ?.drawImage(
          canvasRef.current,
          -beastiesprite.bboxes[frameNumRef.current].x,
          -beastiesprite.bboxes[frameNumRef.current].y,
        );
      canvas = cropCanvasRef.current;
    }
    const a = document.createElement("a");
    a.download = `${props.beastiedata.name}.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
  }, [fitBeastie, beastiesprite, props.beastiedata.name]);

  const downloadGif = useCallback(() => {
    if (!glRef.current || !loadedImages || !animdata || !anim) {
      return;
    }
    saveGif(
      glRef.current,
      fitBeastie,
      `${props.beastiedata.name}_${animation}`,
      loadedImages,
      structuredClone(anim),
      userSpeed,
      animdata.__anim_speed ? animdata.__anim_speed : 1,
      SPRITE_INFO[props.beastiedata.spr],
      frameNumRef.current != undefined ? frameNumRef.current : 0,
    );
  }, [
    animation,
    fitBeastie,
    loadedImages,
    props.beastiedata,
    anim,
    userSpeed,
    animdata,
  ]);

  const [background, setBackground] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const animationList = [
    "idle",
    "move",
    "ready",
    "spike",
    "volley",
    "good",
    "bad",
    "fall",
    "stop",
  ];

  // Remove animations not in beastie
  if (animdata) {
    animationList.forEach((value, index) => {
      if (!(value in animdata)) {
        animationList.splice(index, 1);
      }
    });
  }

  const gifDisabled = useMemo(() => {
    if (animdata && animdata[animation]) {
      const anim = animdata[animation];
      if (
        anim != undefined &&
        typeof anim != "number" &&
        typeof anim != "string"
      ) {
        if (anim.frames && !Array.isArray(anim.frames)) {
          if (anim.frames.startFrame === anim.frames.endFrame) {
            return true; // do not allow gifs of 1 frame animations
          }
        }
      }
    }
    for (let i = 0; i < beastiesprite.frames; i++) {
      if (loadedImages[i] === undefined) {
        return true;
      }
    }
    return false;
  }, [loadedImages, beastiesprite, animation, animdata]);

  const portrait = useScreenOrientation();
  const [previewOptionsVisible, setPreviewOptionsVisible] = useState(!portrait);

  return (
    <div className={styles.preview}>
      <canvas ref={cropCanvasRef} style={{ display: "none" }} />
      <div
        className={styles.canvascon}
        style={{
          backgroundImage: background ? "none" : "",
          backgroundColor: background ? backgroundColor : "transparent",
          width: `70%`,
        }}
      >
        <canvas
          className={styles.previewcanvas}
          style={{
            display: noDisplayRender ? "none" : "block",
            transform: fitBeastie ? getCrop(beastiesprite.bbox) : "",
          }}
          width={1000}
          height={1000}
          ref={canvasRef}
        />
        <div
          className={styles.canvasfailed}
          style={{
            display: noDisplayRender ? "flex" : "none",
            backgroundColor: background ? backgroundColor : "transparent",
            color: background
              ? hexToRgb(backgroundColor).reduce<string>(
                  (accum, value) =>
                    accum + (255 - 255 * value).toString(16).padStart(2, "0"),
                  "#",
                )
              : "black",
          }}
        >
          <div>{noDisplayReason}</div>
        </div>
      </div>

      <br />

      <button
        className={styles.previewOptionsButton}
        onClick={() => setPreviewOptionsVisible((visible) => !visible)}
      >
        <span className={previewOptionsVisible ? "" : styles.upArrow}>V</span>{" "}
        Preview Options
      </button>

      <div
        className={
          previewOptionsVisible
            ? styles.previewOptions
            : styles.previewOptionsNotVisible
        }
      >
        <AnimationOptions
          animPausedRef={animPausedRef}
          pausedButtonRef={pausedButtonRef}
          frameInputRef={frameInputRef}
          animation={animation}
          setAnimation={setAnimation}
          animationList={animationList}
          frameCount={beastiesprite.frames}
          setFrame={setFrame}
          changeFrame={changeFrame}
          userSpeed={userSpeed}
          setUserSpeed={setUserSpeed}
        />

        <ColorTabs beastiedata={props.beastiedata} colorChange={colorChange} />

        <PreviewSettings
          downloadImage={downloadImage}
          downloadGif={downloadGif}
          gifDisabled={gifDisabled}
          userSpeed={userSpeed}
          canvasRef={canvasRef}
          setBackground={setBackground}
          setBackgroundColor={setBackgroundColor}
          fitBeastie={fitBeastie}
          setFitBeastie={setFitBeastie}
        />
      </div>

      {import.meta.env.DEV ? (
        <DevUtil
          glRef={glRef}
          canvasRef={canvasRef}
          cropCanvasRef={cropCanvasRef}
          programRef={programRef}
        />
      ) : null}
    </div>
  );
}
