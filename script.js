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

for (let i = 1; i <= 100; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";

  console.log(output || i);
}
