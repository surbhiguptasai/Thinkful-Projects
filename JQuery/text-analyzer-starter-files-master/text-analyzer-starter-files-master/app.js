function textAnalyze(){
  
     $('#button1').click(function(){
    
  
   $('dl').removeClass('hidden');
  
   var message = $('textarea#user-text').val();
   // alert("message"+message);
     var countWords=message.split(" ").length;
      $('.wcount').append(countWords);



      var inputArray= message.split(" ");


      var outputArray = [];
    
    for (var i = 0; i < inputArray.length; i++)
    {
        if ((jQuery.inArray(inputArray[i], outputArray)) == -1)
        {
            outputArray.push(inputArray[i]);
        }
    }
    $('.uwcount').append(outputArray.length);

var totalCharLength =  message.replace(/\s+/g, '').length;
  var averageLen= (totalCharLength / countWords);
alert("total char length is:"+totalCharLength);
$('.avgWLen').append(averageLen);

 var countSentence=message.split(".").length;
 countSentence=countSentence-1;
 alert("message"+countSentence);
 var averageSenLen= (totalCharLength / countSentence);
      $('.wSen').append(averageSenLen);


    })
 




  }
  textAnalyze();