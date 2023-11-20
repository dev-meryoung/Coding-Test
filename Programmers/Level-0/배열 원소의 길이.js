/* 
  문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
*/

const solution = (strlist) => {
  const arr = [];

  strlist.forEach((str) => {
    arr.push(str.length);
  });

  return arr;
};

/* 
  새로운 배열을 만들고 forEach문을 돌려 직접 push() 함수를 사용하는 방식 말고도 map() 함수를 사용해서
  똑같은 처리를 조금 더 간단하게 구현하는 방법도 가능했다.
*/
