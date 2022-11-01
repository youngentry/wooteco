const user = "mrko";
const friends = [
    ["mrko", "jun"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
];
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];
function problem5(user, friends, visitors) {
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
    console.log(myFriends);
    //  ===> ["donut", "shakevan"]

    // --------------------------filter로 걸러내기 메모------------------------
    // 2단계) visitors 배열에서 myFriends 배열을 제거한 possibleVisitors 배열 생성
    const possibleVisitors = visitors.filter((el) => !myFriends.includes(el));
    const possibleFriends0 = friends.filter((el) => !el[0].includes(user));
    console.log(possibleFriends0);
    const possibleFriends1 = possibleFriends0.filter((el) => !el[1].includes(user));
    console.log(possibleFriends1);

    // 3단계) 추천 점수를 count할 recommendationScore 객체를 생성
    const recommendationScore = {};

    // 4단계) friends배열에서 친구의 myFriends[i][1]이 나타날 때마다 recommendationScore 객체에 생성하기 ===> {friends[i][1]: 0}
    for (let i = 0; i < possibleFriends1.length; i++) {
        for (let j = 0; j < myFriends.length; j++) {
            if (possibleFriends1[i].includes(myFriends[j]) && possibleFriends1[i][1] !== user && possibleFriends1[i][0] !== user) {
                recommendationScore[possibleFriends1[i][1]] = 0;
            }
        }
    }
    console.log(recommendationScore);

    // 5단계) possibleVisitors배열의 요소를 recommendationScore 객체에 생성하기 ===> {possibleVisitors[i]: 0}
    for (let i = 0; i < possibleVisitors.length; i++) {
        recommendationScore[possibleVisitors[i]] = 0;
    }

    // 6단계) recommendationScore 이름순으로 정렬
    const orderedScoreArray = Object.entries(recommendationScore).sort();
    // console.log(Object.entries(recommendationScore).sort(), "orderedScore");
    const orderedScoreObject = Object.fromEntries(orderedScoreArray);
    // console.log(orderedScoreObject, "orderedScoreArray");

    // 7단계) friends배열에서 친구의 myFriends[i][1]이 나타날 때마다 recommendationScore 객체를 업데이트하기 ===> {possibleFriends1[i][1]: +10}
    for (let i = 0; i < possibleFriends1.length; i++) {
        for (let j = 0; j < myFriends.length; j++) {
            if (possibleFriends1[i].includes(myFriends[j]) && possibleFriends1[i][1] !== user) {
                orderedScoreObject[possibleFriends1[i][1]] += 10;
            }
        }
    }

    // 8단계) possibleVisitors배열의 요소가 나타날 때마다 orderedScoreObject 객체를 업데이트하기 ===> {friends[i][1]: +1}
    for (let i = 0; i < possibleVisitors.length; i++) {
        orderedScoreObject[possibleVisitors[i]] += 1;
    }

    // console.log(orderedScoreObject, "점수메긴 후 배열");

    // 9단계) 객체를 배열로 만들고 count로 내림차순한 뒤 앞에서부터 5명을 return하기

    // console.log(Object.entries(orderedScoreObject));
    const orderedArray = Object.entries(orderedScoreObject).sort((a, b) => b[1] - a[1]);
    console.log(orderedArray, "점수 내림차순 배열");
}

problem5(user, friends, visitors);
