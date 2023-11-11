/*
  최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
*/

const solution = (array) => {
  const numbers = [];

  array.forEach((num) => {
    if (numbers.find((number) => number.id === num)) {
      const idx = numbers.findIndex((number) => number.id === num);
      numbers[idx].count += 1;
    } else {
      numbers.push({
        id: num,
        count: 1,
      });
    }
  });

  let maxCount = 0;

  numbers.forEach((number) => {
    if (number.count > maxCount) {
      maxCount = number.count;
    }
  });

  const dap = numbers.filter((number) => number.count === maxCount);

  if (dap.length > 1) {
    return -1;
  } else {
    return dap[0].id;
  }
};

/*
  꽤나 시간이 걸린 문제였고 풀면서 분명히 더 간단한 방법이 있을 거라는 생각이 들었다.
  의식의 흐름대로 주어진 배열을 forEach를 이용해 한 번씩 검사하고 새로운 numbers 배열에 숫자와 해당 숫자가 나올 때마다
  카운트를 올리도록 구현했다. 그 이후에는 가장 높게 카운트 된 횟수가 몇인지 확인하고 결과적으로 filter() 함수를 이용해
  가장 높은 카운트 횟수를 가진 배열만 추려낸 뒤 중복 여부에 따라 출력하도록 했다.

  다른 사람의 풀이를 참고해보니 배열이 아닌 Map을 이용하거나 reduce() 함수를 사용했다.

  - Map 사용 방식
  function solution(array) {
      let m = new Map();
      for (let n of array) m.set(n, (m.get(n) || 0)+1);
      m = [...m].sort((a,b)=>b[1]-a[1]);
      return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
  }

  - reduce() 함수 사용 방식
  const solution = (array) => {
      const counter = array.reduce((acc, cur) => ({
          ...acc,
          [cur]: (acc[cur] || 0) + 1
      }), {})

      const items = Object.keys(counter).map((key) => [
          Number(key), counter[key]
      ]).sort((a, b) => b[1] - a[1])

      if (items[0][1] === items?.[1]?.[1]) {
          return -1
      }

      return items[0][0];
  }
*/
