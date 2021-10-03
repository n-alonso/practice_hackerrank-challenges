/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers. 
 */

function miniMaxSum(arr) {
    // Write your code here
    // These will be the numbers to exclude from the array
    let minForeigner;
    let maxForeigner;
    
    // These will help me find the smallest and biggest numbers to exclude
    arr.forEach(num => {
        if ((num > minForeigner) || (minForeigner === undefined)) {
            minForeigner = num;
        }
    });
    arr.forEach(num => {
      if ((num < maxForeigner) || (maxForeigner === undefined)) {
        maxForeigner = num;
      }
    });
    
    // Find the indexes of the smallest and biggest number
    const minForeignerIndex = arr.findIndex(num => num === minForeigner);
    const maxForeignerIndex = arr.findIndex(num => num === maxForeigner);
    
    // Create a copy of the array for each operation and substract the smallest or biggest number
    const minArray = arr.slice();
    minArray.splice(minForeignerIndex, 1);
    const maxArray = arr.slice();
    maxArray.splice(maxForeignerIndex, 1);
    
    // Add all 4 remaining elements of each array
    const minSum = minArray.reduce((previous, current) => previous + current);
    const maxSum = maxArray.reduce((previous, current) => previous + current);
    
    // Log both results in the same line
    console.log(minSum, maxSum);
}

/*
Obtained "Congratulations! You solved this challenge." result in HackerRank.
*/