export function calculator(inputStr) {
    inputStr = inputStr.replace(/\s/g, '');
    inputStr = inputStr.replace(/,/g, '.');

    const arrayOfSymbols = inputStr.split('');

// get operations array
    const operations = [];

    for (const operation of arrayOfSymbols) {
        if( operation === '+' || operation === '-' || operation === '/' || operation === '*'){
            operations.push(operation);
        }
    }

//get values array
    let values = [];

    for (const operation of operations) {
        let val = inputStr.split(operation, 1);
        values.push(val[0]);

        inputStr = inputStr.slice(val[0].length + 1); // inputStr memory last value
    }
    values.push(inputStr);

// convert values to number
    function strToNum(arr){
        const res = [];
        for (let arrElement of arr) {
            arrElement = parseFloat(arrElement);

            if(isNaN(arrElement)){
                return console.log('Error');
            }

            res.push(arrElement);
        }
        return res;
    }

    values = strToNum(values);

// calculate result
    function calculate(valuesArr, operationsArr) {
        let res = valuesArr[0];

        for (let i = 0; i < valuesArr.length; i++){
            switch (operationsArr[i]) {
                case '+':
                    res += valuesArr[i+1];
                    break;
                case '-':
                    res -= valuesArr[i+1];
                    break;
                case '*':
                    res *= valuesArr[i+1];
                    break;
                case '/':
                    res /= valuesArr[i+1];
                    break;
            }
        }
        return res;
    }

    return calculate(values, operations);
}