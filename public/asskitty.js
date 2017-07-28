/* eslint-disable */
var getDate = function( yearsAgo ) {

  if ( yearsAgo === undefined ) {
    yearsAgo = 0;
  }

  var date = new Date();
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear() - yearsAgo;

  if ( dd < 10 ) {
    dd = '0' + dd;
  }

  if ( mm < 10 ) {
    mm = '0' + mm;
  }
  date = yyyy + mm + dd;
  return date
};

getDate();

var xhrRequest = function (date, id, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange =  function() {
    if (xhr.readyState === 4 && xhr.status === 200){
      var responseText = JSON.parse(xhr.responseText);
      var id = responseText.id
      callback(id, responseText);
    }
  }
  xhr.open('Get', '/?date=' + date + '&id=' + id, true);
  xhr.send();
}
var todaysDate = getDate();

xhrRequest(todaysDate, 'now', createDOM);

var thenSubmit = document.getElementById('then-submit');
thenSubmit.addEventListener('click', function (ev){
  var submitValue = document.getElementById('years').value;
  try {
    if (!Number.isInteger(submitValue) || submitValue.toString() === '.') {
      throw new Error("Error! Submit value contains dot");
    }
    if (submitValue > 165 && submitValue < 0) {
      throw new Error("Error! Number is not between 0 and 166");
    }
    oldDate = getDate(submitValue);
    xhrRequest(oldDate, 'then', createDOM);
  }
  catch(e) {
    console.log("Error!");
    var divToAppend = badDomCreation();
    document.getElementById('then').appendChild(divToAppend);
  }
})
