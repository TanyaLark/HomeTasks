// Програма зчитує двоцифрове число і виводить через пропуск кожну цифру окремо.
// Вхідні даніНатуральне число на проміжку від 10 до 99 включно.
// Вихідні даніСпочатку першу цифру числа і через пропуск другу.

const readline = require('readline');

const cmd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

cmd.question('What is your number? \n', (input) => {
    if(input >= 10 && input <= 99){
        digitSeparator(input);
        cmd.close();
    } else {
        cmd.setPrompt('Your number must be greater 10 and less then 99 \n');
        cmd.prompt();
        cmd.on('line', (input) =>{
            if (input < 10){
                console.log('Please, enter a number greater 10');
            } else if (input > 99){
                console.log('Please, enter a number less then 99');
            } else {
                digitSeparator(input);
                cmd.close();
            }
        });
    }
});

function digitSeparator (inputDigit){

    // Вариант 1 beginner
    //     let outputDigit = '';
    //     for (let i = 0; i < inputDigit.length; i++){
    //         outputDigit += inputDigit[i] + ' ';
    //     }
    //     return console.log(outputDigit.trim(), '\n The end:)');

    // Вариант 2 через for of
    //     const digits = inputDigit.split('');
    //     let outputDigit = '';
    //     for (const inputDigitElement of digits) {
    //         outputDigit += inputDigitElement + ' ';
    //     }
    //     return console.log(outputDigit.trim(), '\n The end:)');

    // Вариант 3 через map()
    //     const digits = inputDigit.split('');
    //     const outputDigit = digits.map(element => element + ' ')
    //         .join('');
    //     return console.log(outputDigit);

    // Вариант 4 через reduce
    //     const digits = inputDigit.split('');
    //     const initialValue = '';
    //     const output = digits.reduce((a, b) => {
    //         return a + b + ' ';
    //     }, initialValue);
    //     return console.log(output.trim());

    // Вариант  5 оптимальный :Р
    return console.log(inputDigit.split('').join(' '));
}
