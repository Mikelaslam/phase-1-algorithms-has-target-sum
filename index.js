function hasTargetSum(array, target) {
  
    {
        for (let i = 0; i < array.length; i++) {
        // n steps (depending on the length of the input array)
        const complement = target - array[i];
        for (let j = i + 1; j < array.length; j++) {
          // n * n steps (nested loop!)
          if (array[j] === complement) return true;
        }
      }
      // 1
      return false;
    }
    
  }
  /* Write your algorithm here
1. Initialize a function called has targetSum
2. Define a variable comliment = target- array[i];
3. By implementing if and if else we achieve our target

/* 
  Write the Big O time complexity of your function here
Check if the array passed have two numbers that can add up to the target sum
If the item passed has two numbers adding up to the target sum, return true
If the array passed do not have numbers adding up to the target sum, return false
/* 
  Add your pseudocode here
Declare a function hasTargetSum that receives 2 arguments; an array of integers and a target sum
Define a variable compliment which equals (target- array lenght)
Iterate over each item in the array
If the array has a target sum it will return true, if it doesn't it will return false.
/*
/*Add written explanation of your solution here
After initializing the functionan declaring the variables, we go ahead and implement the if, else and
 else if functions to achieve the target/*

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
