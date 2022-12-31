export default interface BaseAnimation {
  name: string;
  // Name of Animation
  creator: string;
  // Creator of ASCII Animation
  baseState: any;
  // Initial starting point, or necessary data required to run the animation or output subsequent frames
  nextState(timestamp: number, state: Object): { nextFrame: string; state: Object };
  // Logic that determines the next frame of the animation based on the current state. Timestamp variable can be used to tweak speed at which frames are updated. Output is the next frame, and an updated state to reflect the data for subsequent states
}
