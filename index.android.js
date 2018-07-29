const React = require('react')
const View = require('react-native').View

module.exports = function Spacer (props) {
  const style = {
    width: (typeof props.width === 'number' ? props.width : (props.width || 1)),
    height: (typeof props.height === 'number' ? props.height : (props.height || 1)),
    flexGrow: props.grow,
    flexShrink: props.shrink
  }

  return React.createElement(View, { style }, props.children)
}
