import { useState, useEffect } from "react";
import { Custom as CustomAnimation } from "url-animations";

import "./Custom.css"

const CustomCard = ( {URL}: {URL: any} ) => {
  const CustomAnimationObj = new CustomAnimation();
  const [frames, setFrames] = useState(
    "(>'-')>\n^('-')^\n<('-'<)\n^('-')^"
  );
  const [frameRate, setFrameRate] = useState(500);
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
        {enabled && <div className="dot"></div>}
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


export default CustomCard;