/* 
  어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
*/

const solution = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i ** 2 === n) {
      return 1;
    }
  }

  return 2;
};

/* 
  나는 직접 for문을 돌려 제곱을 해서 확인하는 방식을 선택했는데, 제곱근을 반환하는 함수 sqrt()를 사용하면 더 쉽게 구현할 수 있었다.
  
  function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
  }
*/
