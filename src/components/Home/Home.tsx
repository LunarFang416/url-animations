import { useEffect, useState } from "react"
import Animation from "../Animation/Animation";
import ANIMATIONS from "../../animations/exports";
import BaseAnimation from "../../animations/base";
import URLAnimation from "../../hook";

import github from "../assets/github-mark.png"
import coffee from "../assets/bmc-logo.png"
import "./Home.css"

const Home = () => {
  const [animation, setAnimation] = useState(ANIMATIONS.Default);
  const [loading, setLoading] = useState(true)
  const URL = URLAnimation();
  useEffect(() => {
    URL.start(ANIMATIONS.Default);
  },[])

  return (
    <div className="home-div">
      <div className="home-top">
        <h1 style={{ marginLeft: "20px" }}>--------^</h1>
        <button onClick={() => URL.stop()}>click me</button>
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
      <p style={{'color':'white'}}>{URL.frame}</p>
      <div className="animation-div">
        {Object.keys(ANIMATIONS).map((item, i) => {
          return (
            <Animation
              animation={ANIMATIONS[item]}
              changeAnimation={() => URL.start(ANIMATIONS[item])}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;