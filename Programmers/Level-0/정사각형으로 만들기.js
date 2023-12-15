/* 
  이차원 정수 배열 arr이 매개변수로 주어집니다. arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(arr) {
  const arrLength = arr.length;
  const arr0Length = arr[0].length;

  if (arrLength > arr0Length) {
    for (let i = 0; i < arrLength; i++) {
      for (let j = 0; j < arrLength - arr0Length; j++) {
        arr[i].push(0);
      }
    }
  } else if (arrLength < arr0Length) {
    const temp = [];

    for (let i = 0; i < arr0Length; i++) {
      temp.push(0);
    }

    for (let i = 0; i < arr0Length - arrLength; i++) {
      arr.push(temp);
    }
  }

  return arr;
}
