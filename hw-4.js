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

// // Задача 5
// let n = 1000;
// let num = 0;
// while (n >= 50) {
//     n /= 2;
//     num++;
// }
// console.log(`Количество итераций - ${num}`);

// //Задача 6
// let friday = 2;
// do {
//   console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
//   friday += 7;
// } while (friday <= 31);


// --------ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ --------
// // доп. задача 1
// let k = 100;
// let iterations = 0;
// while (k >= 0) {
//     k -= 7;
//     iterations++;
// }
// console.log(`Результат вычислений: ${k}. Количество итераций: ${iterations}.`);

// доп. задача 2
// const months = [
//   "Январь",
//   "Февраль",
//   "Март",
//   "Апрель",
//   "Май",
//   "Июнь",
//   "Июль",
//   "Август",
//   "Сентябрь",
//   "Октябрь",
//   "Ноябрь",
//   "Декабрь"
// ];

// for (const value of months) {
//   console.log(`Месяц ${value} №${months.indexOf(value) + 1}`);
// }

// // доп. задача 3
// const book1 = {
//     'Название': 'Alchemised',
//     'Автор': 'Син Лин Ю',
//     'Год публикации': '2025',
//     'Жанр': 'Фентези'
// };
// for (const key in book1) {
//   console.log(key, book1[key]);
// }

// доп. задача 4
const arr = [4, 65, -11, 36, -51, 82, 44, 0, -23, 12];

const min = Math.min(...arr);
console.log(min);