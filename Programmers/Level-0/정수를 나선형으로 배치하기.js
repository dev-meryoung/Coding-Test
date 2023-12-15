/* 
  양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(n) {
  const dap = [];
  const temp = [];
  let hang = 0;
  let yul = 0;
  let cnt = 1;
  let flag = 0;

  for (let j = 0; j < n; j++) {
    temp.push(0);
  }

  for (let i = 0; i < n; i++) {
    dap.push([...temp]);
  }

  while (cnt !== n ** 2 + 1) {
    dap[hang][yul] = cnt;

    cnt++;

    if (flag % 4 === 0) {
      yul++;

      if (yul === n - 1) {
        flag++;
      } else if (dap[hang][yul + 1] !== 0) {
        flag++;
      }
    } else if (flag % 4 === 1) {
      hang++;

      if (hang === n - 1) {
        flag++;
      } else if (dap[hang + 1][yul] !== 0) {
        flag++;
      }
    } else if (flag % 4 === 2) {
      yul--;

      if (yul === 0) {
        flag++;
      } else if (dap[hang][yul - 1] !== 0) {
        flag++;
      }
    } else if (flag % 4 === 3) {
      hang--;

      if (hang === 1) {
        flag++;
      } else if (hang !== 0 && dap[hang - 1][yul] !== 0) {
        flag++;
      }
    }
  }

  return dap;
}
