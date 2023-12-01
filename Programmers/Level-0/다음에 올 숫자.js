/* 
  등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(common) {
  if (common[0] - common[1] === common[1] - common[2]) {
    let cha = common[0] - common[1];

    return common[common.length - 1] - cha;
  } else {
    let mok = common[1] / common[0];

    return common[common.length - 1] * mok;
  }
}
