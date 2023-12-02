/* 
  영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const arr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
let output = '';

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];

  [...str].forEach((s) => {
    if (arr.indexOf(s) !== -1) {
      const x = s.toUpperCase();
      output += x;
    } else {
      const x = s.toLowerCase();
      output += x;
    }
  });

  console.log(output);
});
