/* 
  연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
*/

function solution(num, total) {
  const dap = [];
  let hap = 0;
  let cnt = total;

  if (total === 0) {
    for (let i = 0; i < num; i++) {
      dap[i] = -~~(num / 2) + i;
    }
  }

  while (addArray(dap) !== total) {
    for (let i = 0; i < num; i++) {
      dap[i] = cnt - i;

      console.log(cnt - i);
    }

    cnt--;
  }

  return dap.sort((a, b) => a - b);
}

const addArray = (arr) => {
  let sum = 0;

  arr.forEach((n) => {
    sum += n;
  });

  return sum;
};
