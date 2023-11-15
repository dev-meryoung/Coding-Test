/*
  문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (my_string, letter) => {
  const strArray = [...my_string];

  strArray.forEach((str, i) => {
    if (str === letter) {
      strArray[i] = '';
    }
  });

  return strArray.join('');
};

/*
  replaceAll() 함수를 사용하거나 split() 함수를 이용해 바로 주어진 my_string에서 letter를 제거하는 방법도 있었다.
*/
