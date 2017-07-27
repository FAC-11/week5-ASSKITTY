/* eslint-disable */
const request = require('request');
const env = require('env2')('./config.env');

const buildAPIURL = ( date = 20170727, apiURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  apiKey = process.env.APIKEY ) => {
  return `${apiURL}?api-key=${apiKey}&begin_date=${date}&end_date=${date}&sort=newest`;
}

const makeRequest = ( apiUrl = buildAPIURL() ) => {
  request.get(apiUrl, (err, response, body) => {
    return JSON.parse(body);
  });
}

makeRequest();
