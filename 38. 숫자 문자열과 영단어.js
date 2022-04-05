https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    var answer = 0;
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0; i < numbers.length; i++) {
        let a = s.split(numbers[i]);
        console.log(a)
        s = a.join(i)
    }
    return +s;
}