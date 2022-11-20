// Створити модуль calculator. В головному файлі програма повинна зчитувати з консолі стрінг і повертати результат.
// Приклад ‘2*2+2’ => 6
// arithmetical operations: +, -, *, /

import {calculator} from "./calculator.mjs";
import readline from 'readline';

const cmd = readline.createInterface(process.stdin, process.stdout);

cmd.question(`Input string: \n`, function setNum(input) {
    console.log('Result:', calculator(input));
    cmd.close();
});

