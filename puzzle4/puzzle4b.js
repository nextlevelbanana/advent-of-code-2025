console.time("4b");
import fs from 'fs';
let total = 0;

const inputArray = fs.readFileSync('./input.txt', 'utf8').split('\r\n');

/* 
* (-1,-1) (0,-1) (1, -1)
* (-1,0) (0,0) (1,0)
* (-1, 1) (0,1) (1,1)
*/

const neighbors = [[-1,-1], [0,-1], [1, -1], [-1, 0], [1,0], [-1, 1], [0, 1], [1,1]]

let toRemove = [];

 do {
    toRemove = [];
    for (let y = 0; y < inputArray.length; y++) {
        const row = inputArray[y];
        for (let x = 0; x < row.length; x++) {
            let neighborsWithRolls = 0;
            var cell = row[x];
            if (cell !== "@") {
                continue;
            }
            
            neighbors.forEach(candidate => {
            let candidateCell = inputArray[y + candidate[1]]?.[x + candidate[0]];
                if (candidateCell && candidateCell === "@") {
                    neighborsWithRolls += 1;
                }
            });
            
            if (neighborsWithRolls < 4) {
                total += 1;
                toRemove.push({"x": x,"y": y});
            }
        }
    }
    
    toRemove.forEach(rollToRemove => {
        var row = inputArray[rollToRemove.y];
       inputArray[rollToRemove.y]  = row.substring(0,rollToRemove.x) + "." + row.substring(rollToRemove.x + 1);
    });
} while (toRemove.length);

console.log(total)
console.timeEnd("4b"); // 72.076ms