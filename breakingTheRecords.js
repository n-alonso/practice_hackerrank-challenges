/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.
 */

function breakingRecords(scores) {
    // Write your code here
    let minCounter = 0;
    let maxCounter = 0;
    const maxMin = [];
    
    scores.forEach(score => {
        if (maxMin.length === 0) {
            maxMin.push(score, score);
        }
        else {
            if (score > maxMin[0]) {
                maxMin[0] = score;
                maxCounter++;
            } else if (score < maxMin[1]) {
                maxMin[1] =score;
                minCounter++;
            }
        }
    })
    return [maxCounter, minCounter];
}

/*
Obtained "Congratulations! You solved this challenge." result and 100% score in HackerRank.
*/
