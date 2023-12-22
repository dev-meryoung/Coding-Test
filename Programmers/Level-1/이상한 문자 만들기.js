/* 
  문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
*/

function solution(s) {
  const arr = s.split(' ');
  let str = '';

  arr.forEach((a, idx) => {
    [...a].forEach((b, idx) => {
      if (idx % 2 === 0) {
        str += b.toUpperCase();
      } else {
        str += b.toLowerCase();
      }
    });

    if (idx !== arr.length - 1) {
      str += ' ';
    }
  });

  return str;
}
