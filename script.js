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

const horn = () => {
  console.log("Toot");
};
