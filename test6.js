// const forms = [
//     ["jm@email.com", "제이엠"],
//     ["jason@email.com", "제이슨"],
//     ["woniee@email.com", "워니"],
//     ["mj@email.com", "엠제이"],
//     ["nowm@email.com", "이제엠"],
// ];

const forms = [
    ["kim@email.com", "김ㅡ이"],
    ["nam@email.com", "ㅡ이야"],
    ["choi@email.com", "최강"],
    ["lee@email.com", "강합니다"],
    ["jun@email.com", "왜ㅇㅡ이야"],
];

function problem6(forms) {
    const nicknameObject = {};
    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < forms[i][1].length - 1; j++) {
            let pattern = forms[i][1][j] + forms[i][1][j + 1];
            nicknameObject[pattern] = 0;
        }
    }
    const nicknameArray = Object.keys(nicknameObject);
    // 모든 닉네임에 대해서 pattern이 각각 몇 번씩 나타나는지 확인
    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < nicknameArray.length; j++) {
            // 배열[i][1]에 patternArray[i]가 존재하는지 확인
            if (forms[i][1].includes(nicknameArray[j])) {
                nicknameObject[nicknameArray[j]] += 1;
            }
        }
    }
    console.log(nicknameObject, "11111111");

    const countArray = Object.entries(nicknameObject);
    const duplicationArray = countArray.filter((el) => el[1] > 1);
    // 중복이 존재하는 패턴만을 담은 중복패턴 배열 생성
    console.log(duplicationArray, "33333333333");

    const resultArray = [];
    // 중복패턴을 포함하는 아이디만을 걸러낸 배열 생성
    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < duplicationArray.length; j++) {
            if (forms[i][1].includes(duplicationArray[j][0])) {
                resultArray.push(forms[i][0]);
            }
        }
    }
    console.log(resultArray, "55555555555");

    // 중복을 제거하고 오름차순으로 정렬한 배열 반환
    const orderedResult = new Set([...resultArray]);
    const removedArray = [...orderedResult].sort();
    console.log(removedArray, "6666666666666666");
}

problem6(forms);
