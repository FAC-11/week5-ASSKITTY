/* eslint-disable */

var goodDomCreation = function (arrayOfResults) {
  var divToAppend = document.createElement('div');
  arrayOfResults.forEach(function (ele){
    var newButton = document.createElement('button');
    var newTitle = document.createElement('h3');
    var newArticle = document.createElement('article');
    var newATag = document.createElement('a');
    newTitle.textContent = ele.headline;
    newArticle.textContent = ele.snippet;
    newATag.setAttribute('href', ele.link);
    newAtag.setAttribute.target = '_blank';
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
  console.log(sectionID);
  if(sectionID==='the'){
    sectionID = 'then';
  };
  var sectionOnDOM = document.getElementById(sectionID);
  var ourResults = responseObject.results;
  var divToAppend;
  if (responseObject.isValid) {
    divToAppend = goodDomCreation(ourResults);
    // return divToAppend;
    sectionOnDOM.appendChild(divToAppend);
  } else if (!responseObject.isValid) {
    divToAppend = badDomCreation();
    // return divToAppend;
    sectionOnDOM.appendChild(divToAppend);
  }
}
