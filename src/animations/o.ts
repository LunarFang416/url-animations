import BaseAnimation from './base';

interface State {
  pastTimeStamp: number;
  index: number;
}

const O: BaseAnimation = {
  name: 'O',
  creator: 'LunarFang_416',
  baseState: {
    pastTimeStamp: 0,
    index: 0,
  },
  nextState: (timestamp: number, state: State): { nextFrame: string; state: State } => {
    const frames = [
      ':O................#',
      '..\u00D6................#',
      '...O:.............#',
      '.....O\u0324............#',
      '......:O..........#',
      '........\u00D6..........#',
      '..........O:......#',
      '............O\u0324.....#',
      '.............:O...#',
      '...............\u00D6...#',
      '................O:#',
      '...............\u00D6...#',
      '.............:O...#',
      '............O\u0324.....#',
      '..........O:......#',
      '........\u00D6..........#',
      '......:O..........#',
      '.....O\u0324............#',
      '...O:.............#',
      '..\u00D6................#',
    ];
    if (timestamp - state.pastTimeStamp > 90) {
      state.index = (state.index + 1) % frames.length;
      state.pastTimeStamp = timestamp;
    }
    const nextFrame = frames[state.index];
    return { nextFrame, state };
  },
};

export default O;
