# URL Animations

Simulate Ascii art animations througgh your browsers URL field. 
Supported Browsers are: Chrome, Opera GX, Firefox
(Dont try Safari)

https://user-images.githubusercontent.com/73078183/209571272-a7110cbf-7fb4-4b21-b198-1f9968b92a00.mov

## How to contribute 

Have ASCII art that you want to share? Follow these steps and your art will be uploaded
in no time:

1. Create a seperate branch using `git checkout -b [branch-name]`
2. Create a unique file name which reflects your ascii animation in the `src/animations` directory
3. Implement the Animation by implementing the `BaseAnimation` interface, you can find it at `src/animations/base.ts`. More info about the `BaseAnimation` interface can be found in the `src/animations/base.ts` file.
4. All animation data related to your ASCII Art must be encapsulated within the Animation Object you implement. As long as the interface is implemented, the way in which you create the frames for your animations do not matter, so you have complete freedome in that department.
5. In the `src/animations/exports.ts` import your Animation Object and add it to the `exports` with the other animations like this:
```typescript
import YourAnimation from './yourAnimation.ts'
...
const ANIMATIONS: Record<string, BaseAnimation> = {
  ...,
  YourAnimation : YourAnimation
}

export default ANIMATIONS;
```
6. Create a PR with a small description about the animation (ideally a gif illustrating the animation in action)
