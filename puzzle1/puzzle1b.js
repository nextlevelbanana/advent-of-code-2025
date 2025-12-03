import fs from 'fs';
let cursor = 50;
let numberOfPassesByZero = 0;


const inputArray = fs.readFileSync('./input.txt', 'utf8').split('\r\n');

inputArray.forEach(entry => {
    const direction = entry.substring(0,1) == "R" ? 1 : -1;
    const numberOfSteps = entry.substring(1) % 100;
    numberOfPassesByZero += Math.floor(entry.substring(1) / 100);

    let newPosition = cursor + numberOfSteps * direction;
    
    if (newPosition < 0) {
        newPosition += 100;
        if (cursor !== 0 && newPosition !== 0) {
            numberOfPassesByZero++;
        }
    } else if (newPosition > 99) {
        newPosition -= 100;
        if (cursor !== 0 && newPosition !== 0) {
            numberOfPassesByZero++;
        }
    }
    
    if (newPosition === 0) {
        numberOfPassesByZero++;
    }
    
    cursor = newPosition;

});

console.log(numberOfPassesByZero);