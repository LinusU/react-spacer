# React `Spacer`

An element to repesent space between other elements, for use in flexbox layouts.

## Installation

```sh
npm install --save react-spacer
```

## Usage

```js
const Spacer = require('react-spacer')

const React = require('react')
const { render } = require('react-dom')

const Header = () => (
  <div style={{ display: 'flex' }}>
    <div>MyApp</div>
    <Spacer grow='1' />
    <div>Login</div>
    <Spacer width='12px' />
    <div>Sign up</div>
  </div>
)

render(<Header />)
```

Will render something like this:

```text
MyApp                                       Login   Sign Up
```

## Props

### `width`

The width of the space.

### `height`

The height of the space.

### `grow`

The flex grow factor of the space.

### `shrink`

The flex shrink factor of the space.
