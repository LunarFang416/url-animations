import BaseAnimation from './base';

interface State {
  index: number;
  spinner: string[];
  maxLength: number;
  speed: number;
  pastTimeStamp: number;
}

abstract class Spinner implements BaseAnimation {
  abstract name: string;
  abstract creator: string;
  abstract baseState: State;
  nextState(timeStamp: number, state: State): { nextFrame: string; state: State } {
    let nextFrame = '';
    if (timeStamp - state.pastTimeStamp >= state.speed) {
      state.index += 1;
      state.pastTimeStamp = timeStamp;
    }
    nextFrame = state.spinner[state.index % state.spinner.length].repeat(state.maxLength);
    return { nextFrame, state };
  }
}

class Spinner_01 extends Spinner {
  name: string = 'Spinner_01';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}
class Spinner_02 extends Spinner {
  name: string = 'Spinner_02';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█', '▇', '▆', '▅', '▄', '▃', '▁'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}
class Spinner_03 extends Spinner {
  name: string = 'Spinner_03';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['▉', '▊', '▋', '▌', '▍', '▎', '▏', '▎', '▍', '▌', '▋', '▊', '▉'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}
class Spinner_04 extends Spinner {
  name: string = 'Spinner_04';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['▖', '▘', '▝', '▗'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}

class Spinner_05 extends Spinner {
  name: string = 'Spinner_05';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['┤', '┘', '┴', '└', '├', '┌', '┬', '┐'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}

class Spinner_06 extends Spinner {
  name: string = 'Spinner_06';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['◢', '◣', '◤', '◥'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}

class Spinner_07 extends Spinner {
  name: string = 'Spinner_07';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['◰', '◳', '◲', '◱'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}

class Spinner_08 extends Spinner {
  name: string = 'Spinner_08';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['◐', '◓', '◑', '◒'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}
class Spinner_09 extends Spinner {
  name: string = 'Spinner_09';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['|', '/', '-', '\\', '\\'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}
class Spinner_10 extends Spinner {
  name: string = 'Spinner_10';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['.', 'o', 'O', '@', '*'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}
class Spinner_11 extends Spinner {
  name: string = 'Spinner_11';
  creator: string = 'lunarfang_416';
  baseState: State = {
    index: 0,
    spinner: ['_◡◡_', '_⊙⊙_', '_◠◠_'],
    maxLength: 160,
    speed: 150,
    pastTimeStamp: 0,
  };
}

export {
  Spinner_01,
  Spinner_02,
  Spinner_03,
  Spinner_04,
  Spinner_05,
  Spinner_06,
  Spinner_07,
  Spinner_08,
  Spinner_09,
  Spinner_10,
  Spinner_11,
};
