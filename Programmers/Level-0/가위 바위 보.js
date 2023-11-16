/* 
  가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
*/

const solution = (rsp) => {
  const rspArray = [...rsp];
  const winArray = [];

  rspArray.forEach((n) => {
    if (n === '0') winArray.push(5);
    if (n === '2') winArray.push(0);
    if (n === '5') winArray.push(2);
  });

  return winArray.join('');
};
