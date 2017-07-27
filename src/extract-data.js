const testJSON = require('../tests/test.json');

const extractData = (dataObject) => {
  let resultData = [];
  dataObject.response.docs.forEach(()=> {
    if (resultData.length >= 5){
      return;
    }
    let newArticle = {};
    newArticle.headline = dataObject.response.docs[0].headline.main;
    newArticle.snippet = dataObject.response.docs[0].snippet;
    newArticle.link = dataObject.response.docs[0].web_url;
    resultData.push(newArticle);
  });
  // console.log(resultData);
  return resultData;
}

const frontendObjectBuilder = (dataObject) => {
  // error handling to check that argument is in NYT format
  try {
    if (!dataObject.response.docs){
      throw new Error('Api returned an invalid object')
    }
  } catch (e) {
    return { isValid: false, message: 'Api returned an invalid object' };
  }

  let completedObj = {};
  completedObj.results = extractData(dataObject);
  completedObj.isValid = true;

  return completedObj;
};
frontendObjectBuilder(testJSON);
module.exports = frontendObjectBuilder;
