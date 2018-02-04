/*
Accept 2 arguments (age of person now, amount of product per day).
Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.
Alert the answer in this format: "You will need x to last you until you're y.
*/

function calcLifetimeSupply(age, perDay) {
  return (80 - age) * (365 * perDay);
}

var supplyOf = prompt("What do you want a lifetime supply of?", 'hamburgers')
var age = prompt("How old are you?");
var daily = prompt("How much do you use per day?");
var lifeTime;
alert(`you will need ${lifeTime} ${supplyOf} to last until you're 80.`);

testForInts(age, daily);

//Test my inputs
function testForInts(age, daily) {
  if(isNaN(parseInt(age)) && isNaN(parseInt(daily))) {
    age = prompt("no, really, whats your age?");
    daily = prompt("No, how many in numbers?");
    lifeTime = calcLifetimeSupply(age, daily);
  } else if(isNaN(parseInt(daily)) && !isNaN(parseInt(age))) {
    daily = prompt("No, how many in numbers?");
    lifeTime = calcLifetimeSupply(age, daily);
  } else if(!isNaN(parseInt(daily)) && isNaN(parseInt(age))) {
    age = prompt("no, really, whats your age?");
    lifeTime = calcLifetimeSupply(age, daily);
  } else {
    lifeTime = calcLifetimeSupply(age, daily);
  }
}



// BONUS: write it to accept a dynamic max age.

function calcLifetimeSupplyWithMaxAge(age, perDay, ageOfDeath) {
  parseInt(age);
  parseInt(perDay);
  parseInt(ageOfDeath)
  if(!isNaN(age) && !isNaN(perDay) && !isNaN(ageOfDeath)) {
    return (ageOfDeath - age) * (365 * perDay);
  } else {
    var newAge = prompt('How old are you?');
    var newPerDay = prompt("How much do you use per day?");
    calcLifetimeSupplyWithMaxAge(newAge, newPerDay);
  }
}
// 
// var supplyOf = prompt("What do you want a lifetime supply of?", 'hamburgers')
// var age = prompt("How old are you?");
// var daily = prompt("How much do you use per day?");
// var death = prompt("How old will you be when you die?");
// 
// var lifeTime = calcLifetimeSupplyWithMaxAge(age, daily, death);
// alert(`you will need ${lifeTime} ${supplyOf} to last until you're 80.`);
