import BaseAnimation from './base';

const MAX_ITERATIONS = 10;

interface State {
  currentFrameIndex: number;
  pastTimeStamp: number;
  prevFrame: string;
  curLoop: number;
}

const Squiggle: BaseAnimation = {
  name: 'Squiggle',
  creator: 'LunarFang_416',
  baseState: {
    currentFrameIndex: 0,
    pastTimeStamp: 0,
    prevFrame: '',
    curLoop: 0,
  },
  nextState: (timestamp: number, state: State): { nextFrame: string; state: State } => {
    const frames = [
      '.\u0332',
      '\ufead',
      '\ufb24',
      '\u154a',
      '5',
      '5.\u035e',
      '5.\u035e.\u0305\u1423',
      '5.\u035e\u1548',
      '5.\u035e\u01a7',
      '5.\u035e\u01a7_',
    ];
    const frame = frames[state.currentFrameIndex];
    const nextFrame = state.prevFrame + frame;
    if (timestamp - state.pastTimeStamp > 100) {
      if (state.currentFrameIndex >= frames.length - 1) {
        state.curLoop += 1;
        if (state.curLoop > MAX_ITERATIONS) {
          state.prevFrame = '';
          state.curLoop = 0;
        } else state.prevFrame += frame;
        state.currentFrameIndex = 0;
      } else state.currentFrameIndex += 1;

      state.pastTimeStamp = timestamp;
    }
    return { nextFrame, state };
  },
};

export default Squiggle;
