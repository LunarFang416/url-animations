import BaseAnimation from "./base";

interface State {
  index: number;
  right: boolean;
  prevMouseX: number;
}

const Wave2_0: BaseAnimation = {
  name: "Wave2_0",
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
      "\u4DEB",
      "\u4DCC",
      "\u4DC9",
      "\u4DC8",
      "\u4DCD",
      "\u4DC8",
      "\u4DC9",
      "\u4DCC",
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
    } else state.right = false;

    state.index = state.index === wave.length - 1 ? 0 : state.index + 1;
    state.prevMouseX = currentMouseX;
    return { nextFrame, state };
  },
};

export default Wave2_0;
