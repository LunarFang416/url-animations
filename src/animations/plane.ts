import BaseAnimation from "./base";

interface State {
  position: number;
  skyLength: number;
  right: boolean;
  propeller: string;
}

const Plane: BaseAnimation = {
  name: "Plane",
  creator: "LunarFang_416",
  baseState: {
    position: 0,
    skyLength: 150,
    right: true,
    propeller: "|",
  },
  nextState: (
    timestamp: number,
    state: State
  ): { nextFrame: string; state: State } => {
    let nextFrame = "";
    let propFrames: { [key: string]: string } = {
      "|": "/",
      "/": "-",
      "-": "\\",
      "\\": "|",
    };
    let propeller = state.propeller;
    let body = state.right ? "'--//->" : "<-\\\\--'";
    let plane = state.right ? body + propeller : propeller + body;
    for (let i = 0; i < state.skyLength; ++i) {
      if (i === state.position) {
        nextFrame += plane;
        i = i + plane.length;
      } else nextFrame += ".";
    }
    state.position += state.right ? 1 : -1;
    if (state.position >= state.skyLength - 1) state.right = false;
    else if (state.position <= 0) state.right = true;
    
    state.propeller = propFrames[state.propeller];
    return { nextFrame, state };
  },
};

export default Plane;
