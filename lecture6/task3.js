// Реалізувати власноруч метод Array.prototype.reduce
// reduce = (arr, reduceCallback, initialValue)

function myReduce(arr, reduceCallback, initialValue) {
    let acc = initialValue;
    for (const item of arr) {
        acc = reduceCallback(acc, item);
    }
    return acc;
}

//Test
const arr = [1, 2, 2, 3, 3, 3];

const result = myReduce(arr, (acc, item) => {
        if (!acc.includes(item)) {
            return [...acc, item];
        }
    return acc;

}, []);

console.log(result);