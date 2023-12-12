/* 
  정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(arr) {
  const checkArr = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
  let cnt = 0;

  while (checkArr.indexOf(arr.length + cnt) === -1) {
    cnt++;
  }

  for (let i = 1; i <= cnt; i++) {
    arr.push(0);
  }

  return arr;
}
