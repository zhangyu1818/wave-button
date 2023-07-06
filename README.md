# Wave Button

Just button, but it's cool!

[preview](https://zhangyu1818.github.io/wave-button/)

## Installation

```shell
npm i wave-button
```

## Usage

```tsx
import { WaveButton } from 'wave-button'

import 'wave-button/style.css'

function App() {
  return <WaveButton>Button</WaveButton>
}
```

try it [online](https://codesandbox.io/s/youthful-goldberg-f3n8lf).

## Style

The css of wave-button only contains the most basic styles.

```css
.wave-button {
  position: relative;
}

.wave-button canvas.motion-wave {
  position: absolute;
  inset: 0px;
  z-index: -10;
}
```

You may need to customize the width and height, background color, and wave fill color through css. You need to modify the css fill property of the canvas.

Here is the additional style added to the example URL

```css
.wave-button {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  outline-color: #000;
}

.wave-button canvas.motion-wave {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

@media (prefers-color-scheme: dark) {
  .wave-button canvas.motion-wave {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
    fill: #fff;
  }
}

.wave-button-inner {
  mix-blend-mode: difference;
}
```
