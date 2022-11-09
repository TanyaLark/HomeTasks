// Нехай задано дві прямокутні матриці A та B розмірності m × n та n × q відповідно:
// Тоді матриця C розмірності m × q називається їх добутком:
// Знайти матрицю C.

function multiply(matrix1, matrix2) {
    if (matrix1.length !== matrix2[0].length) {
        throw new Error("matrices are incompatible");
    }
    const resultMatrix = [];
    for (let i = 0; i < matrix1.length; i++) {
        resultMatrix.push([]);
    }

    for (let i = 0; i < matrix1.length; i++) {

        for (let j = 0; j < matrix1.length; j++) {

            let sum = 0;

            for (let k = 0; k < matrix2.length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            resultMatrix[i][j] = sum;
        }
    }
    return resultMatrix;
}

const matrix1 = [
    [1, 2, 3],
    [3, 2, 7],
    [2, 8, 9]
];

const matrix2 = [
    [9, 8, 5],
    [6, 2, 3],
    [1, 2, 7]
];

const matrix3 = [
    [1, 2, 2],
    [3, 1, 1],
];

const matrix4 = [
    [4, 2],
    [3, 1],
    [1, 5]
];

const matrix5 = [
    [4, 2],
    [3, 1],
    [1, 5]
];

const matrix6 = [
    [1, 2, 2],
    [3, 1, 1],
];

console.log(multiply(matrix1, matrix2)); // [ [ 24, 18, 32 ], [ 46, 42, 70 ], [ 75, 50, 97 ] ]

console.log(multiply(matrix3, matrix4)); // [ [ 12, 14 ], [ 16, 12 ] ]

console.log(multiply(matrix5, matrix6)); // [ [ 10, 10, 10 ], [ 6, 7, 7 ], [ 16, 7, 7 ] ]