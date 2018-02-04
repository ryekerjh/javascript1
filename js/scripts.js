/*
Accept 2 arguments (age of person now, amount of product per day).
Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.
Alert the answer in this format: "You will need x to last you until you're y.
*/

function calcLifetimeSupply(age, perDay) {
  let testArr = [age, perDay];
  if(testForInts(testArr)) {
    var lifeTime = (80 - age) * (365 * perDay);
    alert(`you will need ${lifeTime} ${supplyOf} to last until you're 80.`);
  } else {
    var age = prompt("How old are you?");
    var daily = prompt("How much do you use per day?");
    lifeTime = calcLifetimeSupply(age, daily);
  }
}

var supplyOf = prompt("What do you want a lifetime supply of?", 'hamburgers');
var age = prompt("How old are you?");
var daily = prompt("How much do you use per day?");
var lifeTime;

// calcLifetimeSupply(age, daily);

//Test my inputs
function testForInts(args) {
  var passed = true;
  for(let i = 0; i < args.length; i++) {
    if(isNaN(parseInt(args[i]))) {
      passed = false;
    } 
  }
  return passed;
}



// BONUS: write it to accept a dynamic max age.

function calcLifetimeSupplyWithMaxAge(age, perDay, ageOfDeath) {
  console.log('in right fn');
  let testArr = [age, perDay, ageOfDeath]
  if(testForInts(testArr)) {
    var lifeTime = (ageOfDeath - age) * (365 * perDay);
    alert(`You will need ${lifeTime} ${supplyOf} to last until you're ${ageOfDeath}.`);
  } else {
    var age = prompt("How old are you?");
    var daily = prompt("How much do you use per day?");
    var ageOfDeath = prompt("how old you gonna life to?");
    lifeTime = calcLifetimeSupplyWithMaxAge(age, daily, ageOfDeath);
  }
}

var death = prompt("How old will you be doe?");

calcLifetimeSupplyWithMaxAge(age, daily, death);
