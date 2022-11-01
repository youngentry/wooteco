const forms = [
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
    ["jasp@email.com", "박이김"],
    ["jp@email.com", "김이박"],
    ["qpw@email.com", "김이순"],
    ["teemo@email.com", "티모"],
    ["banana@email.com", "대위티모"],
    ["secondJm@email.com", "제이엠"],
    ["apple@email.com", "땷횱봵"],
    ["stran@email.com", "횱봵으"],
    ["zebra@email.com", "두글자이상의문자가연속적으로이제맞티모"],
];

function problem6(forms) {
    const result = [];

    // 모든 연속되는 문자열을 담은 집합을 구하는 함수
    let nameSet = new Set([]);
    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < forms[i][1].length - 1; j++) {
            let pattern = forms[i][1][j] + forms[i][1][j + 1];
            nameSet.add(pattern);
        }
    }
    console.log(nameSet, "00000000");

    // 패턴이 몇 번 나타나는지 count 하기위해 [pattern, 0] 배열을 생성
    const patternArray = [...nameSet];
    for (let i = 0; i < patternArray.length; i++) {
        patternArray[i] = [patternArray[i], 0];
    }

    // 모든 닉네임에 대해서 pattern이 각각 몇 번씩 나타나는지 확인
    for (let i = 0; i < forms.length; i++) {
        for (let k = 0; k < patternArray.length; k++) {
            // 배열[i][1]에 patternArray[i]가 존재하는지 확인
            if (forms[i][1].includes(patternArray[k][0])) {
                // 존재한다면 배열[i][0]을 result에 추가하기
                result.push([forms[i][0], patternArray[k][0]]);
            }
        }
    }
    console.log(result, "11111111");

    // 패턴이 나타나는 횟수를 카운트
    for (let i = 0; i < patternArray.length; i++) {
        for (let k = 0; k < result.length; k++) {
            if (patternArray[i][0].includes(result[k][1])) {
                patternArray[i][1] += 1;
            }
        }
    }
    console.log(patternArray, "2222222222");

    // 중복이 존재하는 패턴만을 담은 중복패턴 배열 생성
    const dupleArray = patternArray.filter((el) => el[1] > 1);
    console.log(dupleArray, "33333333333");
    console.log(result, "4444444444");

    // 중복패턴을 포함하는 아이디만을 걸러낸 배열 생성
    const thisIsResult = [];
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < dupleArray.length; j++) {
            if (result[i][1].includes(dupleArray[j][0])) {
                thisIsResult.push(result[i][0]);
            }
        }
    }
    console.log(thisIsResult, "55555555555");

    // 중복을 제거하고 오름차순으로 정렬한 배열 반환
    const setset = new Set([...thisIsResult]);
    console.log([...setset].sort(), "6666666666666666");
}

problem6(forms);
