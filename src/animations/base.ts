export default interface BaseAnimation{
  name: string,
  creator: string,
  baseState: any,
  nextState(timestamp: number, state: Object): { nextFrame: string, state: Object} 
}