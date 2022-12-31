import { useEffect } from "react"
import AnimationCard from "../Animation/Animation";
import Custom from "../Custom/Custom";
import {URLAnimation, Animations, BaseAnimation} from "url-animations";

import github from "../../assets/github-mark.png"
import coffee from "../../assets/bmc-logo.png"
import npm from "../../assets/npm-logo.png"
import bugs from '../../assets/bugs.png'
import "./Home.css"

const Home = () => {
  const URL = URLAnimation();
  useEffect(() => {
    URL.start(Animations.default);
  }, [])

  const changeAnimation = (animation: BaseAnimation) => {
    URL.start(animation);
  };

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
            <a href="https://github.com/lunarfang416/url-animations" target="_blank" rel="noreferrer">
              <h4>contribute </h4>
              <img className="home-logo" src={github} alt="github"></img>
            </a>
          </span>
          <span className="logo-div">
            <a href="https://www.npmjs.com/package/url-animations" target="_blank" rel="noreferrer">
              <h4>install </h4>
              <img className="home-logo-npm home-logo" src={npm} alt="npm"></img>
            </a>
          </span>
          <span className="logo-div">
            <a href="https://github.com/LunarFang416/url-animations/issues/new" target="_blank" rel="noreferrer">
              <h4>issues </h4>
              <img className="home-logo" src={bugs} alt="github-issues"></img>
            </a>
          </span>
          <span className="logo-div">
            <a href="https://www.buymeacoffee.com/lunarfang416" target="_blank" rel="noreferrer">
              <h4>support </h4>
              <img className="home-logo" src={coffee} alt="coffee"></img>
            </a>
          </span>
        </div>
      </div>
      <Custom URL={URL} />
      <div className="animation-div">
        {Object.keys(Animations).map((item, i) => {
          return Animations[item].name !== 'Custom' ? (
            <AnimationCard animation={Animations[item]} changeAnimation={changeAnimation} key={i} />
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Home;