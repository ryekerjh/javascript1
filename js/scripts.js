var userQueryType = prompt("Which type do you want to use?", "Please use either 'tag', 'class', 'id', 'selector', 'selectorAll'");

function queryDom(queryType, tagToQuery) {
  tagToQuery = 'body';
  switch(queryType) {
    case 'tag':
      console.log(document.getElementsByTagName('body')[0]);
      break;
    case 'class':
      console.log(document.getElementsByClassName('body')[0]);
      break;
    case 'id':  
      console.log(document.getElementById('body'));
      break;
    case 'selector':
      console.log(document.querySelector('body'))
  }
}
var myKey = document.querySelector('.keydownExample');

myKey.addEventListener('keydown', function(e) {
  if(e.keyCode === 13) {
    console.log('you hit enter!!');
  }
})

//1.  On your day6 branch, create a basic HTML mockup with a button, a div with some height and background color, and an h1 with some text
//Create event listeners for each:
// For the button, alert the user with a message when they click it.
// For the div, change the color of the background when their mouse goes into the div.
// For the h1, change the color of the text the user releases any key.
// Not Tough Enough? Try redirecting the user's browser to facebook when the click anywhere on the page.

var myDiv = document.querySelector('.my-div'),
mybutton = document.querySelector('button'),
myTitle = document.querySelector('.my-title');

myDiv.addEventListener('mouseenter', function(e) {
  //TODO: Write array for diff colors and select randomly
  e.target.style.backgroundColor = "green";
})














//
