function problem2(cryptogram) {
    // splice 함수로 일치하는 문자열을 제외하기 위해 split함수로 배열로 만듭니다.
    let wordArr = cryptogram.split("");

    /** 최초로 발견한 연속되는 문자열을 제외합니다.
     * @params word => 문자열 String
     */
    const findRepetition = (word) => {
        for (i = 0; i < word.length; i++) {
            // 1. 연속되는 문자열을 발견하면,
            if (word[i] == word[i + 1]) {
                // 2. 해당 문자열과 다음 문자열을 제외합니다.
                wordArr.splice(i, 2);
                break;
            }
        }
    };

    //  정규식으로 2개가 연속된 문자열 찾기 return boolean
    const reg = /(.)\1+/;

    // 3. 2개가 연속된 문자열이 존재한다면
    while (reg.test(wordArr.join(""))) {
        // 해당 문자열을 제외하는 함수를 실행합니다.
        findRepetition(wordArr);
    }

    console.log(wordArr.join(""));
    // 4. 배열을 문자열로 합친 결과를 반환합니다.
    return wordArr.join("");
}

problem2("zyalllelyz");

// 1. a[i] == a[i+1] 인 문자열 찾기

// 2. 일치하는 문자열을 제외하기

// 3. 정규식을 사용해 연속된 문자가 true인 조건일 때만 시행하기
// const reg = /(.)\1+/; 정규식으로 2개 이상 연속된 문자열 찾기 boolean

// 4. 결과를 반환하기
