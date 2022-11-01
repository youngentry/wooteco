const user = "Walter";
const friends = [
    ["Christa", "Alyce"],
    ["Hobart", "Retha"],
    ["Elijah", "Josh"],
    ["Cecil", "Lamont"],
    ["Eliza", "Lamont"],
    ["Austyn", "Retha"],
    ["Retha", "Mara"],
    ["Walter", "Lamont"],
    ["Retha", "Walter"],
    ["Urban", "Walter"],
];
const visitors = ["Cecil", "Eliza", "Adonis", "Mara"];

function problem5(user, friends, visitors) {
    // 1단계) mrko가 포함된 myFriends 배열생성하기
    const myFriends = [];

    for (let i = 0; i < friends.length; i++) {
        if (friends[i][1].includes(user)) {
            myFriends.push(friends[i][0]);
        }
        if (friends[i][0].includes(user)) {
            myFriends.push(friends[i][1]);
        }
    }
    console.log(myFriends, "<=== myFriends 내 친구 배열생성");

    // 2단계) 점수 카운트 조건에 유효한 친구관계만을 남기기
    const connection = friends.filter((el) => el[0] !== user && el[1] !== user);
    console.log(connection, "<=== connection 친구관계 배열 생성");

    // 배열 구성요소가 모두 친구인 경우와 모두 친구가 아닌 경우 제외하기
    for (let i = 0; i < connection.length; i++) {
        if (myFriends.includes(connection[i][0]) && myFriends.includes(connection[i][1])) {
            connection.splice(i, 1);
            console.log("<=== 모두 친구인 경우 제외하기");
        } else if (!myFriends.includes(connection[i][0]) && !myFriends.includes(connection[i][1])) {
            connection.splice(i, 1);
            console.log("<=== 모두 친구가 아닌 경우 제외하기");
        }
    }
    console.log(connection, "<=== connection");

    // 3단계) 조건에 유효한 친구관계 또는 방문자의 점수를 기록할 객체 생성
    const scores = {};
    for (let i = 0; i < connection.length; i++) {
        if (myFriends.includes(connection[i][0])) {
            scores[connection[i][1]] = 0;
        }
        if (myFriends.includes(connection[i][1])) {
            scores[connection[i][0]] = 0;
        }
    }
    for (let i = 0; i < visitors.length; i++) {
        if (!myFriends.includes(visitors[i])) {
            scores[visitors[i]] = 0;
        }
    }
    console.log(scores, "<=== 객체만들기");

    // 4단계) 점수를 카운트 하기 전 미리 이름 순으로 정렬
    const orderedScoresArray = Object.entries(scores).sort();
    const orderedScoresObject = Object.fromEntries(orderedScoresArray);
    console.log(orderedScoresObject, "<=== 객체정렬하기");

    // 5단계) 규칙에 따라 점수 기록
    for (let i = 0; i < connection.length; i++) {
        if (myFriends.includes(connection[i][0])) {
            orderedScoresObject[connection[i][1]] += 10;
        }
        if (myFriends.includes(connection[i][1])) {
            orderedScoresObject[connection[i][0]] += 10;
        }
    }
    for (let i = 0; i < visitors.length; i++) {
        if (!myFriends.includes(visitors[i])) {
            orderedScoresObject[visitors[i]] += 1;
        }
    }
    console.log(orderedScoresObject, "<=== 점수더하기");

    // 6단계) 점수가 가장 높은 순으로 정렬
    const orderedArray = Object.entries(orderedScoresObject).sort((a, b) => b[1] - a[1]);
    console.log(orderedArray, "<=== 점수 내림차순 배열");

    // 7단계) 형식에 맞게 배열로 변환하여 결과를 반환
    const result = orderedArray.map((el) => el[0]);
    console.log(result.slice(0, 5), "<=== result");
}

problem5(user, friends, visitors);
