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
