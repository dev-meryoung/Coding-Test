/*
  머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
*/

const solution = (n) => {
  if (n <= 7) return 1;

  if (n % 7) return Math.floor(n / 7 + 1);

  return n / 7;
};

/*
  조건문으로 나눈 뒤 Math.floor()를 사용해 해결한 나의 방법과 달리 Math.ceil()를 사용하면
  아래와 같이 소수점을 올림 처리해서 계산할 수 있기 때문에 훨씬 간결하게 만들 수 있다는 장점이 있었다. 

  function solution(n) {
      return Math.ceil(n / 7)
  }
*/
