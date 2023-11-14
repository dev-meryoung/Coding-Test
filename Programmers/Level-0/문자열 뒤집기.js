/*
  문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (my_string) => {
  const array = my_string.split('');
  let dap = '';

  array.reverse();

  array.forEach((str) => {
    dap += str;
  });

  return dap;
};

/*
  굳이 forEach문을 사용하지 않더라도 join() 함수를 이용하면 배열의 모든 요소를 연결해 문자열로 변환할 수 있었다.
*/
