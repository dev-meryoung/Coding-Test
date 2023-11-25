/* 
  문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_str, n) {
  const dap = [];
  let temp = '';

  [...my_str].forEach((str, idx) => {
    temp += str;

    if ((idx + 1) % n === 0) {
      dap.push(temp);
      temp = '';
    } else if (idx === my_str.length - 1) {
      dap.push(temp);
    }
  });

  return dap;
}
