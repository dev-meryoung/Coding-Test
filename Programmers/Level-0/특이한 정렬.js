/* 
  정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numlist, n) {
  const arr = [];
  const dap = [];
  let cha = 0;
  let gap = 0;

  numlist.forEach((num, idx) => {
    arr.push({
      idx: idx,
      cha: Math.abs(num - n),
      num: num,
    });
  });

  arr.sort((a, b) => a.cha - b.cha || b.num - a.num);

  arr.forEach((a) => {
    if (cha === a.cha) {
      if (gap <= a.num) {
        dap.push(a.num);
      }
    } else {
      dap.push(a.num);
    }

    cha = a.cha;
  });

  return dap;
}

/* 
  비슷한 식으로 접근하긴 했지만 굳이 여러가지 불필요한 값을 안쓰고도 아래처럼 깔끔히 구현할 수 있는 문제였다.

  function solution(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
  }
*/
