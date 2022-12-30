import BaseAnimation from './animations/base';

const URLAnimation = () => {
  let frame = "";
  let interval: any;
  
  const start = (animation: BaseAnimation) => {
    let state = animation.baseState;
    if(interval) clearInterval(interval);
    interval = setInterval(() => {
      const next = animation.nextState(Date.now(), state)
      frame = next.nextFrame;
      state = next.state;
      window.history.pushState(null, "", `/#${frame}`);
    }, 66);
  }

  const stop = () => {
    window.history.pushState(null, "", `/`);
    clearInterval(interval)
  }

  return {
    start, stop
  }
}

export default URLAnimation;