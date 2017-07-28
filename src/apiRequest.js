
const request = require('request');
const extractData = require('./extract-data');
// const env = require('env2')('./config.env');

const buildAPIURL = ( date, apiURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  apiKey = process.env.APIKEY ) => {
  return `${apiURL}?api-key=${apiKey}&begin_date=${date}&end_date=${date}&sort=newest`;
}

const makeRequest = (date, callback) => {
  const url = buildAPIURL(date);
  request.get(url, (err, response, body) => {
    if (err){
      return callback (err)
    } else {
      const responseParsed = JSON.parse(body);
      return callback (null, responseParsed)
    }
  });
}

module.exports = makeRequest;
