//? 1
/* let names = "D:/Qudrat_c++/books/My_book.json";
let separated_words = names.split("/");
let word = separated_words[separated_words.length - 1].split(".");
let result_word = word[0];
console.log(result_word); */

//? 2
/* let result_number = 0;
function getSum3(number) {
  for (let i = 0; i <= number; i += 3) {
    result_number += i;
  }
  console.log(result_number);
}
getSum3(15); */
//? 4
/* let names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
jsObj = {};

for (var i = 0; i < names.length; i++) {
  console.log(i);
  jsObj[names[i]] = i;
}
console.log(jsObj); */
//? 5
// let n = 3;
// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };
// function getMultipleValues(n) {
//   Object.keys(obj).forEach((item) => {
//     obj[item] = Object.values(obj) * n;
//   });
// }
// console.log(obj);
// getMultipleValues(n);

/* let n = 3;
const obj = {
  a: 2,
  b: 3,
  c: 4,
  d: 6,
};
function getMultipleValues(obj, n) {
  for (let i in obj) {
    obj[i] = obj[i] * n;
  }
  return obj;
}
console.log(getMultipleValues(obj, n)); */
//? 6
/* const array = [1, 45, 5, 77, 9, 8, 10];
const newArray = [];
array.forEach((arr) => {
  if (array[0] == arr) {
    newArray.push(arr);
  } else if (array[array.length - 1] == arr) {
    newArray.push(arr);
  }
});
console.log(newArray); */
//? 7
/* let str = "Men Abdulaziz Programmerman";

function checkingProbel(str) {
  let array = str.split("");
  let checking_word = array.some((item) => item == " ");
  console.log(checking_word);
}
checkingProbel(str); */
//? 8
/* const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

let passed_pupils = 0;
let failed_pupils = 0;
pupils.map((pupil) => {
  if (pupil.protcent >= 70) {
    passed_pupils++;
  } else {
    failed_pupils++;
  }
});
console.log(`Passed: ${passed_pupils}, Failed: ${failed_pupils}`); */
