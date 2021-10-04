/*
 Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
 Print the decimal value of each fraction on a new line with 6 places after the decimal.
 */

function plusMinus(arr) {
    // Write your code here
    // Variables to serve as counters for how many possitive, negative, or 'zeroes' are in the array
    let possitives = 0;
    let negatives = 0;
    let zeroes = 0;
    // Variable to know how many numbers there are in the array
    const total = arr.length;
    
    // Iterator to count the total number of possitives, negatives, and 'zeroes' in the array
    arr.forEach(num => {
        if (num > 0) {
            possitives++;
        } else if (num < 0) {
            negatives++;
        } else if (num === 0) {
            zeroes++;
        }
    })
    
    // Variables to calculate the percentage/rate of possitives/negatives/'zeroes' present in the array (with 6 decimals)
    const possitiveRate = (possitives / total).toFixed(6);
    const negativeRate = (negatives / total).toFixed(6);
    const zeroRate = (zeroes / total).toFixed(6);
    // Results logged in 3 different lines
    console.log(parseFloat(possitiveRate)); 
    console.log(parseFloat(negativeRate));
    console.log(parseFloat(zeroRate));
}

/*
Obtained "Congratulations! You solved this challenge." result and 100% score in HackerRank.
*/
