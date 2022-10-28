function problem5(money) {
    // 1. 0~8까지의 인덱스별로 화폐의 단위를 각각 저장한 객체를 만듭니다.
    const values = {
        0: 50000,
        1: 10000,
        2: 5000,
        3: 1000,
        4: 500,
        5: 100,
        6: 50,
        7: 10,
        8: 1,
    };

    // 2. 요소를 0으로 채운 길이가 9인 배열을 만듭니다.
    const arr = Array.from({ length: 9 }, (el) => 0);

    let changes = money;

    for (i = 0; i < arr.length; i++) {
        // 지불할 화폐의 수를 count 합니다.
        let count = 0;
        // 4. 조건) 현재 지불하려는 화폐의 단위로 나눈 몫이 0보다 크면 실행합니다.
        while (Math.floor(changes / values[i]) > 0) {
            // 4. 지불하려는 화폐의 단위로 나눈 몫이 0보다 크면 count에 몫을 더합니다.
            count = Math.floor(changes / values[i]);
            // 5. 잔돈(changes)에서 지불한 비용만큼 빼줍니다.
            changes -= values[i] * Math.floor(changes / values[i]);
            // 6. 화폐의 단위에 해당하는 배열 인덱스에 count만큼을 더합니다.
            arr[i] += count;
        }
    }
    // 7. 배열을 반환합니다.
    console.log(arr);
    return arr;
}

problem5(50237);
problem5(15000);

// 1. 0~8까지의 인덱스별로 화폐의 단위를 각각 저장한 객체를 만듭니다.
// 2. 요소를 0으로 채운 길이가 9인 배열을 만듭니다.
// 3. 지불할 화폐의 수를 count 합니다.
// 4. 지불하려는 화폐의 단위로 나눈 몫이 0보다 크면 count에 몫을 더합니다.
// 5. 잔돈(changes)에서 지불한 비용만큼 빼줍니다.
// 6. 화폐의 단위에 해당하는 배열 인덱스에 count만큼을 더합니다.
// 7. 배열을 반환합니다.
