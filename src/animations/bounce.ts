import BaseAnimation from './base';

interface State {
  position: number;
  right: boolean;
}

const Bounce: BaseAnimation = {
  name: 'Bounce',
  creator: 'LunarFang_416',
  baseState: {
    position: 0,
    right: true,
  },
  nextState: (timestamp: number, state: State): { nextFrame: string; state: State } => {
    const wave = ['\u00B8', '.', '\u00B7', '\u00B4', "'", '\u00B7', '.'];
    const length = 29;

    let nextFrame = '';
    for (let i = 0; i < length; ++i) {
      if (i === length - 1) nextFrame += '#';
      else if (i === state.position) nextFrame += wave[i % wave.length];
      else nextFrame += '...';
    }

    if (state.position >= length - 1) state.right = false;
    else if (state.position <= 0) state.right = true;

    state.position += state.right ? 1 : -1;
    return { nextFrame, state };
  },
};

export default Bounce;
