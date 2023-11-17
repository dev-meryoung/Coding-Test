/*
  정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
  num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
  
  - num_list : [1, 2, 3, 4, 5, 6, 7, 8]
  - n : 2
  - result : [[1, 2], [3, 4], [5, 6], [7, 8]]
*/

const solution = (num_list, n) => {
  const dap = [];
  const inner = [];
  let cnt = 0;

  for (let i = 0; i < num_list.length / n; i++) {
    for (let j = 0; j < n; j++) {
      inner[j] = num_list[cnt];
      cnt++;
    }

    dap.push([...inner]);
  }

  return dap;
};

/*
  얕은 복사를 생각하지 못하고 로직을 짰다가 시간이 꽤 오래 걸렸다.
  그 외에도 직접 이중 for문으로 구현하지 않고 아래와 같이 slice() 함수를 사용해서 구현하는 방식이 더 좋은 것 같았다.

  function solution(num_list, n) {
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
  }
*/
