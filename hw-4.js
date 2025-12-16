// // Задача 1
// for (let i = 0; i < 2; i++) {
//   console.log('Привет');
// }

// // Задача 2
// for (let i = 0; i < 5; i++) {
//   console.log(i + 1);
// }

// // Задача 3
// for (let i = 7; i < 23; i++) {
//   console.log(i);
// }

// Задача 4
// const obj = {
//     "Коля" : '200',
//     "Вася" : '300',
//     "Петя" : '400'
// };

// for (const key in obj) {
//   console.log(`${key} — зарплата ${obj[key]} долларов`);
// }

// Задача 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(`Количество итераций - ${num}`);
