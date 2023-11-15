/*
  정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
*/

const solution = (numbers, num1, num2) => {
  return numbers.slice(num1, num2 + 1);
};

/*
  slice() 함수에 대해서 착각한 것은 두 번째 사용되는 인자는 끝 인덱스 값을 의미하는데,
  이때 사용된 인덱스에 해당하는 값은 포함되지 않는다는 것이다. 따라서 +1을 해줘야 의도에 맞게 사용된다.
*/
