// var myDiv = document.querySelector('div');
// // 
// // myDiv.innerHTML = "<h5>You're dumb</h5>"
// // 
// // var radio = document.querySelector("#my-radio");
// // 
// // //START HERE
// // var h1 = document.createElement("h1");
// // var p = document.createElement('p');
// // var body = document.querySelector("body");
// // 
// // h1.innerHTML = "hello world";
// // p.textContent = "whoa!!!";
// // 
// // body.appendChild(h1);
// // body.appendChild(p);
// // 
// // //create a new element
// // var newDiv = document.createElement("div");
// // //add height and color to see it
// // newDiv.style.backgroundColor = "green";
// // newDiv.style.height = "120px";
// // 
// // body.insertBefore(newDiv, p);
// // 
// // 
// // myDiv.addEventListener('click', () => {
// //   body.classList.toggle('red-background');
// //   body.classList.replace("white-text", "purple-text");
// // });
// // 
// // body.classList.contains("white-text") //returns a bool
// // 
// // var newImg = document.createElement("img");
// // newImg.setAttribute("src", "https://s3.amazonaws.com/ffe-ugc/intlportal2/dev-temp/en-US/__59a48ed7599d0.jpg");
// // 
// // body.appendChild(newImg);
// // 
// // 
// // for (let i = 0; i <= 100; i++) {
// //   if(i % 3 === 0 && i % 5 === 0) {
// //     console.log('FizzBuzz');
// //   } else if(i % 3 === 0) {
// //     console.log('Fizz');
// //   } else if(i % 5 === 0) {
// //     console.log('Buzz');
// //   } else {
// //   console.log(i);
// //   }
// // }
// 
// const orderForm = document.forms.order;
// 
// var submitBtn = orderForm.submit;
// 
// // document.addEventListener('submit', function(e) {
// //   e.preventDefault();
// //   if(orderForm.quantity.value == null) {
// // 
// //   }
// //   //validation, verification
// // });
// //What's THIS?!??!
// var checkScope = function(product) {
//   alert(`Hi, ${this.name}, we have your ${product}, you fattie!!`);
// }
// 
// 
// var user = {
//   name: 'Ryeker',
//   password: 'kewlkidd08',
//   lastLogin: new Date(),
//   // a: checkScope //Refers to fn checkScope.
// };
// 
// 
// data = [
//   {
//   name : 'Soap',
//   price: 10.99,
//   notes: "Great for getting clean.",
//   imageUrl: "https://www.product.com/234543"
// }, {
//   name : 'Soap',
//   price: 10.99,
//   notes: "Great for getting clean."
// }, {
//   name : 'Soap',
//   price: 10.99,
//   notes: "Great for getting clean."
// }, {
//   name : 'Soap',
//   price: 10.99,
//   notes: "Great for getting clean."
// }, {
//   name : 'Soap',
//   price: 10.99,
//   notes: "Great for getting clean."
// }, {
//   name : 'Soap',
//   price: 10.99,
//   notes: "Great for getting clean."
// }]


//OBJECTS
//Dot Notation
// console.log(admin.name);
//Bracket Notiation
// console.log(admin['password']);

// checkScope.call(admin, 'margarin');

// // user.a();
// 
// const me = 'Ryeker';
// 
// function logMe() {
//   const me = 'Jonathon';
//   console.log(me);
// }
// 
// // console.log(me);
// // logMe();
// 
// var myString = new String('Hello World!');
// 
// console.log(Object.getPrototypeOf(myString));
var newUserForm = document.forms.newUser;
newUserForm.addEventListener("submit", function(e) {
  login(e);
});

function User(a, b) {
  this.username = a;
  this.password = b;
}

function login(e) {
  e.preventDefault();
  var username = document.querySelector('.username').value;
  var password = newUserForm.password.value;
  var newUser = new User(username, password);
  
  console.log(newUser);
}



var calcMileage = function(miles, gallons) {
 return miles / gallons;
}

function Vehicle(wheels, type, motor, color, miles, gallons) {
  this.wheels = wheels;
  this.type = type;
  this.motor = motor;
  this.color = color;
  this.mileage = calcMileage(miles, gallons);
};

function Engine(numOfCyls, injectionSystem, vrooms, horsees) {
  this.numOfCyls = numOfCyls;
  this.injectionSystem = injectionSystem;
  this.vrooms = vrooms;
  this.hp = horsees;
};

var myEngine = new Engine(2, 'crap', 0.00, "????");

var saturn = new Vehicle(4, "car", myEngine, "faded grey", 5, 4);
console.log(saturn.mileage);













// //
