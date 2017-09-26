console.log('js sourced');

var input = [1,0,1,1,0,1]

var consecutiveNum = 0;
var maxConsec = 0;


var findMaxConsecutiveOnes = function(nums) {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        consecutiveNum += 1;
        if (consecutiveNum > maxConsec) {
              maxConsec = consecutiveNum;
        }
      } else {
        consecutiveNum = 0;
      }
    }
    return maxConsec
};

findMaxConsecutiveOnes(input);

console.log("consecutiveNum", maxConsec);
