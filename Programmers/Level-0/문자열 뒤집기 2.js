/* 
  문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, s, e) {
  let w1 = '';
  let w2 = '';
  let w3 = '';

  for (let i = 0; i <= my_string.length - 1; i++) {
    if (i < s) {
      w1 += [...my_string][i];
    } else if (i >= s && i <= e) {
      w2 += [...my_string][i];
    } else {
      w3 += [...my_string][i];
    }
  }

  return w1 + [...w2].reverse().join('') + w3;
}
