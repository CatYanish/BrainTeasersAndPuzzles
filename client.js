console.log('js sourced');

var input = [1,0,1,1,0,1]
var currentStreak = 0;
var maxAllTimeStreak = 0;
// this function will find the maximum number of consecutive
//ones in a binary array. It compares the current streak to the max
//streak ever. If the streak is broken,
//the counter resets but the maxStreak record donest reset
var findMaxConsecutiveOnes = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentStreak += 1;
      if (currentStreak > maxAllTimeStreak) {
        maxAllTimeStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }
  return maxAllTimeStreak
};
findMaxConsecutiveOnes(input);
console.log("currentStreak", maxAllTimeStreak);



//this function takes in a string and returns the middle character
//or middle two characters
function getMiddle(string){
  if(string.length % 2 !== 0) {
    return string.charAt(string.length/2);
  } else {
    var mean = string.length/2;
    var mid1 = string.charAt(mean-1);
    var mid2 = string.charAt((mean));
    return mid1+mid2;
  }
}

getMiddle('apple');


inputIQ = [1,2,3,7,9];

var indexOfException;

iqTest(inputIQ);

//this function takes in an array and checks if first number is even or odd
//then loops through all numbers to find one that doesn't match the even/odd-ness of the first
function iqTest(numbers){
  if (numbers[0] % 2 === 0) {
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        indexOfException = numbers.indexOf(numbers[i]);
        indexOfException += 1;
        console.log('this is the position of outlier in array', indexOfException);
      }
    }
  }
  else if (numbers[0] % 2 !== 0) {
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        indexOfException = numbers.indexOf(numbers[i]);
        indexOfException += 1;
        console.log('this is the position of outlier in array', indexOfException);
      }
    }
  }
}


var arr = [1,2,3,4,5];
var isPresent;

function findNumber(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      console.log("YES");
      isPresent = "YES";
    } else {
      console.log("NO");
      isPresent = "NO";
    }
  }
  return isPresent;
}

findNumber(arr, 5);

console.log(findNumber(arr, 5));

var numbersBetween = [];
var l = 2;
var r = 12;

var oddOnes = [];

function findNumbersBetween() {
  for (var j = l; j <= r; j++) {
    numbersBetween.push(j);
  }
  for (var i = 0; i < numbersBetween.length; i++) {
    if(numbersBetween[i] % 2 !== 0) {
      oddOnes.push(numbersBetween[i]);
    }
  }
  console.log(oddOnes);
}

findNumbersBetween(l, r);




function main() {
  var n = 4;
  var k = 4;
  a = [1,2,3,4,5]

  for(var i = 0; i < k; i++) {
    var moveNum = (a.shift(i));
    a.push(moveNum);
    var answer = a.join(' ');
  }
  console.log(answer);
}

main();

var commonLetters = [];
var a = [ 'a','b','c'];
var b = ['c','d','e'];

commonCharacters();

function commonCharacters () {
  console.log('commonCharacters called');
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        commonLetters.push(a[i], b[j]);
      }
    }
  }
  compare(a, b);
}


function compare(a, b) {
  console.log('compare called');
  var joined = a.concat(b);
  console.log(joined.length);
  var characterDiff = joined.length - commonLetters.length;
  console.log('commenLetters', commonLetters);
  console.log('difference', characterDiff);
}



//digital root function
// for input number, add up all digits of input numbers
// if the output of this operation is not a single-digit answer,
//repeat until output is a single digit number
var digitalRootNumber = 314;
var digitalRootOutput = 0;
var repeatInput;

//function checks if length of number is longer than one.
//if longer than one, separates number into an array, and for loop
//adds each index to the digitalRootOutput variable, which acts at the sum
function findDigitalRoot(n) {
  if(n.toString().length > 1){
    var arrayOfInts = n.toString().split("").map(Number)
    for (var i = 0; i < arrayOfInts.length; i++) {
      digitalRootOutput += arrayOfInts[i];
      console.log("this is output", digitalRootOutput);
    }
    checkLength(digitalRootOutput);
  } else if (n.toString().length === 1) {
    console.log("n.length is 1");
    digitalRootOutput = n;
  }
  return digitalRootOutput;
}



function checkLength(n) {
  console.log('this should be digitalrootoutput', n);
  if (n.toString().length > 1) {
    repeatInput = n;
    digitalRootOutput = 0;
    console.log('this is repeatInput', repeatInput);
    findDigitalRoot(repeatInput);
  }
}


findDigitalRoot(14159265);
