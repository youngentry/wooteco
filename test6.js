const forms = [
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
];

function problem6(forms) {
    const result = [];

    let nameSet = new Set([]);
    // 1. forms의 길이만큼 for문 실행
    for (let i = 0; i < forms.length; i++) {
        // 2. 배열[i][1]의 길이만큼 for문 실행
        for (let j = 0; j < forms[i][1].length - 1; j++) {
            // 3. 연속되는 문자열을 모두 Set에 추가
            let pattern = forms[i][1][j] + forms[i][1][j + 1];
            nameSet.add(pattern);
        }
        // 4. nameArr = [...Set] Set을 배열로 만들기
        const nameArr = [...nameSet];
        // 5. nameArr 길이만큼 for문 실행
        for (let k = 0; k < nameArr.length; k++) {
            // 6. 배열[i][1]에 nameArr[i]가 존재하는지 확인
            console.log("forms[i][1]:", forms[i][1], "nameArr[i]:", nameArr[i]);
            if (forms[i][1].includes(nameArr[i])) {
                console.log("존재함", forms[i][1]);
                // 7. 존재한다면 배열[i][0]을 result에 추가하기
                result.push(forms[i][0]);
            }
        }
    }
    console.log(result);
}

problem6(forms);

// 1. forms의 길이만큼 for문 실행
// 2.   ㄴ배열[i][1]의 길이만큼 for문 실행
// 3.     ㄴ연속되는 문자열을 모두 Set에 추가
// 4. nameArr = [...Set] Set을 배열로 만들기
// 5. nameArr에 for문 실행
// 6. 배열[i][1]에 nameArr[i]가 존재하는지 확인
// 7. 존재한다면 배열[i][0]을 result에 추가하기

// 8. 예외사항 추가하기
