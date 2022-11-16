// **Побудуйте гру-вгадування
// Вимоги:**
//
// - **Користувач може ввести число**
// - **Система вибирає випадкове число від 1 до 6**
// - **Якщо число користувача дорівнює випадковому числу, дайте користувачеві 2 бали**
// - **Якщо число користувача відрізняється від випадкового числа на 1, дайте**
//
// **користувачеві 1 бал. В іншому випадку дайте користувачеві 0 балів**
//
// - **Користувач може грати доки сам не захоче припинити гру**
// - **В кінці виведіть суму балів користувача**

const readline = require('readline');
const cmd = readline.createInterface(
    process.stdin, process.stdout);

let result = 0;

function guessNumber() {
    return cmd.question(`Enter a number \n`, function setNum(number) {
        const num = Number(number);
        const generatedNum = getRandomInt(1, 6);

        if (isNaN(num)){
            console.log('Error NaN');
            wantToExit();
        } else if(num === generatedNum){
            result += 2;
            console.log(`You guess the number. \n`, `Generated_number = ${generatedNum} \n`, `Your current result = ${result}`);
            wantToExit();
        } else if(num === generatedNum - 1 || num === generatedNum + 1){
            result += 1;
            console.log(`You almost guessed the number. \n`, `Generated_number = ${generatedNum} \n`, `Your current result = ${result}`);
            wantToExit();
        } else {
            console.log(`You didn't guess the number. \n`, `Generated_number = ${generatedNum} \n`, `Your current result = ${result}`);
            wantToExit();
        }
    });
}

guessNumber();

function wantToExit(){
    return cmd.question('Exit (y or n)? ', function exit(input){
        if (input.match(/^y(es)?$/i)){
            console.log(`Your summary result = ${result}`);
            cmd.close()
        } else {
            return guessNumber();
        }
    });
}

function getRandomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
