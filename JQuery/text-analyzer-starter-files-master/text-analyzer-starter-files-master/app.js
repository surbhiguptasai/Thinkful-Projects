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

var totalLength = message.split("").length;
  var averageLen= (totalLength / message.length).toFixed(2);

$('.avgWLen').append(averageLen.length);

    })
 




  }
  textAnalyze();