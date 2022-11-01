const makeName = (index) => {
    return Array(30)
        .fill()
        .map((_, chIndex) => "az"[index & (1 << chIndex) ? 1 : 0])
        .join("");
};
const user = "mrko";

function problem7(user, friends, visitors) {
    // 1단계) mrko가 포함된 myFriends 배열생성하기 ["jun", "donut", "shakevan"]
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

    // 2단계) 카운트할 수 있는 친구관계만 남기기
    // user를 친구관계 목록에서 제외하기
    const connection = friends.filter((el) => el[0] !== user && el[1] !== user);
    console.log(connection, "<=== connection 친구관계 배열 생성");

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

    const orderedScoresArray = Object.entries(scores).sort();
    const orderedScoresObject = Object.fromEntries(orderedScoresArray);
    console.log(orderedScoresObject, "<=== 객체정렬하기");

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

    const orderedArray = Object.entries(orderedScoresObject).sort((a, b) => b[1] - a[1]);
    console.log(orderedArray, "<=== 점수 내림차순 배열");

    const result = orderedArray.map((el) => el[0]);
    console.log(result.slice(0, 5), "<=== result");
}

problem7(
    user,
    [
        ...Array(5000)
            .fill()
            .map((_, index) => [user, makeName(index)]), // 0~4999까지 친구
        ...Array(5000)
            .fill()
            .map((_, index) => [makeName(index), makeName(5000 + index)]), // 5000~9999까지 친구의 친구
    ],
    [
        // 5066, 5067, 5068, 5069, 5070 순서대로 많이 방문
        ...Array(4000).fill(5066),
        ...Array(3000).fill(5067),
        ...Array(2000).fill(5068),
        ...Array(800).fill(5069),
        ...Array(200).fill(5070),
    ].map(makeName)
);
