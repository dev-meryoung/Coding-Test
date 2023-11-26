/* 
  정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  const sortArray = numbers.sort((a, b) => a - b);

  return sortArray[0] * sortArray[1] >
    sortArray[sortArray.length - 2] * sortArray[sortArray.length - 1]
    ? sortArray[0] * sortArray[1]
    : sortArray[sortArray.length - 2] * sortArray[sortArray.length - 1];
}

/* 
  음수를 곱한 최댓값과 양수를 곱한 최댓값의 비교를 직접 수행하지 않고 Math.max() 함수를 사용하는 방법도 가능했다.
*/
