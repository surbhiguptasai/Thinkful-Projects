function listItem () {
 var state={items:[]};


	$('.submit').click(function(){
	
		// alert ("hello world");
		// alert("Listitem"+$(".listName").val());
		var newItem=($(".listName").val());
		
		// var html="<li>"+newItem+"</li>";
        state.items.push(newItem);
        var finalHtml=state.items.map(function(elem) {
        	
        	return "<li>"+elem+"</li>";
        })


		//alert ("value:"+newItem);
		//alert ("value:"+finalHtml);
		$(".list").html(finalHtml);

	});
	
};
listItem();