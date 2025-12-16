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

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
};

for (const key in obj) {
  console.log(`${key} — зарплата ${obj[key]} долларов`);
}