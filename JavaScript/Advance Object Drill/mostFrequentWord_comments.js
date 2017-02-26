function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}
  
function mostFrequentWord(text) {
  //variable word stores the text in lowercase,without any  ,!.";:-  from getTokens ...
  //like we have some text like this.."Objects: are a data! structure , used to ;hold structure key/value pairs."
  // then we'll get only words like below 11 words:
  // ["a", "are", "data", "hold", "key/value", "objects", "pairs", "structure", "to", "used"]
  var words = getTokens(text);
 //creating a variable wordFrequencies for storing object ..
  var wordFrequencies = {};
  //checking every word in wordFrequencies if word already exist then add +1 otherwise make the count 1..
  for (var i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1;
    }
  }
  //after the above loop completed this will how the wordFrequencies populated..
  //  a: 1,
  // are: 1,
  // data: 1,
  // hold: 1,
  // key/value: 1,
  // objects: 1,
  // pairs: 1,
  // structure: 2,
  // to: 1,
  // undefined: 1,
  // used: 1


  // initialise the currentMaxKey to the first element of wordFrequencies ..
  //eg- a will stored in current max key.. 
  var currentMaxKey = Object.keys(wordFrequencies)[0];
  //initialise currentMaxCount to the first element of wordFrequencies
  //eg- 2  is the value for a..
  var currentMaxCount = wordFrequencies[currentMaxKey];
  //checking wordFrequencies of every word with currentMaxCount if its greater then its currentMaxKey..
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  //after the above loop currentMaxKey will be structure: 2
  return currentMaxKey;
}

