function textNormalizer(text) {
  return text.toLowerCase().trim();
  
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests

function testTextNormalizer() {
  var text = "   let's GO SURFING NOW everyone is learning how   ";
  var expected = "let's go surfing now everyone is learning how";
  if (textNormalizer(text) === expected) {
    console.log('SUCCESS: `textNormalizer` is working');
  }
  else {
    console.log('FAILURE: `textNormalizer` is not working');
  }
}

testTextNormalizer();