const test = require('tape');
const shot = require('shot');

test('initial setup on src', (t) => {
  t.equal(1, 1, 'tape is running on src.test.js');
  t.end();
});
