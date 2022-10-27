function problem2(cryptogram) {
    // splice 함수로 일치하는 문자열을 제외하기 위해 split함수로 배열로 만듭니다.
    let resolvedWord = cryptogram.split("");

    // 최초로 발견한 연속되는 문자열을 제외합니다.
    const findRepetition = (word) => {
        for (i = 0; i < word.length; i++) {
            // 연속되는 문자열을 발견하면,
            if (word[i] == word[i + 1]) {
                // 해달 문자열과 다음 문자열을 제외합니다.
                resolvedWord.splice(i, 2);
                break;
            }
        }
    };

    //  정규식으로 2개가 연속된 문자열 찾기 return boolean
    const reg = /(.)\1+/;

    // 2개가 연속된 문자열이 존재한다면
    while (reg.test(resolvedWord.join(""))) {
        // 해당 문자열을 제외하는 함수를 실행합니다.
        findRepetition(resolvedWord);
    }
    console.log(resolvedWord.join(""));
    return resolvedWord.join("");
}

problem2("browoanoommnaon");

// 1. a[i] == a[i+1] 인 문자열 찾기

// 2. 일치하는 문자열을 제외하기

// 3-1. 제외한 문자열로 일치하는 문자열이 없을 때까지 다시 시행하기
// 3-2. 정규식을 사용해 연속된 문자가 true인 조건일 때만 시행하기
// const reg = /(.)\1+/; 정규식으로 2개 이상 연속된 문자열 찾기 boolean

// 4. 결과를 반환하기
