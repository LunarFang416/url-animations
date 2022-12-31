# URL Animations

Add loading animations to your website in your browser URL field.

[Try out the live demo!](lunarfang416.github.io/url-animations/)

https://user-images.githubusercontent.com/73078183/209571272-a7110cbf-7fb4-4b21-b198-1f9968b92a00.mov

## Usage
<hr>

Install the NPM package using `npm i url-animations`

To use the Animations you must first decide what animation to use. You can choose from the different stock animations from [here](lunarfang416.github.io/url-animations/).

```javascript
import { URLAnimations, Animations } from 'url-animations';

const URL = URLAnimations();
URL.start(Animations.deafult) 
// specify Animation here

setTimeout(() => {
  URL.stop(); // Stop Animation
}, 5000)
```

To implement your own animation you can implement the BaseAnimation interface from scratch (More info in Contribution Section). Or implement a class adhering to the BaseAnimation interface (see ./src/animations/custom).

However, if you do not want to create an animation interface/class from scratch, you can use the Custom Animation Class to specify a sequence of frames along with the frameRate (aka speed of animation), which is defaulted to 500. If you want to test this out, you can do to the [demo](lunarfang416.github.io/url-animations/) and configure your custom sequence using the custom option.

```javascript
import { URLAnimations, Animations, Custom } from 'url-animations';

const URL = URLAnimations();
URL.start(new Custom(["5", "4", "3", "2", "1"], 600)) 
// Pass Custom Object as Parameter

setTimeout(() => {
  URL.stop(); // Stop Animation
}, 5000)

```

### Vanilla JS

The package can be used in Vanilla JS as well. Using an open source npm package CDN like jsdelivr, unpkg etc. you can include it in your html file and use it as such:


```html
<body>
  <script src="https://cdn.jsdelivr.net/npm/url-animations/dist/index.js"></script>
  <script>
    const { URLAnimation, Animations } = window.url_animations;
    const URL = URLAnimation();
    URL.start(ANIMATIONS.shark);
    setTimeout(() => {
      URL.stop();
    }, 5000)
  </script>
</body>  


```


## API
<hr>

### `URLAnimation`

Core Functionality of URL Animation.

`URL.start(animation: BaseAnimation)`

- Commences Specified Animaiton

`URL.stop()`

- Stops current running Animation

```typescript
const URLAnimation: () => {
  start: (animation: BaseAnimation) => void;
  stop: () => void;
};
```

### `Animations`

Contains All stock URL Animation implementations to use. Can demo [here](lunarfang416.github.io/url-animations/).

```typescript
export declare const Animations: {
    [key: string]: BaseAnimation;
};
```

### `Custom`

Custom Animation class to quickly specify sequence of frames for your URL Animation.



```javascript
class Custom implements BaseAnimation {
  name: string;
  creator: string;
  baseState: State;
  constructor(frames?: string[], frameRate?: number);
  nextState(timestamp: number, state: State): {
      nextFrame: string;
      state: State;
  };
}
```

## Types
<hr>

### `BaseAnimation`

Interface struture Type to follow when implementing a Animation from scratch. Multiple xample implementations can be found at `src/animations`

```typescript
interface BaseAnimation {
  name: string;
  creator: string;
  baseState: any;
  nextState(timestamp: number, state: Object): {
      nextFrame: string;
      state: Object;
  };
}
```


## Contribution

<hr>
Contribution to the 'url-animations' package is open and you can share your own URL animations to others as well. Follow these steps and your animations will be uploaded in no time:

1. Create a seperate branch using `git checkout -b [branch-name]`
2. Create a unique file name which reflects your ascii animation in the `src/animations` directory
3. Implement the Animation by implementing the `BaseAnimation` interface, you can find it at `src/animations/base.ts`. More info about the `BaseAnimation` interface can be found in the `src/animations/base.ts` file.
4. All animation data related to your ASCII Art must be encapsulated within the Animation Object you implement. As long as the interface is implemented, the way in which you create the frames for your animations do not matter, so you have complete freedome in that department.
5. In the `src/index.ts` import your Animation Object and add it to the `exports` with the other animations like this:
```typescript
import YourAnimation from './yourAnimation.ts'
...
export const Animatinos: { [key: string]: BaseAnimation } = {
  ...,
  YourAnimation : YourAnimation
}

```
6. Create a PR with a small description about the animation (ideally a gif illustrating the animation in action)
