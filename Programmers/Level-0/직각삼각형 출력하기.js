/*
  "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let str = '';

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  for (let i = 1; i <= input[0]; i++) {
    str += '*';

    console.log(str);
  }
});

/*
  직접 str에 '*'을 더하는 방식이 아니라 repeat() 함수를 사용하면 string 값을 여러번 반복해서 나타낼 수 있다.
*/
