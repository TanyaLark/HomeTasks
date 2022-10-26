// Підрахувати суму двох натуральних чисел A i B, записаних в римській системі числення.
// Вiдповiдь записати також, в римській системі числення.
//
// M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1 (Всі числа – менші 2000).
//
// Вхідні дані
// В рядку записано два числа римською системою числення, між якими стоїть знак +.
//
// Вихідні дані
// Одне число, сума чисел також римською системою числення. Числа в римській
// системі числення записані великими латинськими літерами.

const inputA = 'III';
const inputB = 'IV';
const output = convertToRoman(convertToArabic(inputA) + convertToArabic(inputB));
console.log(output);

function convertToArabic(num) {
    const rimToArabDigits = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const digitsFromSting = num.split('');
    const arabDigits = digitsFromSting.map((digit) => {
        return rimToArabDigits[digit];
    });
    const lastArabDigit = arabDigits[arabDigits.length - 1];
    let result = lastArabDigit;

    for (let i = arabDigits.length - 1; i >= 0; i--) {
        if (arabDigits[i - 1] === undefined) {
            break;
        }
        if (arabDigits[i] <= arabDigits[i - 1]) {
            result += arabDigits[i - 1];
        } else {
            result -= arabDigits[i - 1];
        }
    }
    return result;
}

function convertToRoman(num) {
    // M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1 (Всі числа – менші 2000).
    if(num < 1){ return "";}

    if(num === 2000){ return "Error";}
    if(num >= 1000){ return "M" + convertToRoman(num - 1000);}

    if(num >= 900){ return "CM" + convertToRoman(num - 900);}
    if(num >= 500){ return "D" + convertToRoman(num - 500);}
    if(num >= 400){ return "CD" + convertToRoman(num - 400);}
    if(num >= 100){ return "C" + convertToRoman(num - 100);}

    if(num >= 90){ return "XC" + convertToRoman(num - 90);}
    if(num >= 50){ return "L" + convertToRoman(num - 50);}
    if(num >= 40){ return "XL" + convertToRoman(num - 40);}
    if(num >= 10){ return "X" + convertToRoman(num - 10);}

    if(num >= 9){ return "IX" + convertToRoman(num - 9);}
    if(num >= 5){ return "V" + convertToRoman(num - 5);}
    if(num >= 4){ return "IV" + convertToRoman(num - 4);}
    if(num >= 1){ return "I" + convertToRoman(num - 1);}

}
