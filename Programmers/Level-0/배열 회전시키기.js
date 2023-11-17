/* 
  정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (numbers, direction) => {
  const dap = [];
  const leng = numbers.length;
  let temp = 0;

  if (direction === 'left') {
    temp = numbers[0];

    for (let i = 1; i <= leng - 1; i++) {
      dap[i - 1] = numbers[i];
    }

    dap[leng - 1] = temp;
  } else {
    temp = numbers[leng - 1];

    for (let i = 0; i < leng - 1; i++) {
      dap[i + 1] = numbers[i];
    }

    dap[0] = temp;
  }

  return dap;
};

/* 
  임시 값을 처리하기 위한 temp 변수를 사용하지 않고도 pop()과 shift() 함수를 사용하는 방법도 좋아보였다.

  - pop() : 원본 배열의 마지막 요소를 제거하고 제거한 요소를 반환
  - shift() : 원본 배열의 첫 번째 요소를 제거하고 제거한 요소를 반환
*/
