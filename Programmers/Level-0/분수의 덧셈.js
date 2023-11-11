/*
  첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

const solution = (numer1, denom1, numer2, denom2) => {
  let numerGap = 0;
  let denomGap = 0;

  if (denom1 === denom2) {
    numerGap = numer1 + numer2;
    denomGap = denom1;
  } else {
    numerGap = numer1 * denom2 + numer2 * denom1;
    denomGap = denom1 * denom2;
  }

  if (numerGap === denomGap) {
    return [1, 1];
  }

  if (numerGap === 1 || denomGap === 1) {
    return [numerGap, denomGap];
  } else {
    for (let i = 2; i <= Math.min(numerGap, denomGap); i++) {
      if (numerGap % i === 0 && denomGap % i === 0) {
        numerGap = numerGap / i;
        denomGap = denomGap / i;
      }
    }

    return [numerGap, denomGap];
  }
};

/*
  코드를 작성하는 내내 올바르지 않게 코딩하고 있다는 생각이 들었다.
  다른 사람들의 풀이를 보고 느낀 점은 아래와 같다.

  1) 코테에서 다른 함수를 작성해서 사용해도 괜찮다는 사실을 알게 됐다는 것
  2) 기약 분수의 정의가 분자와 분모의 최대공약수가 1이라는 것 (분자, 분모가 1을 제외한 다른 수로 더 이상 나눠지지 않는 것이라고는 생각했지만 그게 결국 그 말이었다.)
  3) 아래와 같이 최대 공약수를 구하는 함수를 재귀 함수의 형태로 만들면 훨씬 로직을 간단하게 처리할 수 있다는 것

  function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
  }
*/
