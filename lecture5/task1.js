// Напишіть функції:
//     ● Для перевірки чи порожній об’єкт
//     ● Порівнює два об'єкти.
//     ● Знаходить перетин об'єктів і повертає об'єкт перетинів.
//     ● Знаходить значення за заданим ключем

// Для перевірки чи порожній об’єкт
function isEmpty(obj) {
    for (const objKey in obj) {
        return false;
    }
    return true;
}
// const user = {};
// console.log(isEmpty(user));

//Порівнює два об'єкти.
function equals(obj1, obj2) {

    if (obj1 instanceof Date && obj2 instanceof Date) {
        return isDateEqual(obj1, obj2);
    }

    if (typeof obj1 === 'function' && typeof obj2 === 'function') {
        return isFunctionEqual(obj1, obj2);
    }

    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        if(obj1 === null && obj2 === null){
            return true;
        }
        if (Object.keys(obj1).length !== Object.keys(obj2).length){
            return false;
        }

        let result = false;

        for (const obj1Key in obj1) {
            if(obj1[obj1Key] === null && obj2[obj1Key] === null){
                result = true;
                continue;
            }

            result = equals(obj1[obj1Key], obj2[obj1Key]);
            if (!result) break;
        }

        return result;
    }

    return isPrimitiveEqual(obj1, obj2);

}

function isDateEqual(date1, date2) {
    return date1.getTime() === date2.getTime();
}

function isFunctionEqual(foo1, foo2) {
    return foo1.toString() === foo2.toString();
}

function isPrimitiveEqual(a, b) {
    return a === b;
}


//Test

// const objOne = {
//     name: 'u',
//     5: [1, [4, [6, 6, 6]], 3],
//     age: {
//         my: 45,
//         his: {
//             name: 'Ivan'
//         },
//         address: {
//             city: 'Dnipro',
//             value: null
//         }
//     },
//     value: null,
//     date: new Date('July 20, 69 20:17:40 GMT+00:00')
// }
//
// const objTwo = {
//     name: 'u',
//     5: [1, [4, [6, 6, 6]], 3],
//     age: {
//         my: 45,
//         his: {
//             name: 'Ivan'
//         },
//         address: {
//             city: 'Dnipro',
//             value: null
//         }
//     },
//     value: null,
//     date: new Date('July 20, 69 20:17:40 GMT+00:00')
// }
//
// console.log(equals(objOne, objTwo));


//Знаходить перетин об'єктів і повертає об'єкт перетинів.
function sameValues(obj1, obj2) {
    const resObj = {};

    for (const key in obj1) {
        if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object' && equals(obj1[key], obj2[key])){
            resObj[key] = JSON.parse(JSON.stringify(obj1[key]));
        }

        if (obj1[key] === obj2[key]) {
            resObj[key] = obj1[key];
        }
    }

    return resObj;
}

//Test
// const objOne = {
//     name: 'u',
//     5: [1, [4, [6, 6, 6]], 3],
//     age: {
//         my: 45,
//         his: {
//             name: 'Ivan'
//         },
//         address: {
//             city: 'Dnipro',
//             value: null
//         }
//     },
//     value: null,
//     date: new Date('July 20, 69 20:17:40 GMT+00:00')
// }
//
// const objTwo = {
//     name: 'u',
//     5: [1, [4, [6, 6, 6]], 3],
//     age: {
//         my: 45,
//         his: {
//             name: 'Ivan'
//         },
//         address: {
//             city: 'Dnipro',
//             value: null
//         }
//     },
//     value: null,
//     date: new Date('July 20, 69 20:17:40 GMT+00:00')
// }
//
// console.log(sameValues(objOne,objTwo));

//Знаходить значення за заданим ключем
function find(obj, keyToFind) {
    if (!obj) {
        return;
    }
    for (const keyInObj in obj) {
        if (keyInObj === keyToFind) {
            return obj[keyToFind];
        }
        if (typeof obj === 'object') {
            let result = undefined;
            result = find(obj[keyInObj], keyToFind);
            if (result !== undefined) {
                return result;
            }
        }
    }
}

//Test
const obj = {
    name: 'u',
    5: [1, [4, [6, 6, 6]], 3],
    age: {
        my: 45,
        his: {
            name: 'Ivan'
        },
        address: {
            city: 'Dnipro',
            value: null
        }
    },
    value: null,
    date: new Date('July 20, 69 20:17:40 GMT+00:00')
}

console.log(find(obj,'city'));





