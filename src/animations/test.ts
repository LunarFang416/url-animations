import BaseAnimation from "./base";

interface State {
  index: number
}

const Test: BaseAnimation = {
  name: "Test",
  creator: "LunarFang_416",
  baseState: {
    index: 0
  },
  nextState: (
    timestamp: number,
    state: State
  ): { nextFrame: string; state: State } => {
    let nextFrame = "←↖↑↗→↘↓↙";
    return { nextFrame , state };
  },
};

export default Test;
