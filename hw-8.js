// // Задача 1
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort((a, b) => a.age - b.age));

// Задача 2
function isPositive(a) {
    return a > 0;
}

function isMale(a) {
    return a.gender === 'male';
}

function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        (ruleFunction(arr[i])) && output.push(arr[i]);
    };

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people1, isMale));