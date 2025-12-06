import fs from 'fs';

console.time();
let total = 0;

const input = fs.readFileSync('./input.txt', 'utf8');

const [ingredientIDRanges, _] = input.split("\r\n\r\n").map(thing => thing.split("\r\n"));

let freshRanges = ingredientIDRanges.map(range => {
    return range.split("-").map(Number);
}).sort((a,b) => a[0] - b[0]);

console.log(freshRanges)

let foundAnOverlap = false;

let consolidatedRanges = [];

let iterations = 0;

do {
    iterations ++;
    consolidatedRanges = [freshRanges[0]];
    foundAnOverlap = false;

    for (var i = 1; i < freshRanges.length; i++ ) {
        let hasExtendedARange = false;
        let currentRange = freshRanges[i]; // [3, 5], [6, 8]
        
        consolidatedRanges.forEach(consolidatedRange => {
            if (currentRange[0] >= consolidatedRange[0] && currentRange[0] <= consolidatedRange[1]) {
                foundAnOverlap = true;
                hasExtendedARange = true;
                if (currentRange[1] > consolidatedRange[1]) {
                    consolidatedRange[1] = currentRange[1];

                }
            } 
            
            if (currentRange[1] <= consolidatedRange[1] && currentRange[1] >= consolidatedRange[0]) {
                foundAnOverlap = true;
                hasExtendedARange = true;
                if (currentRange[0] < consolidatedRange[0]) {
                    consolidatedRange[0] = currentRange[0];
                   
                }
            }
        });
        
        if (!hasExtendedARange) {
            consolidatedRanges.push(currentRange);
        }
    }
    
    freshRanges = [...consolidatedRanges];
} while (foundAnOverlap == true) ;

console.log("iterations:", iterations)
//now add up how many numbers are in the consolidated ranges
total = consolidatedRanges.map(range => range[1] - range[0] + 1).reduce((prev, diff) => { return prev + diff}, 0);

console.log(total)
console.timeEnd(); //10.3ms

