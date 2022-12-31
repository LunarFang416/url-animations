import BaseAnimation from './base';

interface State {
  position: number;
  waterLength: number;
  right: boolean;
  past: number;
}

const Shark: BaseAnimation = {
  name: 'Shark',
  creator: 'LunarFang_416',
  baseState: {
    position: 0,
    waterLength: 30,
    right: true,
    past: 0,
  },
  nextState: (timestamp: number, state: State): { nextFrame: string; state: State } => {
    let nextFrame = '';
    const shark = state.right ? '|\\' : '/|';
    for (let i = 0; i < state.waterLength; ++i) {
      if (i === state.position) nextFrame += shark;
      else if (i === state.waterLength - 1) nextFrame += '#';
      else nextFrame += '_';
    }
    state.position += state.right ? 1 : -1;
    if (state.position > state.waterLength - 3) state.right = false;
    else if (state.position <= 0) state.right = true;
    return { nextFrame, state };
  },
};

export default Shark;
