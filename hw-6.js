// // Задача 1
// const arr1 = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
//     if (arr1[i] === 10) {
//         break;
//     }
// };

// // Задача 2
// const arr2 = [1, 5, 4, 10, 0, 3];
// console.log(arr2.indexOf(4));

// // Задача 3
// const arr3 = [1, 3, 5, 10, 20];
// console.log(arr3.join(' '));

// // Задача 4
// const arr4 = [];
// for (let i = 0; i < 3; i++) {
//     arr4[i] = [];
//     for (let j = 0; j < 3; j++) {
//         arr4[i][j] = 1;
//     };
// };
// console.log(arr4);

// // Задача 5
// const arr5 = [1, 1, 1];
// for (let i = 0; i <3; i++) {
//     arr5.push(2);
// };
// console.log(arr5);

// // Задача 6
// const arr6 = [9, 8, 7, 'a', 6, 5];
// arr6.sort();
// const arrOfNumb = arr6.filter(x => x !== 'a');
// console.log(arrOfNumb);

// // Задача 7
// const arr7 = [9, 8, 7, 6, 5];
// let userInput = Number(prompt('Угадай число?'));
// (arr7.includes(userInput)) ? console.log('Угадал!') : console.log('Не угадал!');

// // Задача 8
// let str = 'abcdef';
// const arr8 = str.split("");
// arr8.reverse();
// str = arr8.join('');
// console.log(str);

// // Задача 9
// const arr9 = [[1, 2, 3],[4, 5, 6]];
// console.log([...arr9[0], ...arr9[1]]);

// // Задача 10
// let arr10 = [];

// for (let i = 0; i < 10; i++) {
//     arr10.push(Math.floor(Math.random() * 10) + 1);
// };
// console.log(arr10);
// // for (let i = 0; i < 9; i++) {
// //     console.log(arr10[i]+arr10[i + 1])
// // };

// // Задача 11
// const arrSquare = (arr) => arr.map(x => x ** 2);
// console.log(arrSquare(arr10));

// // Задача 12
// const arr12 = ['dfgkjwagjafnjk', 'sauygbj4g2r', '', 'dg', 'hfhhfh', 'fkdghjfbvhfey334534 f  rer '];
// const lengthStrCountArr = (arr) => arr.map(x => x.length);
// console.log(lengthStrCountArr(arr12));

// // Задача 13
// const arr13 = [7, -7, -10, 5, 9, 10, -10, 2, 1, -1];
// const negativeArr = (arr) => arr.filter(x => x < 0);
// console.log(negativeArr(arr13));

// Задача 14
let arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random() * 10) + 1);
};
console.log(arr14);
const evenArr = (arr) => arr.filter(x => x % 2 === 0);
console.log(evenArr(arr14));