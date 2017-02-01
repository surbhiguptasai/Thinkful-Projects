function mostFrequentWord(words) {
  //console.log(words)
  var wordBin=[{name:words[0],
                count:1}];
  
  //words=["ravi","Surbhi","ravi"];
  for(i=1;i<words.length;i++)
  {
//     console.log("i is"+ i);
//     console.log("words is"+ words[i]);
    counter =1;
    alreadyExists=false;
    wordBin.forEach(function(currentWord) {
     if(currentWord.name===words[i])
     {
       currentWord.count=currentWord.count+1;
       alreadyExists=true;
       
     }
    });
  
    if(!alreadyExists)
    {
    var wordObject={
      name:words[i],
      count:counter
    };
    wordBin.push(wordObject);
    } 
    
  }
  wordBin=wordBin.sort(function(a, b){return b.count-a.count});
  maxCount=wordBin[0].count;
  console.log("Max count is"+maxCount)
  var word=[];
   for(j=0;j<wordBin.length;j++)
  {
    if(wordBin[j].count==maxCount)
    word.push(wordBin[j].name);
    
  }
  word.sort();
  console.log(word[0]);
  console.log("Max Occurence Word is        "+word[0]); 
  return word[0]
}