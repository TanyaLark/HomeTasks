// “Розумне множення”
    // function multiply(num1, num2) {
    // // Write your code here...
    // }
// Реалізувати double, square на основі функції multiply;
    // double(5); // => 10
    // square(5); // => 25

function multiply(num1, num2) {
    return num1 * num2;
}

function double(num) {
    return multiply(num, 2);
}

function square(num) {
    return multiply(num, num);
}

console.log(double(5));
console.log(square(5));
