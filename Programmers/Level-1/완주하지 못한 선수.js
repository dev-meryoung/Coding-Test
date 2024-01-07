/* 
  수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
  마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(participant, completion) {
  const map = new Map();

  participant.forEach((name) => {
    if (map.has(name)) {
      map.set(name, map.get(name) + 1);
    } else {
      map.set(name, 1);
    }
  });

  completion.forEach((name) => {
    if (map.get(name) === 1) {
      map.delete(name);
    } else {
      map.set(name, map.get(name) - 1);
    }
  });

  for (let [name] of map) {
    return name;
  }
}

/* 
  상당히 간단한 문제라고 생각했는데 효율성 테스트에서 계속 실패하는 탓에 Map 자료구조를 사용해서 구현했다.
  
  for (let [name] of map) {
    return name;
  }

  위와 같은 구문을 이용해 Map 자료구조에 남은 데이터(key 값)를 반환하도록 할 수 있다.
*/
