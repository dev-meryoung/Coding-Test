/* 
  두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
*/

function solution(n, m) {
  let gys = 1;
  let gbs = 1;

  for (let i = 1; i <= Math.max(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gys = i;
    }
  }

  for (let i = Math.max(n, m); i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      gbs = i;
      break;
    }
  }

  return [gys, gbs];
}

/* 
  위의 과정을 거치지 않고도 간단하게 최대공약수와 최소공배수를 아래와 같이 구할 수 있다.

  function gcdlcm(a, b) {
    let r;
    for(let ab = a*b ; r = a % b ; a = b, b = r){}
    return [b, ab/b];
  }

  이때, 최대공약수를 유클리드 호제법으로 구할 수 있다.
  r = a % b 계산을 a = b와 b = r의 대입을 진행하며 반복하면, 나머지가 0이 되는 순간의 b가 최대공약수다.
  그리고 해당 최대 공약수로 주어진 두 수를 나누면 최소공배수를 구할 수 있다.  
*/
