import BaseAnimation from "./base";

interface State {
  position: number;
  waterLength: number;
  right: boolean;
  past: number;
}

const Swim: BaseAnimation = {
  name: "Swim",
  creator: "LunarFang_416",
  baseState: {
    position: 0,
    waterLength: 30,
    right: true,
    past: 0,
  },
  nextState: (
    timestamp: number,
    state: State
  ): { nextFrame: string; state: State } => {
    let nextFrame = "";
    let shark = state.right ? "|\\" : "/|";

    let arm = ["/", "-", "\\"][state.position % 3];
    let swimmer = state.right ? ">-" + arm + "o" : "o" + arm + "-<";

    let pair = state.right
      ? shark + "~~~~" + swimmer
      : swimmer + "~~~~" + shark;

    for (let i = 0; i < state.waterLength; ++i) {
      if (i === state.position) nextFrame += pair;
      else nextFrame += "~";
    }
    state.position += state.right ? 1 : -1;
    if (state.position > state.waterLength - 2) state.right = false;
    else if (state.position <= 0) state.right = true;
    
    nextFrame += "#";
    return { nextFrame, state}
  },
};

export default Swim;
