/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time. 
 */

/*
REFACTORED
*/
function timeConversion(string) {
  // Write your code here
  // Separate the format (AM/PM) and the hour which will need to change from the minutes and seconds
  const format = string.slice(-2).toLowerCase();
  const array = string.split(':');
  let hour = array[0];
  const minutesSeconds = array[1].concat(':', (array[2].slice(0, 2)));
   
  // Return the appropriate military hour
  switch (format) {
    case 'am':
      hour = hour === '12' ? '00' : hour;
      break;
    case 'pm':
      hour = hour === '12' ? '12' : (parseInt(hour)+12).toString();
  }
  
  // Build the result hours+minutes+seconds minus format
  return hour.concat(':', minutesSeconds);
}

/*
ORIGINAL
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
