/* 
  영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
*/

const solution = (numbers) => {
  let str = '';
  let num = '';

  [...numbers].forEach((n) => {
    str += n;

    if (str === 'zero') {
      num += '0';
      str = '';
    } else if (str === 'one') {
      num += '1';
      str = '';
    } else if (str === 'two') {
      num += '2';
      str = '';
    } else if (str === 'three') {
      num += '3';
      str = '';
    } else if (str === 'four') {
      num += '4';
      str = '';
    } else if (str === 'five') {
      num += '5';
      str = '';
    } else if (str === 'six') {
      num += '6';
      str = '';
    } else if (str === 'seven') {
      num += '7';
      str = '';
    } else if (str === 'eight') {
      num += '8';
      str = '';
    } else if (str === 'nine') {
      num += '9';
      str = '';
    }
  });

  return +num;
};

/* 
  문제를 푸는 내내 분명히 이 방식보다 훨씬 좋은 방법이 있다는 생각이 들었다.
  대부분의 경우에 숫자에 해당하는 소문자를 배열이나 객체에 넣고 replace() 혹은 reduce()를 사용하거나 아래의 방식으로 구현했다.

  function solution(numbers) {
    const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0 ; i<number.length; i++){
        numbers = numbers.split(number[i]).join(i)
    }
    return +numbers
}
*/
