function problem1(pobi, crong) {
    // 1 : 책을 임의로 펼친다. >>> 페이지 숫자를 입력받습니다.
    [pobiL, pobiR, crongL, crongR] = [undefined, undefined, undefined, undefined];
    if (Array.isArray(pobi)) {
        [pobiL, pobiR, crongL, crongR] = [pobi[0], pobi[1], crong[0], crong[1]];
    }

    // 6. 예외사항을 추가합니다.
    // 6-(1) 모든 수는 2~399 페이지 사이의 수여야 합니다.
    if (pobiL <= 1 || pobiR <= 1 || crongL <= 1 || crongR <= 1) {
        return -1;
    }
    if (pobiL >= 400 || pobiR >= 400 || crongL >= 400 || crongR >= 400) {
        return -1;
    }
    // 6-(2) [오른쪽 페이지] - [왼쪽 페이지]의 값은 1 이어야 합니다.
    if (pobiR - pobiL !== 1 || crongR - crongL !== 1) {
        return -1;
    }

    // 2-1, 3-1 : 각 자리 숫자를 모두 더하는 함수를 만듭니다.
    const sum = (n) => {
        let sumIs = 0;
        while (n > 0) {
            sumIs += n % 10;
            n = parseInt(n / 10);
        }
        return sumIs;
    };

    // 2-2, 3-2 : 각 자리 숫자를 모두 곱하는 함수를 만듭니다.
    const multiply = (n) => {
        let multiplyIs = 1;
        while (n > 0) {
            multiplyIs *= n % 10;
            n = parseInt(n / 10);
        }
        return multiplyIs;
    };

    // 4-1. 가장 큰 수를 본인의 점수로 만드는 함수를 만듭니다.
    const getBigNum = (nameL, nameR) => {
        return Math.max(sum(nameL), sum(nameR), multiply(nameL), multiply(nameR));
    };

    // 4-2. 본인의 점수를 구합니다.
    const pobiNum = getBigNum(pobiL, pobiR);
    const crongNum = getBigNum(crongL, crongR);

    // 5.요구사항에 따라서 게임의 승자를 구합니다.
    // pobi 승리
    if (pobiNum > crongNum) {
        return 1;
    }
    // crong 승리
    if (pobiNum < crongNum) {
        return 2;
    }
    // 무승부
    if (pobiNum === crongNum) {
        return 0;
    }
}

problem1();

module.exports = problem1;
