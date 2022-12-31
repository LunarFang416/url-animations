import Bounce from './animations/bounce';
import Custom from './animations/custom';
import Default from './animations/default';
import Flip from './animations/flip';
import O from './animations/o';
import OG_Loader from './animations/og_loader';
import Plane from './animations/plane';
import Shark from './animations/shark';
import { Source_01, Source_02, Source_03, Source_04, Source_05 } from './animations/source';
import {
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
} from './animations/spinners';
import Squiggle from './animations/squiggle';
import Swim from './animations/swim';
import Wave from './animations/wave';
import Wave2_0 from './animations/wave2';
export {default as Custom} from './animations/custom';

export interface BaseAnimation {
  name: string;
  creator: string;
  baseState: any;
  nextState(timestamp: number, state: Object): { nextFrame: string; state: Object };
}

export const Animations: { [key: string]: BaseAnimation } = {
  Default,
  OG_Loader,
  Custom: new Custom(),
  Shark,
  Swim,
  Plane,
  Flip,
  Wave,
  Wave2_0,
  Bounce,
  O,
  Squiggle,
  Source_01: new Source_01(),
  Source_02: new Source_02(),
  Source_03: new Source_03(),
  Source_04: new Source_04(),
  Source_05: new Source_05(),
  Spinner_01: new Spinner_01(),
  Spinner_02: new Spinner_02(),
  Spinner_03: new Spinner_03(),
  Spinner_04: new Spinner_04(),
  Spinner_05: new Spinner_05(),
  Spinner_06: new Spinner_06(),
  Spinner_07: new Spinner_07(),
  Spinner_08: new Spinner_08(),
  Spinner_09: new Spinner_09(),
  Spinner_10: new Spinner_10(),
  Spinner_11: new Spinner_11(),
};

export const URLAnimation = () => {
  let frame = '';
  let interval: any;

  const start = (animation: BaseAnimation) => {
    let state = animation.baseState;
    clearInterval(interval);
    interval = setInterval(() => {
      const next = animation.nextState(Date.now(), state);
      frame = next.nextFrame;
      state = next.state;
      window.history.pushState(null, '', `/#${frame}`);
    }, 66);
  };

  const stop = () => {
    clearInterval(interval);
    window.history.pushState(null, '', `/`);
  };

  return {
    start,
    stop,
  };
};
