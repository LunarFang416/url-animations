import BaseAnimation from "./base";

interface State {
  pastTimeStamp: number;
  index: number;
  maxLoading: number
}

const OG_Loader: BaseAnimation = {
  name: "OG_Loader",
  creator: "LunarFang_416",
  baseState: {
    pastTimeStamp: 0,
    index: 0,
    maxLoading: 6,
  },
  nextState: (
    timestamp: number,
    state: State
  ): { nextFrame: string; state: State } => {
    let base = "Loading";
    if (timestamp - state.pastTimeStamp > 500) {
      state.index = (state.index + 1) % state.maxLoading;
      state.pastTimeStamp = timestamp;
    }
    let nextFrame = base + ".".repeat(state.index);
    return { nextFrame, state };
  },
};

export default OG_Loader;
