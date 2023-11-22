/* 
  my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
*/

const solution = (my_string) => {
  const arr = my_string.split(' ');
  let sign = '';
  let dap = 0;

  arr.forEach((n, idx) => {
    if (idx === 0) {
      dap = +n;
      return;
    }

    if (idx % 2 === 1) {
      sign = n;
    } else {
      sign === '+' ? (dap += +n) : (dap += -n);
    }
  });

  return dap;
};
