const assert = require('assert')
const proxyquire = require('proxyquire').noCallThru()

const react = { createElement (a, b, c) { return [a, b, c] } }
const reactNative = { View: Symbol('react-native-view') }

const android = proxyquire('./index.android.js', { react, 'react-native': reactNative })
const browser = proxyquire('./index.js', { react })
const ios = proxyquire('./index.ios.js', { react, 'react-native': reactNative })

function test (fn, props, view, style) {
  const children = Symbol('react-children')
  const result = fn(Object.assign({}, props, { children }))

  assert.deepStrictEqual(result, [view, { style }, children])
}

function testBrowser (props, style) {
  test(browser, props, 'div', style)
}

function testNative (props, style) {
  test(android, props, reactNative.View, style)
  test(ios, props, reactNative.View, style)
}

testBrowser({}, { width: '1px', height: '1px', flexGrow: undefined, flexShrink: undefined })
testBrowser({ width: 0 }, { width: '0px', height: '1px', flexGrow: undefined, flexShrink: undefined })
testBrowser({ width: 2 }, { width: '2px', height: '1px', flexGrow: undefined, flexShrink: undefined })
testBrowser({ width: '' }, { width: '1px', height: '1px', flexGrow: undefined, flexShrink: undefined })
testBrowser({ width: '2px' }, { width: '2px', height: '1px', flexGrow: undefined, flexShrink: undefined })
testBrowser({ width: '50%' }, { width: '50%', height: '1px', flexGrow: undefined, flexShrink: undefined })

testNative({}, { width: 1, height: 1, flexGrow: undefined, flexShrink: undefined })
testNative({ width: 0 }, { width: 0, height: 1, flexGrow: undefined, flexShrink: undefined })
testNative({ width: 2 }, { width: 2, height: 1, flexGrow: undefined, flexShrink: undefined })
testNative({ width: '' }, { width: 1, height: 1, flexGrow: undefined, flexShrink: undefined })
testNative({ width: '50%' }, { width: '50%', height: 1, flexGrow: undefined, flexShrink: undefined })
