
const Scratch = require('./lib.js');

test('Scratch.js should error if no parameters are set or parameters are of the wrong type when constructing object.', () => {
  expect(() => new Scratch(2)).toThrow();
});
