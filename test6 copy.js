const forms = [
    ["kim@email.com", "김ㅡ이"],
    ["nam@email.com", "ㅡ이야"],
    ["choi@email.com", "최강"],
    ["lee@email.com", "강합니다"],
    ["jun@email.com", "왜ㅇㅡ이야"],
];

function problem6(forms) {
    const result = [];

    let nicknameSet = new Set([]);
    // 1단계) 모든 연속되는 패턴을 담은 집합을 구하는 함수
    for (let i = 0; i < forms.length; i++) {
        let nickname = forms[i][1];
        for (let j = 0; j < nickname.length - 1; j++) {
            nicknameSet.add(nickname[j] + nickname[j + 1]);
        }
    }

    // 모든 연속되는 문자열을 담은 집합을 구하는 함수
    console.log(nicknameSet, "00000000");

    // 패턴이 몇 번 나타나는지 count 하기위해 [pattern, 0] 배열을 생성
    const patternArray = [...nicknameSet];
    for (let i = 0; i < patternArray.length; i++) {
        patternArray[i] = [patternArray[i], 0];
    }

    const includedPatternArray = [];
    // 3단계) 모든 닉네임에 대해 생성될 수 있는 패턴을 확인
    for (let i = 0; i < forms.length; i++) {
        for (let k = 0; k < patternArray.length; k++) {
            let pattern = patternArray[k][0];
            if (forms[i][1].includes(pattern)) {
                includedPatternArray.push([forms[i][0], pattern]);
            }
        }
    }

    // 4단계) 패턴이 나타나는 횟수를 카운트
    for (let i = 0; i < patternArray.length; i++) {
        for (let k = 0; k < includedPatternArray.length; k++) {
            if (patternArray[i][0].includes(includedPatternArray[k][1])) {
                patternArray[i][1] += 1;
            }
        }
    }
    console.log(patternArray, "2222222222");

    // 중복이 존재하는 패턴만을 담은 중복패턴 배열 생성
    const dupleArray = patternArray.filter((el) => el[1] > 1);
    console.log(dupleArray, "33333333333");
    console.log(includedPatternArray, "4444444444");

    // 중복패턴을 포함하는 아이디만을 걸러낸 배열 생성
    const thisIsResult = [];
    for (let i = 0; i < includedPatternArray.length; i++) {
        for (let j = 0; j < dupleArray.length; j++) {
            if (includedPatternArray[i][1].includes(dupleArray[j][0])) {
                thisIsResult.push(includedPatternArray[i][0]);
            }
        }
    }
    console.log(thisIsResult, "55555555555");

    // 중복을 제거하고 오름차순으로 정렬한 배열 반환
    const setset = new Set([...thisIsResult]);
    console.log([...setset].sort(), "6666666666666666");
}

problem6(forms);
