/* 
  명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

  아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

  - 명함 번호	가로 길이	세로 길이
    1         60	      50
    2       	30      	70
    3       	60      	30
    4       	80      	40

  가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.
  모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(sizes) {
  let max = Math.max(
    ...sizes
      .join()
      .split(',')
      .map((str) => {
        return +str;
      })
  );
  let another = Math.min(
    ...sizes
      .join()
      .split(',')
      .map((str) => {
        return +str;
      })
  );

  sizes.forEach((s) => {
    if (s[0] > another) {
      if (s[1] > another) {
        if (s[0] > s[1]) {
          another = s[1];
        } else {
          another = s[0];
        }
      }
    } else {
      if (s[0] > another) {
        if (s[0] > s[1]) {
          another = s[1];
        } else {
          another = s[0];
        }
      }
    }
  });

  return max * another;
}

/* 
  오랜만에 시간을 꽤 잡아먹은 문제였다. 이렇게 오래 걸리는 문제의 특징은 내 풀이보다 훨씬 간단한 풀이가 존재한다는 확신이 푸는 과정에서 계속해서 든다는 것이다.
  아래와 같이 map() 함수와 forEach문을 이용해 구현할 수 있다.

  function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
  }

  기본적으로 해당 문제에서는 어떤 값을 더 길다고 기준 잡을지를 정해야 하는데, 위에서는 h 값을 항상 높은 값으로 지정(회전)했다.
  그 이후에는 h와 w를 순회하며 각각의 최댓값을 구하면 된다.
*/
