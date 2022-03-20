https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length-1; i++){
        for (let j = 1+i; j < numbers.length; j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    var answer = [...new Set(answer)]
    return answer.sort((a,b)=>a-b);
}