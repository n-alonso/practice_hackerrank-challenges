/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers. 
 */

function timeConversion(s) {
    // Write your code here
    // Re-usable function to sum 12 if it is 'PM' and delete the AM/PM at the end
    const refactor = (string, int) => {
      const parts = string.split(':');
      parts[0] = parseInt(parts[0]) + int;
      if (parts[0] === 0) parts[0] = '00';
      return parts.join(':').replace('AM', '').replace('PM', '');
    }
    
    // Logic to transform the time depending on if it's AM/PM and if it's 12
    let answer;
    switch (s[s.length-2].toLowerCase()) {
        case 'a':
            answer = s.split(':')[0] === '12' ? refactor(s, -12) : s.replace('AM', '');
            break;
        case 'p':
            answer = s.split(':')[0] === '12' ? refactor(s, 0) : refactor(s, 12);
            break;
    }
    return answer;
}

/*
Obtained "Congratulations! You solved this challenge." result and 100% score in HackerRank.
*/
