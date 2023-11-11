/*
  정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (numbers) => {
  return numbers.map((number) => {
    return number * 2;
  });
};

/*
  이외에도 reduce() 함수를 사용하는 방식이 있었다.
  - reduce() : 인자로 acc(누산 값), cur(현재 값), init(초기값)을 받아 사용할 수 있으며 아래와 같이 사용할 수 있다.

  function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
  }
*/
