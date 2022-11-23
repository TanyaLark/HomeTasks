function parsePolynom(polynomString: string): number[] {
    polynomString = polynomString.replace(/\s/g, '').toLowerCase();
    const polyRegExp: RegExp = /(\+|\-)?[a-z0-9.^]+/gi;
    const resultArr = polynomString.match(polyRegExp);
    if (!resultArr) {
        throw new Error('invalid polynom string');
    }
    let coefficientsArray: number[] = [];
    for (const element of resultArr) {
        const elementNumbersWithoutX = element.split('x');
        const coefficient = elementNumbersWithoutX[0] ? elementNumbersWithoutX[0].replace('+', '') : 1;
        const elementNumbersWithoutPow = element.split('^');
        const powNumber = Number(elementNumbersWithoutPow[1]);
        if (Number.isNaN(powNumber)) {
            coefficientsArray.push(Number(coefficient));
            continue;
        }
        if (powNumber >= 0) {
            coefficientsArray[powNumber] = Number(coefficient);
        }
    }
    const normalizedCoefficientArray: number[] = [];
    for (let i = 0; i < coefficientsArray.length; i++) {
        if (coefficientsArray[i]) {
            normalizedCoefficientArray.push(coefficientsArray[i]);
        } else {
            normalizedCoefficientArray.push(0);
        }
    }
    return normalizedCoefficientArray.reverse();
}

function multiplyPolinomCoefficientArrays(firstCoefficients: number[], secondCoefficients: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < firstCoefficients.length + secondCoefficients.length - 1; i++) {
        result[i] = 0;
    }
    for (let i = 0; i < firstCoefficients.length; i++) {
        for (let j = 0; j < secondCoefficients.length; j++) {
            result[i + j] += firstCoefficients[i] * secondCoefficients[j];
        }
    }
    return result;
}

function polynomCoeffsToString(coefficients: number[]): string {
    const polyRegExp: RegExp = /(\+|\-)?[a-z0-9.^]+/gi;
    let resultString: string = '';
    for (let i = 0; i < coefficients.length; i++) {
        resultString += coefficients[i];
        if (i !== 0) {
            resultString += "x^" + i;
        }
        if (i !== coefficients.length - 1) {
            resultString += "+";
        }
    }
    const polynomToArray: string[] = (resultString.match(polyRegExp) as string[])
        .reverse()
        .filter((coefficient) => {
            const coefficientSymbolsArray = coefficient.split('');
            return coefficientSymbolsArray[1] !== '0';
        })
        .map((coefficient) => {
            const coefficientSymbolsArray = coefficient.split('');
            if (coefficientSymbolsArray[1] === '1' && coefficientSymbolsArray[2] === 'x') {
                coefficientSymbolsArray.splice(0, 2);
                return coefficientSymbolsArray.join('');
            }
            return coefficient;
        });
    return polynomToArray.join('');
}

function multiply(poly1: string, poly2: string): void {
    const coefficientsPoly1 = parsePolynom(poly1);
    const coefficientsPoly2 = parsePolynom(poly2);
    const result = multiplyPolinomCoefficientArrays(coefficientsPoly1, coefficientsPoly2);
    console.log(polynomCoeffsToString(result));
}

const poly1 = 'x + 1';
const poly2 = 'x - 1';

multiply(poly1, poly2);
