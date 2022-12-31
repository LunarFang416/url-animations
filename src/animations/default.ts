import BaseAnimation from './base';

interface State {
  pastTimeStamp: number;
  index: number;
}

const Default: BaseAnimation = {
  name: 'Default',
  creator: 'LunarFang_416',
  baseState: {
    pastTimeStamp: 0,
    index: 0,
  },
  nextState: (timestamp: number, state: State): { nextFrame: string; state: State } => {
    const frames = ['CLICK#', 'ON#', 'AN#', 'ANIMATION#'];
    const nextFrame = frames[state.index];
    if (timestamp - state.pastTimeStamp > 1000) {
      state.index = (state.index + 1) % frames.length;
      state.pastTimeStamp = timestamp;
    }
    return { nextFrame, state };
  },
};

export default Default;
