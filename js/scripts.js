var myDiv = document.querySelector('div');

myDiv.innerHTML = "<h5>You're dumb</h5>"

var radio = document.querySelector("#my-radio");

//START HERE
var h1 = document.createElement("h1");
var p = document.createElement('p');
var body = document.querySelector("body");

h1.innerHTML = "hello world";
p.textContent = "whoa!!!";

body.appendChild(h1);
body.appendChild(p);

//create a new element
var newDiv = document.createElement("div");
//add height and color to see it
newDiv.style.backgroundColor = "green";
newDiv.style.height = "120px";

body.insertBefore(newDiv, p);


myDiv.addEventListener('click', () => {
  body.classList.toggle('red-background');
  body.classList.replace("white-text", "purple-text");
});

body.classList.contains("white-text") //returns a bool

var newImg = document.createElement("img");
newImg.setAttribute("src", "https://s3.amazonaws.com/ffe-ugc/intlportal2/dev-temp/en-US/__59a48ed7599d0.jpg");

body.appendChild(newImg);










//
