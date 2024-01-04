/* 
  두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.  
  예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
  두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.
*/

function solution(X, Y) {
  const jk = [];
  const xArr = [...X];
  const yArr = [...Y];
  const xNum = [];
  const yNum = [];

  xNum.length = 10;
  yNum.length = 10;
  xNum.fill(0);
  yNum.fill(0);

  xArr.forEach((x) => {
    xNum[+x]++;
  });

  yArr.forEach((y) => {
    yNum[+y]++;
  });

  for (let i = 0; i < 10; i++) {
    if (xNum[i] === 0 || yNum[i] === 0) {
      continue;
    }

    if (xNum[i] > yNum[i]) {
      for (let j = 0; j < yNum[i]; j++) {
        jk.push('' + i);
      }
    } else {
      for (let j = 0; j < xNum[i]; j++) {
        jk.push('' + i);
      }
    }
  }

  if (jk.indexOf('0') === 0 && jk.lastIndexOf('0') === jk.length - 1) {
    return '0';
  }

  return jk.length === 0 ? '-1' : jk.sort((a, b) => b - a).join('');
}

/* 
  맨 처음에는 X와 Y의 모든 숫자를 순회하며 짝이 맞을 때 소거하고 정답 배열에 추가하는 방식으로 구현했었는데,
  시간 복잡도가 너무 높다보니 문제가 되었다. 이후에 도전한 방식은 두 숫자를 딱 1번씩만 순회해 포함된 숫자의 개수를 파악하고
  더 적은 숫자(짝이 맞아야하므로)를 사용하는 방식의 로직으로 바꿔서 구현했다.
*/
