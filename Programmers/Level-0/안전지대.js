/* 
  다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
  
  - 그림 링크 (https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/124a2c93-da99-4643-96a8-292bb871f553/image.png)

  지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
  지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(board) {
  let cnt = board.length ** 2;
  const danger = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        danger.add(`${i}_${j}`);
        danger.add(`${i}_${j - 1}`);
        danger.add(`${i}_${j + 1}`);
        danger.add(`${i - 1}_${j}`);
        danger.add(`${i + 1}_${j}`);
        danger.add(`${i + 1}_${j + 1}`);
        danger.add(`${i - 1}_${j - 1}`);
        danger.add(`${i + 1}_${j - 1}`);
        danger.add(`${i - 1}_${j + 1}`);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (danger.has(`${i}_${j}`)) {
        cnt--;
      }
    }
  }

  return cnt;
}
