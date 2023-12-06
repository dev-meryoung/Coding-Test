/* 
  문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, queries) {
  let str = my_string;

  queries.forEach((q) => {
    const firStr = [...str].slice(0, q[0]).join('');
    const revStr = [...str]
      .slice(q[0], q[1] + 1)
      .reverse()
      .join('');
    const secStr = [...str].slice(q[1] + 1, str.length).join('');

    str = firStr + revStr + secStr;
  });

  return str;
}
