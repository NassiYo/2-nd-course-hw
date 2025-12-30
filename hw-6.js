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

// Задача 4
const arr4 = [];
for (let i = 0; i < 3; i++) {
    arr4[i] = [];
    for (let j = 0; j < 3; j++) {
        arr4[i][j] = 1;
    };
}
console.log(arr4);

// // Задача 9
// const arr9 = [[1, 2, 3],[4, 5, 6]];
// console.log([...arr9[0], ...arr9[1]]);

// // Задача 10
// let arr10 = [];

// for (let i = 0; i < 10; i++) {
//     arr10.push(Math.floor(Math.random() * 10) + 1);
// };
// console.log(arr10);
// for (let i = 0; i < 9; i++) {
//     console.log(arr10[i]+arr10[i + 1])
// };