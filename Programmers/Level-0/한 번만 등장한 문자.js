/* 
  문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
*/

const solution = (s) => {
  const arr = [...s].sort();
  let temp = '';
  let cnt = 0;
  let dap = '';

  if (arr.length <= 1) {
    return arr[0];
  }

  arr.forEach((str, idx) => {
    if (temp === '') {
      temp = str;
      return;
    } else if (temp !== str) {
      if (cnt === 0) {
        dap += temp;
      }

      if (idx === arr.length - 1) {
        dap += str;
        return;
      }

      temp = str;
      cnt = 0;
    } else {
      cnt++;
    }
  });

  return dap;
};

/* 
  비교적 간단한 로직이라고 생각했는데 떠오르지가 않아서 편법으로 해결한 느낌의 문제다.
  아래의 방식처럼 아주 심플하게 indexOf()와 lastIndexOf()를 이용해 해당 문자열이 유일한 값인지를 판별할 수 있다.

  function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
  }
*/
