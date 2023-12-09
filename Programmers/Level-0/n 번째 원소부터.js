/* 
  정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list, n) {
  const dap = [];

  num_list.forEach((num, idx) => {
    if (idx + 1 >= n) dap.push(num);
  });

  return dap;
}
