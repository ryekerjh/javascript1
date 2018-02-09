// var arr = ["thingOne", 22, true, {}, []];
// // console.log(arr[0], arr[3]);
// 
// var myArr = ["Stay", 21, true, 2004];
// // console.log(myArr, myArr[4]);
// 
// // console.log(typeof(myArr));
// // console.log(Array.isArray(myArr));
// // var bestTeacher = prompt('Who is the best teacher?', 'Damon');
// // myArr.unshift(bestTeacher);
// // console.log(myArr, 'BEFORE!!!');
// var removedItem = myArr.slice(0,2);
// // myArr.shift();
// console.log(removedItem, myArr);
// var userName = prompt('Give me your user name');
// var firstName = prompt('Give me your first name');
// var lastName = prompt('Give me your last name');
// var favColor = prompt("What is your favorite color?", 
// "blue or yellow");
// // favColor = favColor.toLowerCase();
// switch(favColor.toLowerCase()) {
//   case 'blue':
// 
// 
// //ES5- STring interpolation
//     alert("Hey there, " + firstName + " it looks like you love " + favColor + "and your last name is " + lastName + ".");
// 
// //ES6 String interpolation
//     alert(`Hey there, ${firstName} it looks like you love ${favColor} and your last name is ${lastName}.`);
// 
// 
// 
// 
// 
// 
// 
// 
//     break;
//   case 'yellow':  
//     alert("You are so yellow....");
//     break;
//   default:
//     alert('Please answer with a valid color.');
// }
// 
// // 
// // var arr = [1, 2, 3, 4, 5];
// // 
// // if(arr.indexOf(6) !== -1) {
// //   //Do some logic here
// // } else {
// //   //Do some err checking here
// // }
// 
// //Step 1. 
// 
// var numbaOne = ["Star Wars VI", "Luke Skywalker"];
// var numbaTwo = ["Stay", "Henry Letham"];
// var numbaThree = ["Indiana Jones and the Temple of Doom", "Indiana Jones"];
// var numbaFour = ["Blade Runner", "Rick Deckard"];
// var numbaFive = ["The Godfather", "Vito Corleone"];
// 
// //step 2:
// var favMovies = [];
// favMovies.push(numbaOne, numbaTwo, numbaThree, numbaFour, numbaFive);
// console.log(favMovies);
// 
// 
// 
// // step 3
// // fav and least fav with console.log
// var favAndLeastfav = [];
// favAndLeastfav.push(numbaOne, numbaTwo);
// 
// 
// 
// 
// 
// 
// //step 4 Check lenght of favorites with alert
// // alert(favAndLeastfav);
// //WHILE LOOP
// // let i = 0;
// 
// while (i < favMovies.length) {
//   // console.log(favMovies[i]);
//   i++;
// }
// 
// 
// //FOR LOOP
// for(let i = 0; i < favMovies.length; i++) {
//   if(favMovies[i][0].toUpperCase() === "star wars vi") {
//     alert(`${favMovies[i][0]} is my favorite movie with ${favMovies[i][1]}.`);
//   }
// }
// 
// 
// //DO WHILE
// var i = 0;
// 
// do {
//   console.log(favMovies[i]);
//   i++;
// } while(i < favMovies.length);











//








var todo = [["eat", new Date("2/13/2018")], ["sleep", new Date("2/9/2018")]];

let i = 0;
while(i < todo.length) {
  var oneDay = 24*60*60*1000;
  var now = new Date().getTime();
  var todoMs = todo[i][1].getTime();
  var difference = Math.floor((todoMs - now)/oneDay);  
    todo[i].unshift(difference);
  i++;
}


todo.sort();

console.log(todo[todo.length - 1]);








// //
