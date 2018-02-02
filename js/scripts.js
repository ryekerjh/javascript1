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
// var argument1 = "cheese";
// //Named function that takes 2 arguments
// function myMagicFunction(argument1, argument2) {
//   console.log(`${argument1} is better than ${argument2}`);
// };
// 
// myMagicFunction(argument1, "STar Trek");



//TAKEHOME

//STEP 1
var todos = [];
var todoOne = prompt("what do you want to do this weekend?");
var todoTwo = prompt("What else do you want to do this weekend?");
var todoThree = prompt("What is a third thing you want to do this weekend?");

todos.push(todoOne, todoTwo, todoThree);

//STEP 2
var todosWithDays = [];
for(let i = 0; i < todos.length; i++) {
  var due = prompt(`What day do you want to get ${todos[i]} done?`, 'Please use this format: day/month/year');
  due = new Date(due);
  todosWithDays.push([todos[i], due]);
}

//STEP 3
var sortedWithIndices = [];
let j = 0;
var now = new Date().getTime();//Converts JS Date object to ms
while (j < todosWithDays.length) {
  let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var diffDays = Math.round((todosWithDays[j][1].getTime() - now)/oneDay);
  sortedWithIndices.push([diffDays, todosWithDays[j]]);
  j++
}

sortedWithIndices.sort();

console.log(sortedWithIndices[sortedWithIndices.length - 1][1], ' will take the longest');

//STEP 4
let n = 0;

do {
  if(n != sortedWithIndices.length - 1) {
    sortedWithIndices[n][1].push("done");
  }
  n++
} while(n < sortedWithIndices.length);


let alertArr = [];
for(let i = 0; i < sortedWithIndices.length; i++) {
  if(sortedWithIndices[i][1].indexOf('done')s) {
    alertArr.push(sortedWithIndices[i][1]);
  }
}


//STep 5
alert(alertArr);
