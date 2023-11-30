/* 
  문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(before, after) {
  let temp = '';
  let arr = [...after];

  for (let i = 0; i <= before.length - 1; i++) {
    if (arr.indexOf([...before][i]) !== -1) {
      arr[arr.indexOf([...before][i])] = '';
      temp += [...before][i];
    } else {
      return 0;
    }
  }

  return 1;
}

/* 
  단순히 구성 요소가 같은지 판단하는 문제기 때문에 아래와 같이 정렬을 이용해 풀이할 수도 있었다.

  function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
  }
*/
