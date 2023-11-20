/* 
  문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (my_string) => {
  const arr = [];

  [...my_string].forEach((str) => {
    if (arr.find((s) => s === str)) {
      return;
    }

    arr.push(str);
  });

  return arr.join('');
};

/* 
  특정 값의 중복을 체크하는 방법에서 많이 사용되는 것이 아래처럼 Set 자료구조를 사용하는 것이다.

  function solution(my_string) {
    return [...new Set(my_string)].join('');
  }

  사실 익숙하지는 않지만 Set 자료구조의 특징이 순서가 없고 중복되지 않은 데이터의 집합이라는 것을 기억하자.
*/
