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




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


function getTokens(rawString) {
  // returns an alphabetically sorted list of words, removing punctuation
  // characters
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}


// `getTokens` returns an alphabetically sorted list of words

(function testMostFrequentWord() {
 var spaceOddityText = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you \"Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do\"';
  
 var expected = 'major';
 var actual = mostFrequentWord(getTokens(spaceOddityText));
 if (expected === actual) {
   console.log('SUCCESS: `mostFrequentWord` is working');
 }
 else {
   console.log('FAILURE: `mostFrequentWord` is not working');
 }
})();s