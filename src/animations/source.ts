import BaseAnimation from "./base";

interface State {
  index: number;
  chars: string;
  maxLength: number;
  message: string;
}

abstract class Source implements BaseAnimation{
  abstract name: string;
  abstract creator: string;
  abstract baseState: State;
  nextState(timeStamp: number, state: State): { nextFrame: string, state: State }{
    let nextFrame = "";
    let cols = (state.maxLength - state.message.length) / 2
    for (let j = 0; j <= cols; j++) {
      nextFrame += state.chars[(state.index + j) % state.chars.length];
    }
    nextFrame += state.message;
    for (let j = 0; j <= cols; j++) {
      let n = state.index - j,
        m = state.chars.length;
      let proper_mod = ((n % m) + m) % m;
      nextFrame += state.chars[proper_mod];
    }
    state.index += 1
    return { nextFrame, state }
  }
}

class Source_01 extends Source {
  name: string = "Source_01";
  creator: string = "lunarfang_416";
  baseState: State = {
    index: 0,
    chars: "_,.-'¯....",
    maxLength: 160,
    message: "another_another_one",
  };
}
class Source_02 extends Source {
  name: string = "Source_02";
  creator: string = "lunarfang_416";
  baseState: State = {
    index: 0,
    chars: "|/-\\|/-\\",
    maxLength: 160,
    message: "another_one_dj",
  };
}
class Source_03 extends Source {
  name: string = "Source_03";
  creator: string = "lunarfang_416";
  baseState: State = {
    index: 0,
    chars: '_.~"|',
    maxLength: 160,
    message: "another_one_dj_khaled",
  };
}
class Source_04 extends Source {
  name: string = "Source_04";
  creator: string = "lunarfang_416";
  baseState: State = {
    index: 0,
    chars: "\"'-._,-'",
    maxLength: 160,
    message: "dj_khaled",
  };
}

class Source_05 extends Source {
  name: string = "Source_05";
  creator: string = "lunarfang_416";
  baseState: State = {
    index: 0,
    chars: "|/-.-\\|/-'-\\",
    maxLength: 160,
    message: "__dj_khaled__",
  };
}

export { Source_01, Source_02, Source_03, Source_04, Source_05 };