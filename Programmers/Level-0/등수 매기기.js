/* 
  영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(score) {
  const arr = [];
  const dap = [];
  let rank = 0;
  let cnt = 0;
  let now = 0;

  score.forEach((s, idx) => {
    const p = (s[0] + s[1]) / 2;

    arr.push([p, idx]);
  });

  arr
    .sort((a, b) => b[0] - a[0])
    .forEach((a, idx) => {
      if (now === a[0]) {
        a.push(rank);
        cnt++;
      } else {
        rank++;

        now = a[0];

        if (cnt > 0) {
          rank += cnt;
          cnt = 0;
        }

        a.push(rank);
      }
    });

  arr
    .sort((a, b) => a[1] - b[1])
    .forEach((a) => {
      dap.push(a[2]);
    });

  return dap;
}

/* 
  변수도 너무 많이 사용됐고 풀이하는데 시간이 생각보다 많이 걸렸다. 조금 더 다양한 방식을 생각했어야 했는데 하나에 꽂혀서
  다른 방식은 생각도 하지 못한 것 같다. 아래처럼 구현할 수 있는데, 결국 순서는 내 앞에 몇 명이 존재하는지를 뜻한다.

  function solution(score) {
    return score.map((el) => {
      return (
        score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
      );
    });
  }
*/
