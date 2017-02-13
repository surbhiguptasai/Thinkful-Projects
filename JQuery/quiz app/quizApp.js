
function addItem () {
	var state={
		counter:0,
		score:0
	};
var dataSource1 = [
    {
      id: '0',
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: '1',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: '2',
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: '3',
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

alert("state.counter is "+state.counter);

var obj=dataSource1[state.counter];
innerhtml="<li>"+obj.firstName+"<li>";
 $(".questionList").html(innerhtml);

$(".questionform").click(function(event) {

alert("Hello");
state.counter=state.counter+1;
obj=dataSource1[state.counter];
innerhtml="<li>"+obj.firstName+"<li>";
 $(".questionList").html(innerhtml);
 state.score=state.score+1;
 alert("state.score is "+state.score)
 $(".score").html("<p>score is :"+state.score+"</p>");

	/* Act on the event */
});

	
	/* Act on the event */
	




}
addItem();