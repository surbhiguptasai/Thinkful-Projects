function mergeDataStreams(stream1, stream2) {
  var id;
for(i=0;i<stream1.length;i++){
  id=stream1[i].id;
  var myElement=stream1[i];
  stream2.forEach(function(element) {
  if(element.id==id)
  {
    Object.keys(element).forEach(function(key){
     
      if(element[key]!=id)
      {
     
        myElement[key]=element[key];
      }
    })
 
  }
    
});
  
stream1[i]= myElement;
  
}
  return stream1;
}

// data
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

var dataSource2 = [
    {
      id: '0',
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '1',
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '2',
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '3',
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests 
function testMergeDataStreams(stream1, stream2) {
  var expected = stream1.map(function(item) {
   return _.assign(
     _.clone(item), stream2.find(function(item2) {return item.id === item2.id;}));
  });
  
  var actual = mergeDataStreams(stream1, stream2);
  
  var passing = actual && expected.map(function(item) {
    return _.isEqual(
      item,
      actual.find(function(_item) {return _item.id === item.id; })
    );
  }).every(function(result) {return result;} );
  
  if (passing) {
    console.log('SUCCESS! mergeDataStreams works');
  }
  
  else {
    console.log('FAILURE! mergeDataStreams not working');
  }
}

testMergeDataStreams(dataSource1, dataSource2);