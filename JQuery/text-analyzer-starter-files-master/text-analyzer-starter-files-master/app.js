function textAnalyze(){
  $('#button1').click(function(){
    $('dl').removeClass('hidden');
  
      var message = $('textarea#user-text').val().trim();
      message=message.replace(".","");
       message=message.replace(",","");
      var countWords=message.split(" ").length;
    $('.wcount').text(countWords);

      var inputArray= message.split(" ");
      var outputArray = [];
    for (var i = 0; i < inputArray.length; i++)
    {
        if ((jQuery.inArray(inputArray[i], outputArray)) == -1)
        {
            outputArray.push(inputArray[i]);
        }
    }
    $('.uwcount').text(outputArray.length);

      var totalCharLength =  message.replace(/\s+/g,'').length;
      var averageLen= (totalCharLength / countWords);
            // alert("total char length is:"+totalCharLength);
    $('.avgWLen').text(averageLen);
    
    })

  }
  textAnalyze();