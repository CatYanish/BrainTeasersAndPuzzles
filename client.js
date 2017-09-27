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
findmaxAllTimeStreakutiveOnes(input);
console.log("currentStreak", maxAllTimeStreak);



//this function takes in a string and returns the middle character
//or middle two characters
function getMiddle(s){
  if(s.length % 2 !== 0) {
    return s.charAt(s.length/2);
  } else {
    var mean = s.length/2;
    var mid1 = s.charAt(mean-1);
    var mid2 = s.charAt((mean));
    return mid1+mid2;
  }
}

getMiddle('apple');
