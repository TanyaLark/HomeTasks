// Реалізувати функцію createBase
//
// let addSix = createBase(6);
//
// addSix(10); // returns 16
//
// addSix(21); // returns 27

function createBase(num1){
    return (num2) => num2 + num1;
}

let addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));


