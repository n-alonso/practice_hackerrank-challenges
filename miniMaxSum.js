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
    const minValue = sum - array[array.length - 1]; // The minimum value will be the sum of all numbers minus the biggest one (now sorted at the end)
    const maxValue = sum - array[0]; // The maximum value will be the sum of all numbers minus the smallest one (now sorted at the beginning)
    console.log(minValue, maxValue);
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
    
    // Sum all 4 remaining elements of each array
    const minValue = minArray.reduce((previous, current) => previous + current);
    const maxValue = maxArray.reduce((previous, current) => previous + current);
    
    // Log both results in the same line
    console.log(minValue, maxValue);
}

/*
Obtained "Congratulations! You solved this challenge." result in HackerRank.
*/
