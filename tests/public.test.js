const test = require('tape');

test('initial setup on public', (t) => {
  t.equal(1, 1, 'tape is running on public.test.js');
  t.end();
});
