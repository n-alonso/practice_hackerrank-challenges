/*
 Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
 Print the decimal value of each fraction on a new line with 6 places after the decimal.
 */

function plusMinus(arr) {
    // Write your code here
    let possitives = 0;
    let negatives = 0;
    let zeroes = 0;
    const total = arr.length;
    
    arr.forEach(num => {
        if (num > 0) {
            possitives++;
        } else if (num < 0) {
            negatives++;
        } else if (num === 0) {
            zeroes++;
        }
    })
    
    const possitiveRate = (possitives / total).toFixed(6);
    const negativeRate = (negatives / total).toFixed(6);
    const zeroRate = (zeroes / total).toFixed(6);
    console.log(parseFloat(possitiveRate)); 
    console.log(parseFloat(negativeRate));
    console.log(parseFloat(zeroRate));
}

/*
Obtained "Congratulations! You have passed the sample test cases." result in HackerRank.
*/
