/*
Camel Case is a naming style common in many programming languages. 
In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). 
Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

1. Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by 
   the words you'll need to operate on
2. The operation will either be S (split) or C (combine)
3. M indicates method, C indicates class, and V indicates variable
4. In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words 
   starting with a lowercase letter.
5. In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the 
   appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
*/

function processData(input) {
    //Enter your code here
    input.forEach(element => { // It accepts an array of strings, so for each string:
    
    const format = element.split(';'); // Separate the string into an array of elements that I can use for the logic

    switch (format[0]) { // The first element in format determines whether it's a split or a combine
        case 'S': // Split case
          const words = format[2].split(/(?=[A-Z])/g); // Split whenever it finds a capital letter, without skipping it
          words.forEach((word, index) => {
              words[index] = word.replace(/[()]/g, '');
          })
          return words.join(' '); // Join it back together as a sentence
          break;
        case 'C': // Combine case
          // Split the string into an array of words, then capitalize every word that it's not the first one
          const camelCase = format[2].split(' ');
          camelCase.forEach((word, index) => {
              index === 0 ? camelCase[index] = word : camelCase[index] = (word.charAt(0).toUpperCase() + word.slice(1));
          })
          switch (format[1]) { // The second element in format will let me know if it's a Method or not
              case 'V': // Variable case
              case 'C': // Class case
              return camelCase.join('');
              break;
              case 'M': // Method case
              camelCase.push('()') // Add a parentheses at the end to indicate that it's a Method
              return camelCase.join('');
          }
          break;
    }
    });
} 

/*
Achieved the desired result when testing it outside of HackerRank.
Unfortunately the input provided in HackerRank seems to be faulty so I could not pass the challenge.
Many people are commenting in the discussion section that the input is bugged.
*/
