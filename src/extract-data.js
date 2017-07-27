const testJSON = require('../tests/test.json');

const extractData = (dataObject) => {
  let resultData = [];
  dataObject.response.docs.forEach((ele)=> {
    if (resultData.length >= 5){
      return;
    }
    let newArticle = {};
    newArticle.headline = ele.headline.main;
    newArticle.snippet = ele.snippet;
    newArticle.link = ele.web_url;
    resultData.push(newArticle);
  });
  // console.log(resultData);
  return resultData;
}

const frontendObjectBuilder = (dataObject) => {
  // error handling to check that argument is in NYT format
  // console.log(dataObject.response.docs);
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
  // console.log(completedObj);
  return completedObj;
};
// frontendObjectBuilder(null, testJSON);
module.exports = frontendObjectBuilder;
