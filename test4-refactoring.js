function problem4(word) {
    // 1. 각각의 문자를 아스키코드로 변환하기 위해서 split메서드로 문자열을 배열로 만듭니다.
    const arr = word.split("");

    // 2. 알파벳을 아스키코드로 변환합니다.
    const arrCode = arr.map((el) => el.charCodeAt());

    // 3. ※알파벳인덱스(alphabetIndex) = ((a~z의 아스키코드 97~122) + 1) % (a의 아스키코드)
    //    ㄴ예시) a:1, b:2, c:3, ... , m:13, n:14, ... , x:24, y:25, z:26
    let alphabetIndex;
    const A_Code = "A".charCodeAt();
    const a_Code = "a".charCodeAt();

    /** 정반대 위치의 알파벳에 해당하는 아스키코드로 변환하는 함수입니다. */
    const alphaChange = () => {
        // 정반대 위치의 알파벳에 해당하는 아스키코드 = 아스키변환값 + (중앙에서부터 변환 목표까지의 거리 * 2) -1
        // 알파벳인덱스가 1~13일 때
        if (alphabetIndex < 14) {
            arrCode[i] += (14 - alphabetIndex) * 2 - 1;
        }
        // 알파벳인덱스가 14~26일 때
        if (alphabetIndex >= 14) {
            arrCode[i] -= (alphabetIndex - 13) * 2 - 1;
        }
    };

    for (i = 0; i < arrCode.length; i++) {
        // 띄어쓰기는 변환 대상에서 제외하기 위해 배열의 요소가 32가 아닌 경우에만 실행합니다.
        if (arrCode[i] === 32) {
            continue;
        }

        // 4. 대문자(A)일 때
        if (arrCode[i] < a_Code) {
            // ※알파벳인덱스(alphabetIndex)를 구합니다.
            alphabetIndex = (arrCode[i] + 1) % A_Code;
            // 정반대 위치의 알파벳에 해당하는 아스키코드로 변환합니다.
            alphaChange();
        }
        // 5. 소문자(a)일 때
        if (arrCode[i] >= a_Code) {
            alphabetIndex = (arrCode[i] + 1) % a_Code;
            alphaChange();
        }
    }

    // 6. 배열의 요소들을 아스키코드에서 문자열로 전환합니다.
    const resultArr = arrCode.map((el) => String.fromCharCode(el));

    // 7. 배열을 문자열로 합친 결과를 리턴합니다.
    console.log(resultArr.join(""));
    return resultArr.join("");
}

problem4("R olev blf");

// 1. 문자열을 배열로 전환합니다.
// 2. 알파벳을 아스키코드로 전환합니다.
// 3. 알파벳의 거리를 이용하기 위해 알파벳의 인덱스를 구합니다.

// 4. if (A인 경우)
// (1) 알파벳인덱스  1~13인 경우  : 아스키변환값 + (변환 목표까지의 거리)
// (2) 알파벳인덱스  14~26인 경우 : 아스키변환값 - (변환 목표까지의 거리)
// 5. if (a인 경우)에도 마찬가지로 (1)과 (2)를 실행합니다.

// 6. 배열의 요소들을 문자열로 전환합니다.
// 7. 배열을 문자열로 합친 결과를 리턴합니다.
