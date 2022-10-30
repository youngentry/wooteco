function problem1(pobi, crong) {
    // 1단계) 입력받은 배열을 각각 변수로 저장
    // [pobiLeftPage, pobiRightPage, crongLeftPage, crongRightPage] = [null, null, null, null];
    if (Array.isArray(pobi)) {
        [pobiLeftPage, pobiRightPage, crongLeftPage, crongRightPage] = [pobi[0], pobi[1], crong[0], crong[1]];
    }

    // 6. 예외사항을 추가합니다.
    // 6-(1) 입력받은 모든 수는 2~399 사이의 수여야 합니다.
    if (pobiLeftPage <= 1 || pobiRightPage <= 1 || crongLeftPage <= 1 || crongRightPage <= 1) {
        console.log(-11);
        return -1;
    }
    if (pobiLeftPage >= 400 || pobiRightPage >= 400 || crongLeftPage >= 400 || crongRightPage >= 400) {
        console.log(-12);
        return -1;
    }
    // 6-(2) rightPage - leftPage = 1 이어야 합니다.
    if (pobiRightPage - pobiLeftPage !== 1 || crongRightPage - crongLeftPage !== 1) {
        console.log(-13);
        return -1;
    }

    /** 2-1, 3-1 : 각 자리 숫자를 모두 더하는 함수입니다. */
    const sum = (n) => {
        let sumIs = 0;
        while (n > 0) {
            sumIs += n % 10;
            n = parseInt(n / 10);
        }
        return sumIs;
    };
    /** 2-2, 3-2 : 각 자리 숫자를 모두 곱하는 함수입니다. */
    const multiply = (n) => {
        let multiplyIs = 1;
        while (n > 0) {
            multiplyIs *= n % 10;
            n = parseInt(n / 10);
        }
        return multiplyIs;
    };

    /**  4-1. 가장 큰 수를 구하는 함수입니다. */
    const getBigScore = (nameLelftPage, nameRightPage) => {
        return Math.max(sum(nameLelftPage), sum(nameRightPage), multiply(nameLelftPage), multiply(nameRightPage));
    };

    // 4-2. 본인의 점수를 구합니다.
    const pobiSocre = getBigScore(pobiLeftPage, pobiRightPage);
    const crongScore = getBigScore(crongLeftPage, crongRightPage);

    // 5.요구사항에 따라서 게임의 승자를 구합니다. 1:pobi승리 2:crong승리 0:무승부
    if (pobiSocre > crongScore) {
        console.log(1);
        return 1;
    }
    if (pobiSocre < crongScore) {
        console.log(2);
        return 2;
    }
    if (pobiSocre === crongScore) {
        console.log(0);
        return 0;
    }
}

problem1([99, 100], [2, 3]);

module.exports = problem1;
