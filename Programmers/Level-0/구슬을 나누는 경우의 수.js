/* 
  머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
*/

const solution = (b, s) => {
  let numer = 1;
  let denom1 = 1;
  let denom2 = 1;

  for (let i = 1; i <= b; i++) {
    numer *= i;
  }

  for (let i = 1; i <= b - s; i++) {
    denom1 *= i;
  }

  for (let i = 1; i <= s; i++) {
    denom2 *= i;
  }

  return Math.round(numer / (denom1 * denom2));
};

/*
  힌트로 수식을 알려줘서 수월하게 풀 수 있었던 문제였다.
*/
