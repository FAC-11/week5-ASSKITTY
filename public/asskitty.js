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
  console.log("test");
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange =  function() {
    if (xhr.readyState === 4 && xhr.status === 200){
      // console.log(xhr.responseText);
      var responseText = JSON.parse(xhr.responseText);
      var id = responseText.id
      callback(id, responseText);
      // console.log("hi");
    }
  }
  xhr.open('Get', '/?date=' + date + '&id=' + id, true);
  xhr.send();
}
var todaysDate = getDate();
var oldDate = getDate(150);

// var parallelXhrRequest = (array) {
//   var count = 0;
//   var results =[]
//   array.forEach(function(func, index){
//     result[index] = func;
//     count ++;
//     if (count === array.length){
//
//     }
//   })
// }
// var arrayOfFunctions = [xhrRequest(todaysDate, 'now', createDOM), xhrRequest(oldDate, 'then', createDOM)];
xhrRequest(todaysDate, 'now', createDOM);
// xhrRequest(oldDate, 'then', createDOM);
