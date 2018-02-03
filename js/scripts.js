// //Anonymous Function with 0 arguments
// 
// // function() {
// //   console.log('You fired your anonymous function');
// // };
// // 
// 
// // //Anonymous fn that takes 2 args and is assigned to a var...
// // var userLogin = function(username, password) {
// //   //compare correct password for this user with the password they give you
// // };
// var a = "cheese";
// 
// myMagicFunction(a, "STar Trek");
// 
// //Named function that takes 2 arguments
// function myMagicFunction(argument1, argument2) {
//   console.log(`${argument1} is better than ${argument2}`);
// };
// 
// function callMyself(number) {
//   if(number >= 0) {
//     number--;
//     console.log(number);
//   } else {
//     return
//   }
// }
// 
// (number) => {
//   if(number >= 0) {
//     number--;
//     console.log(number);
//   } else {
//     return
//   }
// }
// function givesMeBestNumber(number) {
//   if(number === 42) {
//     return `${number} is the best number!`;
//   } else {
//     alert(`${number} sucks!!!`);
//   }
// }
// 
// 
// 
// 
// let message = givesMeBestNumber(42);
// 
// // alert(message);
// 
// 
// 
// 

// const dogAge = prompt("How old is dat dog doe?", '3');

function calcDogYears(age) {
  parseInt(age);
  if(isNaN(age)) {
    //If the user gives me a non-number...
    calcDogYears(prompt('Nah, for real...NUMBER', '10'));
  } else {
    alert(age *= 7);//this is this age = age * 7
  }
}

// calcDogYears();















// //
