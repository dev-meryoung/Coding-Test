/*
  우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (age) => {
  const strArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let num1000 = ~~(age / 1000);
  let num100 = ~~((age - num1000 * 1000) / 100);
  let num10 = ~~((age - num1000 * 1000 - num100 * 100) / 10);
  let num1 = ~~(age - num1000 * 1000 - num100 * 100 - num10 * 10);

  if (age >= 1000) {
    return (
      strArray[num1000] + strArray[num100] + strArray[num10] + strArray[num1]
    );
  } else if (age >= 100 && age <= 999) {
    return strArray[num100] + strArray[num10] + strArray[num1];
  } else if (age >= 10 && age <= 99) {
    console.log(num10);
    return strArray[num10] + strArray[num1];
  } else if (age >= 1 && age <= 9) {
    return strArray[num1];
  }
};

/*
  age 값을 toString() 함수를 이용해 문자열로 변환해 자릿수에 맞는 값을 얻어내는 방식도 사용할 수 있었다.
*/
