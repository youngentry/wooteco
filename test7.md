# 기능

-   1단계)

mrko의 친구 : donut, shakevan
mrko의 친구 ===> mrko가 [1]에 포함된 friends 목록

donut의 친구 : jun, andole, mrko
shakevan의 친구 : jun, andole, mrko
함께 아는 친수의 수 ===> mrko가 [1]에 포함된 friend의 [0] 목록.length

방문자 : bedi 3 donut 1 shakeven 1

-   1단계) mrko가 [1]에 포함된 recommendationScores 객체생성하기 {donut:0, shakevan:0}
-   2단계) friends배열에서 친구의 [1]이 나타날 때마다 {함께아는친구이름: +10} 객체 업데이트하기
-   3단계) friends배열에서 방문자마다 {방문자이름, +1} 객체 업데이트하기
-   4단계) 객체를 배열로 만들고 count로 내림차순한 뒤 앞에서부터 5명을 return하기
