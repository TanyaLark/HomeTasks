// Програма зчитує двоцифрове число і виводить через пропуск кожну цифру окремо.
// Вхідні даніНатуральне число на проміжку від 10 до 99 включно.
// Вихідні даніСпочатку першу цифру числа і через пропуск другу.

const readline = require('readline');

const cmd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

cmd.question('What is your number? \n', (input) => {
    input = Number(input);
    if (typeof input === 'number' && isNaN(input) !== true){

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

    } else {
        console.log('Error');
        cmd.close();
    }

});

function digitSeparator (inputDigit){
    inputDigit = String(inputDigit);
    return console.log(inputDigit.split('').join(' '));
}

