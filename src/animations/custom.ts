import BaseAnimation from "./base";

interface State {
  frameRate: number;
  index: number;
  frames: string[];
  pastTimeStamp: number;
}
class Custom implements BaseAnimation {
  name: string = "Custom";
  creator: string = "LunarFang_416";
  baseState: State = {
    frameRate: 0,
    index: 0,
    frames: [],
    pastTimeStamp: 0,
  };
  constructor(
    frames: string[] = ["(>'-')>", "^('-')^", "<('-'<)", "^('-')^"],
    frameRate: number = 500
  ) {
    this.baseState.frames = frames;
    this.baseState.frameRate = frameRate;
  }
  nextState(
    timestamp: number,
    state: State
  ): { nextFrame: string; state: State } {
    if (timestamp - state.pastTimeStamp > (1000 - state.frameRate)) {
      state.index = (state.index + 1) % state.frames.length;
      state.pastTimeStamp = timestamp;
    }
    let nextFrame = state.frames[state.index];
    return { nextFrame, state };
  }
}

// const Custom: BaseAnimation = {
//   name: "Custom",
//   creator: "LunarFang_416",
//   baseState: {
//     frameRate: 500,
//     index: 0,
//     frames: ["(>'-')>", "^('-')^", "<('-'<)", "^('-')^"],
//     pastTimeStamp: 0,
//   },
//   nextState: (
//     timestamp: number,
//     state: State
//   ): { nextFrame: string; state: State } => {
    // if (timestamp - state.pastTimeStamp > state.frameRate) {
    //   state.index = (state.index + 1) % state.frames.length;
    //   state.pastTimeStamp = timestamp;
    // }
    // let nextFrame = state.frames[state.index];
    // return { nextFrame, state };
//   },
// };

export default Custom;
