function doTrafficLights() {
  var activeLight = getActiveLight();
  // your code will replace this call
  // to `console.log()`
    if (activeLight === 'red') {
     turnRed();
  }
  else if (activeLight === 'green') {
     turnGreen();
  }
  else {
    turnYellow();
  }
  
  


}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(function() {
  handleClicks();
})