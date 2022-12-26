import { useEffect, useState } from "react"
import Animation from "../Animation/Animation";
import ANIMATIONS from "../../animations/exports";
import BaseAnimation from "../../animations/base";

import github from "../assets/github-mark.png"
import coffee from "../assets/bmc-logo.png"
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
      <div className="home-top">
        <h1 style={{ marginLeft: "20px" }}>--------^</h1>
        <div style={{ display: "flex" }}>
          <span className="logo-div">
            <h4>contribute </h4>
            <a
              href="https://github.com/lunarfang416/url-animations"
              target="_blank"
              rel="noreferrer"
            >
              <img className="home-logo" src={github} alt="github"></img>
            </a>
          </span>
          <span className="logo-div">
            <h4>support </h4>
            <a
              href="https://www.buymeacoffee.com/lunarfang416"
              target="_blank"
              rel="noreferrer"
            >
              <img className="home-logo" src={coffee} alt="coffee"></img>
            </a>
          </span>
        </div>
      </div>
      <div className="animation-div">
        {Object.keys(ANIMATIONS).map((item, i) => {
          return (
            <Animation
              animation={ANIMATIONS[item]}
              changeAnimation={changeAnimation}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;