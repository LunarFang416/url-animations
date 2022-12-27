import React from "react";
import BaseAnimation from "../../animations/base";

type Props = {
  animation: BaseAnimation;
};

const Hashmovie = ({ animation }: Props) => {
  const [frame, setFrame] = React.useState("");
  const stateRef = React.useRef<any | null>(null);
  const timerRef = React.useRef<NodeJS.Timer | null>(null);

  React.useEffect(() => {
    setFrame("");
    stateRef.current = animation.baseState;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      const next = animation.nextState(Date.now(), stateRef.current);
      setFrame(next.nextFrame);
      stateRef.current = next.state;
    }, 66);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [animation]);

  React.useEffect(() => {
    window.history.replaceState(null, "", `#${frame}`);
  }, [frame]);

  return null;
};

export default Hashmovie;
