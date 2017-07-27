
const request = require('request');
const extractData = require('./extract-data')
const env = require('env2')('./config.env');

const buildAPIURL = ( date, apiURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  apiKey = process.env.APIKEY ) => {
  return `${apiURL}?api-key=${apiKey}&begin_date=${date}&end_date=${date}&sort=newest`;
}

const makeRequest = (date, callback) => {
  const url = buildAPIURL(date);
  console.log(url);
  // let returnObject;
  request.get(url, (err, response, body) => {
    if (err){
      return callback (err)
    } else {
      const responseParsed = JSON.parse(body);
      return callback (null, responseParsed)
    }
    // console.log(JSON.parse(body).response.docs);
  });
}

// makeRequest(20170101, extractData);

// const callAPI = (date,callback) => {
  // return makeRequest(date, (err, res) =>{
  //   if (err){
  //     console.log(err);
  //   }
  //
  //   else {
  //     console.log(null,res) ;
//     }
//   });
  // return callback(date);
  // const extractedObject = JSON.stringify(extractData(apiResponse));
  // return apiResponse;


// console.log(callAPI(20170101));
// makeRequest(20170101);
// callAPI()
// console.log(makeRequest(20170101, extractData));

module.exports = makeRequest;
// makeRequest(20170101);
