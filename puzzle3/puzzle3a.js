import fs from 'fs';

var total = 0;

const inputArray = fs.readFileSync('./input.txt', 'utf8').split('\r\n');

inputArray.forEach(bank => {
    let tens;
    let ones;
    let substring;
    for (var i = 9; i > 0; i--) {
        var idx = bank.indexOf(i);
        if (idx > -1 && idx < bank.length - 1) {
            tens = i.toString();
            substring = bank.substring(idx + 1);
            break;
        }
    }
    for (var i = 9; i > 0; i--) {
        var idx = substring.indexOf(i);
        if (idx > - 1) {
            ones = i.toString();
            break;
        }
    }
    console.log(`${tens}${ones}`)
    total += Number(`${tens}${ones}`)
});

console.log(total)