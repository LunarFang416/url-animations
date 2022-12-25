import BaseAnimation from "./base";

interface State {
  index: number;
  right: boolean;
  prevMouseX: number;
}

const Wave: BaseAnimation = {
  name: "Wave",
  creator: "LunarFang_416",
  baseState: {
    index: 0,
    right: true,
    prevMouseX: 0,
  },
  nextState: (
    timestamp: number,
    state: State
  ): { nextFrame: string; state: State } => {
    let wave = [
      "\u00B8",
      ".",
      "\u00B7",
      "\u00B4",
      "\u00AF",
      "'",
      "\u00B7",
      ".",
      "\u00B8",
    ];
    let nextFrame = "";
    for (let i = 0; i < 800; ++i) {
      nextFrame += wave[(i + state.index) % wave.length];
    }

    let currentMouseX = window.pageXOffset;
    if (currentMouseX > state.prevMouseX) state.right = true;
    else if (currentMouseX < state.prevMouseX) state.right = false;
    else state.right = state.right;
    
    if (state.right) {
      nextFrame = nextFrame.split("").reverse().join("");
      state.right = true;
    } else {
      state.right = false;
    }
    state.index = state.index === wave.length - 1 ? 0 : state.index + 1;
    state.prevMouseX = currentMouseX;
    return { nextFrame, state };
  },
};

export default Wave;
