var myURL="https://www.googleapis.com/youtube/v3/search";
function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    r: 'json',
    key:'AIzaSyB1TWhvf43peZ2PxY_R90o9s1FqWEcinO8',
    part: 'snippet',
    maxResults:50
    
  }
  $.getJSON(myURL, query, callback);
}


function displayYoutubeData(data) {
  var resultElement = '<table>';
  

  if (data.items) {

    data.items.forEach(function(item) {
    	resultElement+="<tr>";
     //resultElement += '<p>' + item.snippet.title  + '</p>';
   // resultElement +='<img src='+item.snippet.thumbnails.default.url+'>';
    var url="https://www.youtube.com/watch?v=";
    url=url+item.id.videoId;
    resultElement +='<td><a href="'+url+'"><img src='+item.snippet.thumbnails.default.url+'></a></td>';
     resultElement +='<td><a href="'+url+'">'+item.snippet.title+'</a></td>';
     
     resultElement+="</tr>";
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  resultElement+="</table>";
  $('.js-search-results').html(resultElement);
}
function userSubmit() {
	  //alert("query");
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();

    getDataFromApi(query, displayYoutubeData);
  });
}

$(function(){
	userSubmit();
});