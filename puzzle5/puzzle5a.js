import fs from 'fs';

console.time();
let total = 0;

const input = fs.readFileSync('./input.txt', 'utf8');

//I have never used this syntax before and I'm delighted it works
const [ingredientIDRanges, availables] = input.split("\r\n\r\n").map(thing => thing.split("\r\n"));
const freshRanges = ingredientIDRanges.map(range => {
    return range.split("-").map(Number);
});

console.log(freshRanges)

availables.forEach(id => {
    for (var i = 0; i < freshRanges.length; i++) {
        if (id >= freshRanges[i][0] && id <= freshRanges[i][1]) {
            total += 1;
            break;
        }
    }
});

console.log(total);
console.timeEnd(); //22.352 ms