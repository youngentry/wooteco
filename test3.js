function problem3(number) {
    /**3. n을 10으로 나눈 몫이 0보다 클 경우 1의 시행을 반복합니다.
     * @params n => 숫자 Number
     */
    const clapCount = (n) => {
        while (n > 0) {
            // 1-1. n의 1의 자릿수가 3으로 나누어 떨어질 경우 박수 count에 1을 더합니다.
            // 1-2. 0은 항상 나누어떨어지기 때문에 조건처리합니다.
            if ((n % 10) % 3 === 0 && n % 10 !== 0) {
                count++;
            }

            // 2. 각 자리의 숫자를 모두 확인하기 위해서 n에 n을 10으로 나눈 몫을 할당합니다.
            n = Math.floor(n / 10);
        }
    };
    let count = 0;

    // 4. 1부터 입력받은 숫자(number)까지 1~3의 과정을 시행합니다.
    for (let i = 1; i <= number; i++) {
        clapCount(i);
    }

    console.log(count);
    return count;
}

problem3(35);

// 1. 입력받은 숫자 n의 1의 자릿수가 3으로 나누어 떨어질 경우 박수 count에 1을 더합니다.
// 1-2. 0은 항상 나누어떨어지기 때문에 조건처리합니다.
// 2. 각 자리의 숫자를 모두 확인하기 위해서 n을 10으로 나눕니다.
// 3. n을 10으로 나눈 몫이 0보다 클 경우 1의 시행을 반복합니다.
// 4. 1부터 number까지 1~2의 과정을 시행합니다.
