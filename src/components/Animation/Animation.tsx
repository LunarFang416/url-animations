import BaseAnimation from "../../animations/base";
import "./Animation.css"

const Animation = (
  { animation, changeAnimation }:
  { animation: BaseAnimation, changeAnimation: Function }
) => {
  
  return (
    <button className="animation-button" onClick={() => changeAnimation(animation)}>
      <h4>{animation.name.toLowerCase()}</h4>
      <h5>by: {animation.creator.toLowerCase()}</h5>
    </button>
  );
};



export default Animation;