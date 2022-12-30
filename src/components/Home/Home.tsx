import { useEffect, useState, useRef } from "react"
import Animation from "../Animation/Animation";
import Custom from "../Custom/Custom";
import ANIMATIONS from "../../animations/exports";
import BaseAnimation from "../../animations/base";

import URLAnimation from "../../hook";
import github from "../../assets/github-mark.png"
import coffee from "../../assets/bmc-logo.png"
import "./Home.css"

const Home = () => {
  const [customAmimation, setCustomAnimation] = useState("");
  const [frameRate, setFrameRate] = useState(100);
  const URL = URLAnimation();
  useEffect(() => {
    URL.start(ANIMATIONS.Default);
  }, [])

  return (
    <div className="home-div">
      <div className="home-top">
        <h1>--------^</h1>
        <div className="homeTitle">
          ██╗░░░░░░█████╗░░█████╗░██████╗░██╗███╗░░██╗░██████╗░  ██╗░░░██╗██████╗░██╗░░░░░
          <br></br>
          ██║░░░░░██╔══██╗██╔══██╗██╔══██╗██║████╗░██║██╔════╝░  ██║░░░██║██╔══██╗██║░░░░░
          <br></br>
          ██║░░░░░██║░░██║███████║██║░░██║██║██╔██╗██║██║░░██╗░  ██║░░░██║██████╔╝██║░░░░░
          <br></br>
          ██║░░░░░██║░░██║██╔══██║██║░░██║██║██║╚████║██║░░╚██╗  ██║░░░██║██╔══██╗██║░░░░░
          <br></br>
          ███████╗╚█████╔╝██║░░██║██████╔╝██║██║░╚███║╚██████╔╝  ╚██████╔╝██║░░██║███████╗
          <br></br>
          ╚══════╝░╚════╝░╚═╝░░╚═╝╚═════╝░╚═╝╚═╝░░╚══╝░╚═════╝░  ░╚═════╝░╚═╝░░╚═╝╚══════╝
          <br></br>
          ░█████╗░███╗░░██╗██╗███╗░░░███╗░█████╗░████████╗██╗░█████╗░███╗░░██╗░██████╗
          <br></br>
          ██╔══██╗████╗░██║██║████╗░████║██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║██╔════╝
          <br></br>
          ███████║██╔██╗██║██║██╔████╔██║███████║░░░██║░░░██║██║░░██║██╔██╗██║╚█████╗░
          <br></br>
          ██╔══██║██║╚████║██║██║╚██╔╝██║██╔══██║░░░██║░░░██║██║░░██║██║╚████║░╚═══██╗
          <br></br>
          ██║░░██║██║░╚███║██║██║░╚═╝░██║██║░░██║░░░██║░░░██║╚█████╔╝██║░╚███║██████╔╝
          <br></br>
          ╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═════╝░
          <br></br>
        </div>
        <div className="homeLinks">
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
      <Custom URL={URL} />
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