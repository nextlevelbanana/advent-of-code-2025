import fs from 'fs';
let cursor = 50;
let numberOfStopsAtZero = 0;


const inputArray = fs.readFileSync('./input.txt', 'utf8').split('\r\n');

inputArray.forEach(entry => {
    const direction = entry.substring(0,1) == "R" ? 1 : -1;
    const numberOfSteps = entry.substring(1) % 100;
    let newPosition = cursor + numberOfSteps * direction;
    
    if (newPosition < 0) {
        newPosition += 100;
    } else if (newPosition > 99) {
        newPosition -= 100;
    }
    
    cursor = newPosition;
    if (cursor === 0) {
        numberOfStopsAtZero++;
    }
});

console.log(numberOfStopsAtZero);