/* 
  문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (my_string) => {
  const arr = my_string.split('');
  let sum = 0;

  arr.forEach((str) => {
    if (+str * 1 === str * 1) {
      sum += +str;
    }
  });

  return sum;
};
