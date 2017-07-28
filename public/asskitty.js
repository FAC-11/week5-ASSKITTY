/* eslint-disable */
var createDOM = createDOM;
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
var oldDate = getDate(150);

xhrRequest(todaysDate, 'now', createDOM);
xhrRequest(oldDate, 'then', createDOM);

module.exports = getDate;
