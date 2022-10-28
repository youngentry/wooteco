const forms = [
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
];

function problem6(forms) {
    console.log(forms);
}

problem6(forms);

// 1. forms의 길이만큼 for문 실행
// 2.   ㄴ배열[i][1]의 길이만큼 for문 실행
// 3.     ㄴ연속되는 문자열을 모두 Set에 추가
// 4. 배열[i][1]이 patternArr = [...Set]에 존재하는지 확인
// 5. 존재한다면 배열[i][0]을 result에 추가하기

// 6. 예외사항 추가하기
