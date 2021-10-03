/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers. 
 */

/*
REFACTORED VERSION
*/
function miniMaxSum(arr) {
    const array = arr.sort(); // Sort the array to ensure the lowest number is at the beginning and the highest at the end
    const sum = array.reduce((previous, current) => previous + current); // Find the sum of all elements of the array
    const minSum = sum - array[array.length - 1]; // The minimum sum will be the sum of all minus the biggest number (now sorted at the end)
    const maxSum = sum - array[0]; // The maximum sum will be the sum of all minus the smallest number (now sorted at the beginning)
    console.log(minSum, maxSum);
}

/*
ORIGINAL VERSION
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
