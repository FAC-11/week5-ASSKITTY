// var testObj = { results:
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
// id: 'now'}

var createDOM = function (sectionID, responseObject) {
  var sectionOnDOM = document.getElementById(sectionID);
  var divToAppend = document.createElement('div');
  var ourResults = responseObject.results;
  if (responseObject.isValid) {
    ourResults.forEach(function (ele){
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
      console.log(newButton);
      divToAppend.appendChild(newButton);
    });
    sectionOnDOM.appendChild(divToAppend);
  }

}

//functions below call createDOM with now and then sectionIDs
// createDOM ('now', testObj);
// createDOM ('then', testObj);
