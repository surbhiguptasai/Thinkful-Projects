var myURL="https://developers.zomato.com/api/v2.1/categories";
// function getCategoryDataFromAPI(callback) {
// 		//alert("4");
//   var query = {
//     apikey:'95adb6f09319ee2ad8f284f39dfb7d4b'
//   }
//   $.getJSON(myURL, query, callback);
// }

//  function displayCategoryData(data) {
//  	//alert("3");
//   var resultElement="";
//   if (data.categories) {
//     data.categories.forEach(function(item) {
//  var val=item.categories.name;
//  resultElement+="<option value="+val+">"+val+"</option>";
// })
//     $('#restuarantCuisine').html(resultElement);
// }
// }
var htmlTemplate=('  <div class="cardContent">'+
'  <div class="row">'+
'  <div class="col-sm-3">'+
'  <a href="$$imagelink" class="feat-img " style="  background-image:url(https://b.zmtcdn.com/images/placeholder_200.png);" data-original="https://b.zmtcdn.com/images/placeholder_200.png?output-format=webp">'+
'              </a>'+
'              </div>'+
'              <div>'+
'    <div class="col-sm-7">'+
'    <div class="row">'+
'    <a class="restaurant-name nowrap " href="$$linkname">$$name</a>'+
'    </div>'+
'    <div class="row">'+
'    <a class="zblack " title="Restaurants in Woodbridge" ><b>$$city</b></a></div>'+
'     <div class="row">$$address</div></div>'+
'      <div class="reviews col-sm-2 nowrap">'+
'        <a href="">$$rating</a>'+
'       <div><span><a>Votes:</a>$$vote</span></div>'+
'       <!--  <div><a>10 reviews</a></div> -->'+
'        </div>'+
'   </div>'+
'      </div><br>'+
'      <div class="divider row"></div><br>'+
'      <div class="row">'+
'  <div><span class="fontsize5 grey-text col-sm-3" >Cuisines: </span><span class="col-sm-7 left"><a title="Japanese" >$$cuisines</a></span></div>'+
'</div>'+
'<div class="row">'+
'				<div>'+
'				<span class="fontsize5 grey-text col-sm-3" >Cost:</span>'+
'				<span class="col-sm-7 left">'+
'				'+
'				$$</span>'+
'				</div></div>'+
'				<!--   <div class="row">                      '+
'				<div >'+
'					<span class="fontsize5  grey-text col-sm-3">Hours:</span>'+
'						<span class="col-sm-7 left">'+
'						(Sun),Lunch, Dinner (Mon-Sat)'+
'						</span>'+
'						</div>'+
'		</div> -->	</div>'+
''+
'<br><br>');
function getRestaurantDataFromAPI(callback) {
	var url="https://developers.zomato.com/api/v2.1/locations";
	var city=$("#loc").val();
    var searchQ = {
    apikey:'95adb6f09319ee2ad8f284f39dfb7d4b',
    query: city
  }
  $.getJSON(url, searchQ, callback);
}

function displayRestaurantData (data) {
	//alert("data is"+data);
	var entityID="";
	var entityType="";
	data.location_suggestions.forEach(function(item) {
	 entityID=item.entity_id;
	 entityType=item.entity_type;
	})
	
	// alert("id is"+entityID);
	// alert("type is"+entityType);

	var url="https://developers.zomato.com/api/v2.1/search";
	var searchQ = {
    apikey:'95adb6f09319ee2ad8f284f39dfb7d4b',
    entity_id:entityID,
    count:100,
    entity_type:entityType,
    sort: "rating"
  }
  $.getJSON(url, searchQ, showRestaurantData);
}
function showRestaurantData (data) {
	var val="";
	data.restaurants.forEach(function(item) {
		var htmlTemplate1=htmlTemplate;
	htmlTemplate1=htmlTemplate1.replace("$$name",item.restaurant.name);
	htmlTemplate1=htmlTemplate1.replace("$$linkname",item.restaurant.url);
	htmlTemplate1=htmlTemplate1.replace("$$imagelink",item.restaurant.url);
   htmlTemplate1=htmlTemplate1.replace("$$city",item.restaurant.location.city);
   htmlTemplate1=htmlTemplate1.replace("$$address",item.restaurant.location.address);
   htmlTemplate1=htmlTemplate1.replace("$$rating",item.restaurant.user_rating.aggregate_rating);
   htmlTemplate1=htmlTemplate1.replace("$$vote",item.restaurant.user_rating.votes);
    htmlTemplate1=htmlTemplate1.replace("$$cuisines",item.restaurant.cuisines);

   val+=htmlTemplate1;
 })
	//$("#showResult").html(val);

	$("#showResult").html(val);
	
}

function userSubmit() {	
	//$("#loc").geocomplete();
//$( "#loc" ).change(function() {
  // getCategoryDataFromAPI(displayCategoryData);
//});
$("#locsubmit").click(function(event) {
	//alert("2");
	/* Act on the event */
	getRestaurantDataFromAPI(displayRestaurantData);
});
  

}

$(function(){
	//alert("1");
	      $("#loc").geocomplete({
            details: ".geo-details",
            detailsAttribute: "data-geo"
        });
	userSubmit();

});