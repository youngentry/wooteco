# 기능

-   1단계) myFriends 목록, connection 목록 구하기

mrko의 친구 : donut, shakevan
mrko의 친구 ===> mrko가 [1]에 포함된 friends 목록

donut의 친구 : jun, andole, mrko
shakevan의 친구 : jun, andole, mrko
함께 아는 친수의 수 ===> mrko가 [1]에 포함된 friend의 [0] 목록.length

방문자 : bedi 3 donut 1 shakeven 1

-   1단계) friends배열에서 mrko를 포함한 요소 중 mrko의 friend를 담은 myFriends 배열 생성 ["donut", "shakevan"]
-   2단계) visitors 배열에서 myFriends 배열을 제거한 possibleVisitors 배열 생성
-   3단계) 추천 점수를 count할 recommendationScore 객체 생성
-   4단계) friends배열에서 친구의 myFriends[i][1]이 나타날 때마다 recommendationScore 객체에 생성하기 ===> {friends[i][1]: 0}
-   5단계) possibleVisitors배열의 요소를 recommendationScore 객체에 생성하기 ===> {possibleVisitors[i]: 0}
-   6단계) recommendationScore 이름순으로 정렬
-   7단계) friends배열에서 친구의 myFriends[i][1]이 나타날 때마다 recommendationScore 객체를 업데이트하기 ===> {friends[i][1]: +10}
-   8단계) possibleVisitors배열의 요소를 recommendationScore 객체를 업데이트하기 ===> {friends[i][1]: +1}
-   9단계) 객체를 배열로 만들고 count로 내림차순한 뒤 앞에서부터 5명을 return하기
