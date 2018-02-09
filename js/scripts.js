// var userQueryType = prompt("Which type do you want to use?", "Please use either 'tag', 'class', 'id', 'selector', 'selectorAll'");
// 
// function queryDom(queryType, tagToQuery) {
//   tagToQuery = 'body';
//   switch(queryType) {
//     case 'tag':
//       console.log(document.getElementsByTagName('body')[0]);
//       break;
//     case 'class':
//       console.log(document.getElementsByClassName('body')[0]);
//       break;
//     case 'id':  
//       console.log(document.getElementById('body'));
//       break;
//     case 'selector':
//       console.log(document.querySelector('body'))
//   }
// }
// var myKey = document.querySelector('.keydownExample');
// 
// myKey.addEventListener('keydown', function(e) {
//   if(e.keyCode === 13) {
//     console.log('you hit enter!!');
//   }
// })

//1.  On your day6 branch, create a basic HTML mockup with a button, a div with some height and background color, and an h1 with some text
//Create event listeners for each:

var myDiv = document.querySelector('.my-div'),
myButton = document.querySelector('button'),
myTitle = document.querySelector('.my-title');

// For the button, alert the user with a message when they click it.
myButton.addEventListener("click", (e) => {
  alert("How darest thou?!");
});
// 
// // For the div, change the color of the background when their mouse goes into the div.
color = ["blue", "green", "black", "purple", "yellow"];
// 
myDiv.addEventListener('mouseenter', function(e) {
  myDiv.style.backgroundColor = randomColor(0, color.length - 1);
});
 
function randomColor(min, max) {
  var num = Math.round(Math.random() * (max - min) + min);
  return color[num];
};

// For the h1, change the color of the text the user releases any key.
var myInput = document.querySelector(".keydownExample");
myInput.addEventListener("keydown", function(e) {
  myTitle.style.color = randomColor(0, color.length - 1);
});









// Not Tough Enough? Try redirecting the user's browser to facebook when the click anywhere on the page.

// var body = document.querySelector("body");

// body.addEventListener("click", (e) => {
//   window.location = "https://www.facebook.com";
//   // console.log(e.target);
// })
// 
// 
// 









//
