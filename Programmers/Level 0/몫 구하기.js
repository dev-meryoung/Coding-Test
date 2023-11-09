/*
값이 딱 나눠 떨어질 때는 큰 문제가 없었는데 문제에서 필요로 하는 값은 정수 값인 '몫'이기 때문에 paserInt를 사용했다.

이외에도 Math.floor()와 Math.trunc()를 사용하는 방법이 있었다.
- Math.floor() : 주어진 숫자보다 작거나 같은 가장 큰 정수 반환
- Math.trunc() : 소수점 이하 단순 제거
*/

function solution(num1, num2) {
  const answer = num1 / num2;
  return parseInt(answer);
}
