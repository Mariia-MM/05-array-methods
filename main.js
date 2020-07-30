// // function #1
// const getRandomArray = (length, getNumber) => {
//   let number = 0;
//   let newArr = [];

//   for (let i = 0; i < length; i++) {
//     number = getNumber(1, 50);
//     newArr.push(number);
//   }
//   return newArr;
// };

// const getNumber = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   number = Math.floor(Math.random() * (max + 1 - min) + min);

//   return number;
// };

// console.log(getRandomArray(20, getNumber));

// //function#2
// const getModa = (...numbers) => {
//   let arr = [];
//   let countMax = 0;
//   let count = 0;
//   let numb = 0;
//   let i = 0;
//   arr = numbers;
//   console.log(arr);
//   for (arr[i] of arr) {
//     numb = arr[i];
//     console.log(`arr[i]`, arr[i]);
//     if (numb === arr[i]) {
//       count++;
//     } else {
//       count;
//     }
//     console.log(`numb`, numb);
//     console.log(`count`, count);
//     if (count > countMax) {
//       countMax = count;
//       console.log(`countMax`, countMax);
//     }
//   }
//   //   arr.forEach(function (el) {
//   //     if (el == el) {
//   //       count += 1;
//   //     }
//   //   });

//   //   console.log(`count`, countMax);
// };
// //return countMax;

// console.log(getModa(3, 6, 2, 4, 3, 2, 6, 2, 5, 9, 2));

// //function#3
// const getAvarage = (...numbers) => {
//   let arr = [];
//   let count = 0;
//   let sum = 0;
//   let i = 0;
//   arr = numbers;
//   console.log(arr);

//   arr.forEach(function (el) {
//     if (Number.isInteger(el)) {
//       sum = sum + el;
//       count = count + 1;
//     }
//   });
//   console.log(`sum :`, sum);
//   console.log(`count:`, count);

//   return console.log(`avvarage:`, sum / count);
// };
// getAvarage(3, -3, 5, 9, 3, 5.6, 7, 1);
