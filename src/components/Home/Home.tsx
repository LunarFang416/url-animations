import { useEffect, useState } from "react"
import Animation from "../Animation/Animation";
import ANIMATIONS from "../../animations/exports";
import BaseAnimation from "../../animations/base";

import "./Home.css"

const Home = () => {
  const [animation, setAnimation] = useState(ANIMATIONS.Default);
  const [frame, setFrame] = useState("");
  const [state, setState] = useState<any>(animation.baseState);

  useEffect(() => {
    let timeStamp = state?.pastTimeStamp ? state?.pastTimeStamp : 0 ;
    const interval = setInterval(() => {
      const { nextFrame, ...nextState } = animation.nextState(timeStamp, state);
      setFrame(nextFrame);
      setState(nextState);
      timeStamp += 50
    }, 50);
    return () => clearInterval(interval);
  }, [animation]);

  useEffect(() => {
    window.history.pushState(null, "", `/#${frame}`);
  }, [frame]);

  const changeAnimation = (animation: BaseAnimation): void => {
    setAnimation(animation);
    setFrame("")
    setState(animation.baseState)
  }

  return (
    <div className="home-div">
      <h1 style={{marginLeft: "20px"}}>--------^</h1>
      <div className="animation-div">
      {Object.keys(ANIMATIONS).map((item, i) => {
        return <Animation animation={ANIMATIONS[item]} changeAnimation={changeAnimation} key={i} />
      })}
      </div>
    </div>
  )
}

export default Home;