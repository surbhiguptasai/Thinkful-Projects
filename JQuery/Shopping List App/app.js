
function addItem () {

    $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    var newItem=($("#shopping-list-entry").val());
    var existingList= $(".shopping-list").html();
    //alert("existingList"+existingList);
    var newElement='<li><span class="shopping-item">'+newItem+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label"> delete</span></button></div></li>';
    var newHTML=existingList+newElement;
    $(".shopping-list").html(newHTML);
    });

   $('ul').on('click', '.shopping-item-toggle',function(event) {
    	event.preventDefault();
    	
    	$(event.currentTarget).closest( "li" ).find('span:first').toggleClass("shopping-item__checked");
    });

   $('ul').on('click', '.shopping-item-delete', function(event) {
    this.closest( "li" ).remove();
   });
}


addItem();