var temph3 = document.querySelector('.temp');
var userPrompt = prompt("Give me a scale and a temperature");

function convertTemp(scale, temp) {
  if(scale.toUpperCase() === 'CELSIUS') {
    //Celsius
    (temp - 32) × 5/9;
  } else {
    //Fahrenheit
    temp * (9/5 + 32);  
  }
}
