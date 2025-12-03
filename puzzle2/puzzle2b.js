import fs from 'fs';
let total = 0;

const inputArray = fs.readFileSync('./input.txt', 'utf8').split(',');

const isValidId = (numAsStr) => {
    //Can't believe it's only day 2 and I'm already writing Regex
    const regex = new RegExp(/^(\d+)\1+$/g); 
    //if this matches, the ID is fake
    const result =  regex.test(numAsStr);
    return !result;
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