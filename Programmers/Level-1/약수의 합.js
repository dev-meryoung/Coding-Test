/* 
  정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

function solution(n) {
  let sum = 0;

  while (true) {
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }

    break;
  }

  return sum;
}
