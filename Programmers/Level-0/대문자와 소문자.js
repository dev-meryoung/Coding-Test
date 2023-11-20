/* 
  문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (my_string) => {
  const arr = [...my_string].map((str) => {
    if (str === str.toLowerCase()) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });

  return arr.join('');
};
