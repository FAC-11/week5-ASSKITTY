/* eslint-disable */

// var testObjTrue = { results:
//    [ { headline: 'Gaza Power-Sharing Deal Moves Ahead With Parliament Meeting',
//        snippet: 'Lawmakers from Hamas and those affiliated with a former Gaza strongman have met for the first time in a decade in Gaza\'s parliament building....',
//        link: 'https://www.nytimes.com/aponline/2017/07/27/world/middleeast/ap-ml-palestinians-gaza-deal.html' },
//      { headline: 'Gaza Power-Sharing Deal Moves Ahead With Parliament Meeting',
//        snippet: 'Lawmakers from Hamas and those affiliated with a former Gaza strongman have met for the first time in a decade in Gaza\'s parliament building....',
//        link: 'https://www.nytimes.com/aponline/2017/07/27/world/middleeast/ap-ml-palestinians-gaza-deal.html' },
//      { headline: 'Gaza Power-Sharing Deal Moves Ahead With Parliament Meeting',
//        snippet: 'Lawmakers from Hamas and those affiliated with a former Gaza strongman have met for the first time in a decade in Gaza\'s parliament building....',
//        link: 'https://www.nytimes.com/aponline/2017/07/27/world/middleeast/ap-ml-palestinians-gaza-deal.html' },
//      { headline: 'Gaza Power-Sharing Deal Moves Ahead With Parliament Meeting',
//        snippet: 'Lawmakers from Hamas and those affiliated with a former Gaza strongman have met for the first time in a decade in Gaza\'s parliament building....',
//        link: 'https://www.nytimes.com/aponline/2017/07/27/world/middleeast/ap-ml-palestinians-gaza-deal.html' },
//      { headline: 'Gaza Power-Sharing Deal Moves Ahead With Parliament Meeting',
//        snippet: 'Lawmakers from Hamas and those affiliated with a former Gaza strongman have met for the first time in a decade in Gaza\'s parliament building....',
//        link: 'https://www.nytimes.com/aponline/2017/07/27/world/middleeast/ap-ml-palestinians-gaza-deal.html' } ],
// isValid: true,
// id: 'now'};
//
// var testObjFalse = { isValid: false,
//   id: 'now'}

var goodDomCreation = function (arrayOfResults) {
  var divToAppend = document.createElement('div');
  arrayOfResults.forEach(function (ele){
    var newButton = document.createElement('button');
    var newTitle = document.createElement('h3');
    var newArticle = document.createElement('article');
    var newATag = document.createElement('a');
    newTitle.textContent = ele.headline;
    newArticle.textContent = ele.snippet;
    newATag.setAttribute ('href', ele.link);
    newButton.appendChild(newATag);
    newATag.appendChild(newTitle);
    newATag.appendChild(newArticle);
    divToAppend.appendChild(newButton);
  });
  return divToAppend
}

var badDomCreation = function () {
  var divToAppend = document.createElement('div');
  var errorMessage = document.createElement('h2');
  errorMessage.textContent = 'Sorry your request could not be completed right now';
  divToAppend.appendChild(errorMessage);
  return divToAppend;
}

var createDOM = function (sectionID, responseObject) {
  var sectionOnDOM = document.getElementById(sectionID);
  var ourResults = responseObject.results;
  var divToAppend;
  if (responseObject.isValid) {
    divToAppend = goodDomCreation(ourResults);
    sectionOnDOM.appendChild(divToAppend);
  } else if (!responseObject.isValid) {
    divToAppend = badDomCreation();
    // console.log(divToAppend);
    sectionOnDOM.appendChild(divToAppend);
  }
}

//functions below call createDOM with now and then sectionIDs
// createDOM ('now', testObjTrue);
// createDOM ('then', testObjFalse);
