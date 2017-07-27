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
  console.log(date);
};

getDate();

var xhrRequest = function (date, id, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange =  function() {
    if (xhr.readystate === 4 && xhr.status === 200){
      callback(JSON.parse(xhr.responseText))
    }
  }
  xhr.open('Get', '/?date=' + date + '&id=' + id, true);
  xhr.end();
}
var todaysDate = getDate().toString();
xhrRequest(todaysDate, 'now', createDOM)
