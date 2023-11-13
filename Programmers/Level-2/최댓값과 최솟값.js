/*
  문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
  예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
*/

const solution = (s) => {
  const s_array = s.split(' ');
  const n_array = [];

  s_array.forEach((s) => {
    n_array.push(+s);
  });

  n_array.sort((a, b) => a - b);

  return `${n_array[0]} ${n_array[n_array.length - 1]}`;
};

/*
  다른 풀이로는 아래와 같이 문자열에 Math.min()과 Math.max()를 사용하는 방식이 있었다.
  당연히 문자열 값이기 때문에 숫자로 변환하고 배열에 넣어 정렬하는 방식이 필요하다고 생각했는데 꽤나 신선하게 느껴졌다.

  const solution = (s) => {
    const array = s.split(' ');

    return Math.min(...arr) + ' ' + Math.max(...arr);
  }
*/
