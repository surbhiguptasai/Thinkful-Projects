function quizApp () {
//alert("hello");
var state={quesCounter:-1};
var questionBank = [
  {
    Question: '1.Bernard',
    Options: ['a','b','c','d'],
    Ans: 'a'
  },
  {
   Question: '2.Bernard1',
    Options: ['a','b','c','d'],
    Ans: 'b'
  },
  {
  Question: '3.Bernard2',
    Options:['a','b','c','d'],
    Ans: 'c'
  },
  {
     Question: '4.Bernard3',
    Options: ['a','b','c','d'],
    Ans: 'd'
  }
];
$(".questionform").click(function(event) {

  state.quesCounter=state.quesCounter+1;

var obj=questionBank[state.quesCounter];
var opt=obj.Options;
//alert("opt"+obj.Options);
var questionhtml="<span>"+obj.Question+"</span><br>";
var optionhtml="";
for(var i = 0, length1 = opt.length; i < length1; i++){
   if (i==0){
    optionhtml+="<input type='radio' name='ans' checked>"+opt[0]+"<br>";
   }
   else{
optionhtml+="<input type='radio' name='ans'>"+opt[i]+"<br>";
}
}
//alert("opthtml"+optionhtml);
var innerHtml=questionhtml+optionhtml;
$('.questionList').html(innerHtml);
});
}

quizApp();

