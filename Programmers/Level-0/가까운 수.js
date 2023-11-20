/* 
  정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
*/

const solution = (array, n) => {
  let most = array[0];
  let cha = Math.abs(n - array[0]);

  array.forEach((num) => {
    if (Math.abs(n - num) < cha) {
      cha = Math.abs(n - num);
      most = num;
    } else if (Math.abs(n - num) === cha) {
      if (most > num) {
        most = num;
      }
    }
  });

  return most;
};

/* 
  forEach문과 if, else if를 사용하지 않고도 아래처럼 구현할 수 있었다.

  function solution(array, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

    return array[0];
  }
*/
