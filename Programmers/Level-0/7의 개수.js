/* 
  머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
*/

function solution(array) {
  let cnt = 0;

  array.forEach((n) => {
    n.toString()
      .split('')
      .forEach((str) => {
        if (str === '7') cnt++;
      });
  });

  return cnt;
}

/* 
  아래와 같은 방식으로 '7'을 기준으로 split() 함수를 사용해 길이를 체크하는 방식도 사용할 수 있었다.
  
  function solution(array) {
    return array.join('').split('7').length-1;
  }
*/
