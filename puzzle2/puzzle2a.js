import fs from 'fs';
let total = 0;

const inputArray = fs.readFileSync('./input.txt', 'utf8').split(',');

const isValidId = (number) => {
    var midpoint = number.length / 2;
    if (!Number.isInteger(midpoint)) {
        return true;
    }
    var halves = [number.substring(0,midpoint), number.substring(midpoint)]
    return (halves[0] !== halves[1]);
}

inputArray.forEach(entry => {
    const ids = entry.split("-").map(Number);
    for (let id = ids[0]; id <= ids[1]; id++) {
        if (!isValidId(id.toString())) {
            total += Number(id);
        }
    }
});



console.log(total);