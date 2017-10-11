const React = require('react')

module.exports = function Spacer (props) {
  const style = {
    width: props.width || '1px',
    height: props.height || '1px',
    flexGrow: props.grow,
    flexShrink: props.shrink
  }

  return React.createElement('div', { style }, props.children)
}
