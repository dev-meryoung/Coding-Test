/* 
  선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

  lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.

  - 그림(https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/e4122d8b-9ce2-49ce-a360-3d1284babd8a/line_2.png)

  선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.
*/

function solution(lines) {
  const xArr = [];
  const yArr = [];
  const zArr = [];

  const temp = new Set();

  lines.forEach((l, idx) => {
    if (idx === 0) {
      for (let i = l[0]; i <= l[1]; i++) {
        xArr.push(i);
      }
    } else if (idx === 1) {
      for (let i = l[0]; i <= l[1]; i++) {
        yArr.push(i);
      }
    } else {
      for (let i = l[0]; i <= l[1]; i++) {
        zArr.push(i);
      }
    }
  });

  for (let i = 0; i < xArr.length - 1; i++) {
    if (
      (yArr.includes(xArr[i]) && yArr.includes(xArr[i + 1])) ||
      (zArr.includes(xArr[i]) && zArr.includes(xArr[i + 1]))
    )
      temp.add(`${xArr[i]}, ${xArr[i + 1]}`);
  }

  for (let i = 0; i < zArr.length - 1; i++) {
    if (
      (yArr.includes(zArr[i]) && yArr.includes(zArr[i + 1])) ||
      (xArr.includes(zArr[i]) && xArr.includes(zArr[i + 1]))
    )
      temp.add(`${zArr[i]}, ${zArr[i + 1]}`);
  }

  return temp.size;
}

/* 
  간단하게 해결될 줄 알았는데 생각보다 변수가 많아서 시간이 오래 걸렸다.
  
  아래와 같은 신박한 방법으로 풀이할 수도 있었다.

  function solution(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) line[a+100]++;
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
  }
*/
