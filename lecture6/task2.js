// Написати метод для виведення унікальних значень в масиві.
// [1, 2, 2, 3, 3, 3] => [1, 2, 3]

const arr = [1, 2, 2, 3, 3, 3];

function getUnique (arr) {
    const result = arr.reduce( (accumulator, currentValue) => {
            if (!accumulator.includes(currentValue)) {
                return [...accumulator, currentValue];
            }
            return accumulator;
        },
        [],)

    return result;
}

console.log(getUnique(arr));