const test = require('tape');
const getDate = require('../public/asskitty');

test('initial setup on public', (t) => {
  t.equal(1, 1, 'tape is running on public.test.js');
  t.end();
});

test('getDate function', (t) => {
  let actual = getDate();
  let expected = today.getFullYear();
  t.ok(typeof actual === 'string', 'getDate should return a string');
  actual = getDate().splice(0, 4);
  t.equal(actual, expected, 'getDate Function returns correct year');
  t.end();
});
