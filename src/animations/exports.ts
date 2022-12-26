import Shark from "./shark";
import Default from "./default"
import BaseAnimation from "./base";
import Swim from "./swim";
import Plane from "./plane";
import Flip from "./flip";
import Wave from "./wave";
import Wave2_0 from "./wave2";
import Bounce from "./bounce";
import O from "./o";
import Squiggle from "./squiggle";
import { Source_01, Source_02, Source_03, Source_04, Source_05 } from "./source"
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
} from "./spinners";
import Test from "./test";

const ANIMATIONS: Record<string, BaseAnimation> = {
  Default: Default,
  Shark: Shark,
  Swim: Swim,
  Plane: Plane,
  Flip: Flip,
  Wave: Wave,
  Wave2_0: Wave2_0,
  Bounce: Bounce,
  O: O,
  Squiggle: Squiggle,
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

export default ANIMATIONS;
