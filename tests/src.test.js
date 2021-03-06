const test = require('tape');
const shot = require('shot');
const router = require('../src/router');

test('initial setup on src', (t) => {
  t.equal(1, 1, 'tape is running on src.test.js');
  t.end();
});

test('checking home route', (t) => {
  shot.inject(router, {method: 'get', url: '/'}, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code 200');
    t.end();
  });
});

test('test handlePublic with css', (t) => {
  shot.inject(router, {method: 'get', url: 'public/style.css'}, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code 200');
    t.end();
  });
});

test('test handlePublic with js', (t) => {
  shot.inject(router, {method: 'get', url: 'public/asskitty.js'}, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code 200');
    t.end();
  });
});

test('test handlePublic with ico', (t) => {
  shot.inject(router, {method: 'get', url: 'public/favicon.ico'}, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code 200');
    t.end();
  });
});

test('test apiCall for router', (t) => {
  shot.inject(router, {method: 'get', url: '/?date=20170101&id=now'}, (res) => {
    // const JSONObject = JSON.parse(res);
    let actual = res.statusCode;
    let expected = 200;
    t.equal(actual, expected, 'should respond with status code 200');
    // console.log(res);
    // actual = JSONObject.;
    // expected =;
    t.end();
  });
});

// test('test handleDate', (t) => {
//   shot.inject(router, {method: 'get', url: '/?date'}, (res) => {
//     t.equal(res.statusCode, 200, 'should respond with status code 200');
//     t.end();
//   });
// });
