import fs from 'fs';

var total = 0;

const inputArray = fs.readFileSync('./input.txt', 'utf8').split('\r\n');

    let numberString = "";

inputArray.forEach(bank => {
    let sectionStart = 0;
    numberString = "";
    
    for (var battery = 12; battery > 0; battery--) {
        let currentHighest = 0;
        const batterySection = bank.substring(sectionStart, bank.length - battery + 1);
       
        let currentAmountToMoveCursor = 0;
        for (let b = 0; b < batterySection.length; b++) {
            
            if (batterySection[Number(b)] > currentHighest) {
                currentHighest = batterySection[b];
                currentAmountToMoveCursor = b;
            }
        }
        
        sectionStart += currentAmountToMoveCursor + 1;
        
        numberString += currentHighest.toString();
    }
       
    total += Number(numberString)

});


console.log(total)