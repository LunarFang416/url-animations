import { useState, useEffect } from "react";
import CustomAnimation from "../../animations/custom";
import Animation from "../Animation/Animation";
import URLAnimation from "../../hook";

import "./Custom.css"


const Custom = ( {URL}: {URL: any} ) => {
  const CustomAnimationObj = new CustomAnimation();
  const [frames, setFrames] = useState(
    "(>'-')>\n^('-')^\n<('-'<)\n^('-')^"
  );
  const [frameRate, setFrameRate] = useState(0);
  const [enabled, setEnabled] = useState(false)
  CustomAnimationObj.baseState.frameRate = frameRate;
  CustomAnimationObj.baseState.frames = frames.trim().split("\n");
  
  useEffect(() => {
    URL.start(CustomAnimationObj);
  }, [frameRate, frames]);

  return (
    <div>
      <button
        className="custom-animation-button"
        onClick={() => {
          URL.start(CustomAnimationObj);
          setEnabled(!enabled);
        }}
      >
        <h4>{CustomAnimationObj.name.toLowerCase()}</h4>
        <h5>by: {CustomAnimationObj.creator.toLowerCase()}</h5>
      </button>
      <div
        style={{
          opacity: !enabled ? "0" : "1",
          transition: "all .2s",
          visibility: !enabled ? "hidden" : "visible",
          height: enabled ? "auto" : "0",
        }}
      >
        <div className="custom-config">
          <textarea
            className="custom-frames"
            value={frames}
            onChange={(e) => setFrames(e.target.value)}
          />
          <input
            className="custom-slider"
            id="typeinp"
            type="range"
            min="0"
            max="1000"
            value={frameRate}
            onChange={(e: any) => setFrameRate(e.target.value)}
            step="1"
          />
        </div>
      </div>
    </div>
  );
}


export default Custom;