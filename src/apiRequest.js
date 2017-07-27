/* eslint-disable */
const request = require('request');
const env = require('env2')('./config.env');
const makeRequest = ( apiUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
apiKey = process.env.APIKEY,
date ) => {

  request.get({
    url: apiUrl,
    qs: {
      'api-key': process.env.APIKEY,
      'begin_date': date,
      'end_date': date,
      'sort': "newest"
    },
  }, function(err, response, body) {
    body = JSON.parse(body);
    console.log(body);
  });
}

makeRequest();
