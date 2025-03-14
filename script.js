// for (let line = "#"; line.length <= 7; line += "#") {
//     console.log(line);
//   }

// for (let i = 7; i >= 1; i--) {
//   let line = "#".repeat(i);
//   console.log(line);
// }

// for (let i = 1; i <= 7; i++) {
//   let line = "#".repeat(i);
//   console.log(line);
// }

// for (let line = "#"; line.length < 8; line += "#") {
//   console.log(line);
// }

// for (let i = 1; i < 7; i++) {
//   let line = "#".repeat(i);
//   console.log(line);
// }

// for (let i = 1; i <= 100; i++) {
//   let output = "";

//   if (i % 3 === 0) output += "Fizz";
//   if (i % 5 === 0) output += "Buzz";

//   console.log(output || i);
// }

// let size = 9; // Размер доски
// let board = ""; // Пустая строка, куда будем добавлять символы

// for (let y = 0; y < size; y++) {
//   // Внешний цикл (проходим по строкам)
//   for (let x = 0; x < size; x++) {
//     // Внутренний цикл (проходим по символам в строке)
//     if ((x + y) % 2 === 0) {
//       board += " "; // Чётная сумма → пробел
//     } else {
//       board += "#"; // Нечётная сумма → #
//     }
//   }
//   board += "\n"; // Добавляем перевод строки после каждой строки
// }

// console.log(board);

// const horn = () => {
//   console.log("Toot");
// };

// function greet(who) {
//   console.log("Hello " + who);
// }
// greet("Harry");
// console.log("Bye");

// function minus(a, b) {
//   if (b === undefined) return -a;
//   else return a - b;
// }

// console.log(minus(10));
// console.log(minus(10, 5));

// function multiplier(factor) {
//   return (number) => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5));

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a); // 10 (доступ к переменной из внешнего окружения)
//   }
//   return inner;
// }

// const fn = outer();
// fn(); // Вызов inner, но она помнит "a" через лексическое окружение

// function startTimer() {
//   let count = 0;
//   setInterval(() => {
//     count++;
//     console.log(`Прошло секунд: ${count}`);
//   }, 1000);
// }

// startTimer();
// Каждую секунду увеличивает `count` и выводит его в консоль

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 2
console.log(counter.getCount()); // 2
