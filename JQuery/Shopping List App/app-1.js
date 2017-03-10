var state = {
  items: []
};
var listItemTemplate = (
  '<li>' +
    '<span class="shopping-item"></span>' +
    '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>'
);

$(function() {

var checkedClass='.shopping-item__checked';
var checkedClassName='shopping-item__checked';
var shoppinglistElement=$(".shopping-list");
var shoppingItemClass='.shopping-item';
var shoppingListFormId="#js-shopping-list-form";
var shoppingListEntryId="#shopping-list-entry";
var shoppingItemDelete='.shopping-item-delete';
var shoppingItemToggle='.shopping-item-toggle';

addExistingElementsToState(state,checkedClassName);
renderList(state, shoppinglistElement,shoppingItemClass,checkedClassName);
addItem(state,shoppingListFormId,shoppingListEntryId,shoppinglistElement,shoppingItemClass);
deleteItem(state, shoppinglistElement,shoppingItemClass,checkedClassName,shoppingItemDelete);
checkUncheck(state,shoppinglistElement,checkedClassName,shoppingItemToggle);
});

function checkUncheck(state,shoppinglistElement,checkedClassName,shoppingItemToggle,shoppingItemClass){
$('ul').on('click','.shopping-item-toggle',function(event)
{
  event.preventDefault();
var isElementChecked=$(this).closest('li').find('span:first').hasClass('shopping-item__checked');
var elementName =$(this).closest('li').find('span:first').text();

     if(isElementChecked)
        isElementChecked=false;
       else
         isElementChecked=true;
       
       for(i=0;i<state.items.length;i++)
    {
if(elementName===state.items[i].name)
{
state.items[i].checked=isElementChecked;
}
}
renderList(state, shoppinglistElement,shoppingItemClass,checkedClassName);
 });
}

function deleteItem(state, shoppinglistElement,shoppingItemClass,checkedClassName,shoppingItemDelete){
  $('ul').on('click',shoppingItemDelete,function(event) {
    event.preventDefault();
    itemName=$(this).closest('li').find('span:first').text();
    for(i=0;i<state.items.length;i++)
    {
        var itemNameToMatch=state.items[i].name;
        if(itemName===itemNameToMatch)
            break;
    }
    
    state.items.splice(i, 1);
    
    renderList(state, shoppinglistElement,shoppingItemClass,checkedClassName);
  });
}

function addItem(state,shoppingListFormId,shoppingListEntryId,shoppinglistElement,shoppingItemClass){
$(shoppingListFormId).submit(function(event) {
event.preventDefault();
var newItemName=($(shoppingListEntryId).val());
var item={
        name: newItemName,
        checked: false
       }
state.items.push(item);

renderList(state, shoppinglistElement,shoppingItemClass);
});
}

function renderList(state, listElement,shoppingItemClass,checkedClassName) {
  var itemsHTML = state.items.map(
    function(item, index) {
      return renderItem(item, index, listItemTemplate,shoppingItemClass,checkedClassName);
  });
  listElement.html(itemsHTML);
}

function renderItem(item, itemId, itemTemplate,shoppingItemClass,checkedClassName) {
  var element = $(itemTemplate);

  element.find('.shopping-item').text(item.name);
  if (item.checked) {
    element.find('.shopping-item').addClass(checkedClassName);
  }

  return element;
}


function addExistingElementsToState (state,checkedClassName) {

  $('ul li').each(function() {
     var elementName=$(this).find('span:first').text();
     var isElementChecked=$(this).closest('li').find('span:first').hasClass(checkedClassName);
     var item={
        name: elementName,
        checked: isElementChecked
       }

    state.items.push(item);
   })
 
}














