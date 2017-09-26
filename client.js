console.log('js sourced');

var input = [1,1,0,1,1,1];

var consecutiveNum = 0;

// findMaxConsecutiveOnes(input);

var findMaxConsecutiveOnes = function(nums) {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        consecutiveNum += 1;
        console.log(consecutiveNum);
      } else {
        consecutiveNum = 0;
      }
    }
    return consecutiveNum
};

findMaxConsecutiveOnes(input);

console.log("consecutiveNum", consecutiveNum);
