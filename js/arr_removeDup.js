var removeDuplicates = function(nums) {
    if (nums.length === 0) {
	  return 0;
	}
  
	let slow = 0;
	let fast = 1;
  
	while (fast < nums.length) {
	  if (nums[slow] !== nums[fast]) {
		slow++;
		nums[slow] = nums[fast];
	  }
	  fast++;
	}
  
	// Replace extra elements with underscores
	for (let i = slow + 1; i < nums.length; i++) {
	  nums[i] = "_";
	}
  
	let k = slow +1 
	return nums
};
  

// Example usage
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);


console.log(k); // Output: [0, 1, 2, 3, 4, _, _, _, _, _] (where _ represents the extra elements)
