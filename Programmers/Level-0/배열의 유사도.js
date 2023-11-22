/* 
  두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
*/

const solution = (s1, s2) => {
  let cnt = 0;

  s1.forEach((s) => {
    if (s2.find((x) => x === s)) cnt++;
  });

  return cnt;
};

/* 
  다른 방법으로는 아래와 같이 filter() 함수와 includes() 함수를 혼합해서 구현하는 방식이 있었다.

  function solution(s1, s2) {
    return s1.filter((v) => s2.includes(v)).length;
  }
*/
