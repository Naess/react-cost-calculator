'use strict';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// Object.entries
var assert = require('assert');
var entries = require('object.entries');

var obj = { a: 1, b: 2, c: 3 };
var expected = [['a', 1], ['b', 2], ['c', 3]];

if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
    // for environments with Symbol support
    var sym = Symbol();
    obj[sym] = 4;
    obj.d = sym;
    expected.push(['d', sym]);
}

assert.deepEqual(entries(obj), expected);

if (!Object.entries) {
    entries.shim();
}

assert.deepEqual(Object.entries(obj), expected);
