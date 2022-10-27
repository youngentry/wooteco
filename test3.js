function problem3(n) {
    const arr = Array.from({ length: n }, (v, k) => k + 1);
    const newArr = arr.filter((el) => el % 10 === 3 || el % 10 === 6 || el % 10 === 9);
    console.log(newArr);
    console.log(newArr.length);
}

problem3(13);
problem3(33);
