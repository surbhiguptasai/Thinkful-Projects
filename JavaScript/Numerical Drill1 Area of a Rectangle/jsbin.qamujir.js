function computeArea(width, height) {
  return width* height;
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests

function testComputeArea() {
  var width = 3;
  var height = 4;
  var expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  }
  else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

testComputeArea();