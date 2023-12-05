/* 
  정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
  각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
  위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr, queries) {
  queries.forEach((q) => {
    const temp1 = [...arr][q[0]];
    const temp2 = [...arr][q[1]];

    arr.forEach((num, idx) => {
      if (idx === q[0]) {
        arr[idx] = temp2;
      } else if (idx === q[1]) {
        arr[idx] = temp1;
      }
    });
  });

  return arr;
}

/* 
  내가 구현한 방식을 구조 분해 할당을 통해 훨씬 더 간결하게 아래처럼 구현하는 방법이 존재했다.

  function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
  }
*/
