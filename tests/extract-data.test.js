const test = require('tape');
const extractData = require('../src/extract-data.js');
const testJSON = require('./test.json');

test('initial setup on extract-data', (t) => {
  t.equal(1, 1, 'tape is running on extract-data.test.js');
  t.end();
});

test('extract data functionality', (t) => {
  let expected = typeof {};
  let actual = typeof extractData({});
  t.equal(actual, expected, 'extractData returns typeof object');

  expected = Array.isArray({});
  actual = Array.isArray(extractData({}));
  t.equal(actual, expected, 'extractData does not return an array');

  actual = extractData({}).isValid;
  t.error(actual, 'extractData returns an error if object is not from NYT');

  expected = 'Api returned an invalid object';
  actual = extractData({}).message;
  t.equal(actual, expected, 'extractData return correct error message if object is not from NYT');

  expected = "Gaza Power-Sharing Deal Moves Ahead With Parliament Meeting";
  const returnObj = extractData(testJSON);
  actual = returnObj.results[0].headline;
  t.equal(actual, expected, 'extractData returns the headline from the first element');

  expected = true;
  actual = extractData(testJSON).isValid;
  t.equal(actual, expected, 'extractData.isValid returns true if NYT data is passed as an argument');
  t.end();
});
