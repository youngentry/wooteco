function problem4(word) {
    // 1. 문자열을 배열로 변환합니다.
    const arr = word.split("");

    // 2. 알파벳을 아스키 코드로 변환합니다.
    const arrCode = arr.map((el) => el.charCodeAt());

    const ACode = "A".charCodeAt();
    const aCode = "a".charCodeAt();
    // const 알파벳인덱스 = ( (문자 아스키코드 + 1) % (A or a 아스키코드) )

    for (i = 0; i < arrCode.length; i++) {
        let alphaIdx;
        if (arrCode[i] < aCode) {
            alphaIdx = (arrCode[i] + 1) % ACode;
        } else if (arrCode[i] >= aCode) {
            alphaIdx = (arrCode[i] + 1) % aCode;
        }
        // 4. if (A인 경우)
        if (arrCode[i] !== 32 && arrCode[i] < aCode) {
            // 4-1. 알파벳인덱스  1~13인 경우
            if (alphaIdx < 14) {
                // 아스키변환값 + (변환 목표까지의 거리)
                arrCode[i] += (14 - alphaIdx) * 2 - 1;
            }
            // 4-2. 알파벳인덱스  14~26인 경우
            if (alphaIdx >= 14) {
                // 아스키변환값 - (변환 목표까지의 거리)
                arrCode[i] -= (alphaIdx - 13) * 2 - 1;
            }
        }

        // 3. if (a인 경우)
        if (arrCode[i] !== 32 && arrCode[i] >= aCode) {
            // 3-1. 알파벳인덱스  1~13인 경우
            if (alphaIdx < 14) {
                // 아스키변환값 + (변환 목표까지의 거리)
                arrCode[i] += (14 - alphaIdx) * 2 - 1;
            }
            // 3-2. 알파벳인덱스  14~26인 경우
            if (alphaIdx >= 14) {
                // 아스키변환값 - (변환 목표까지의 거리)
                arrCode[i] -= (alphaIdx - 13) * 2 - 1;
            }
        }
    }

    // 5. 배열의 요소들을 문자열로 전환합니다.
    const resultArr = arrCode.map((el) => String.fromCharCode(el));
    // 6. 배열을 문자열로 합친 결과를 리턴합니다.
}

problem4("I love you");

// 1. 문자열을 배열로 전환합니다.
// 2. 알파벳을 아스키 코드로 전환합니다.

// const 알파벳인덱스 = ( (문자 아스키코드 + 1) % ( A or a 아스키코드 ) )
// 배열의 요소가 32가 아닌 경우
// 3. if (a인 경우)
// 3-1. 알파벳인덱스  1~13인 경우
// 아스키변환값 + (변환 목표까지의 거리)
// 3-2. 알파벳인덱스  14~26인 경우
// 아스키변환값 - (변환 목표까지의 거리)

// 4. if (A인 경우)
// 4-1. 알파벳인덱스  1~13인 경우
// 아스키변환값 + (변환 목표까지의 거리)
// 4-2. 알파벳인덱스  14~26인 경우
// 아스키변환값 - (변환 목표까지의 거리)

// 5. 배열의 요소들을 문자열로 전환합니다.
// 6. 배열을 문자열로 합친 결과를 리턴합니다.
