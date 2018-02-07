// var num = prompt("Give me a number");

function sqr(n) {
  if(!isNaN(parseInt(n))) {
    console.log(Math.pow(n, 2));
    return Math.pow(n, 2);
  } else {
    alert(NaN);
    var newNum = prompt('Give me a different number');
    sqr(newNum);
  }
}

// sqr(num);

// In a second function, capitalize the first letter of a string and 
// add a period (.) to the end of the string if it doesn't already end 
// with a period
 
var stringy = prompt("give me a sentence");
function takeAString(s) {
  s = s.toString();
  let newStr = s.charAt(0).toUpperCase() + s.slice(1);
  if(s.charAt(s.length - 1) === '.') {
      console.log(newStr);
  } else {
    newStr += '.';
    console.log(newStr);
  }
}


// takeAString(stringy);

function flipHalves(a) {
  var index = Math.round(a.length / 2); //represents the middle index of the str
  return a.substring(index) + a.slice(0, index);
}

// var report = flipHalves(stringy);
// console.log(report);

function isPalindrome(s) {
  var reversed = s.split('').reverse().join('');
  if(s === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(stringy));
