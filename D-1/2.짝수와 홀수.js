function solution(num) { 
    var answer = '';
    if(num % 2 === 0){ // num을 2로 나누었을 때 나머지 값이 0이면 짝수
        answer = 'Even' // 짝수면 Even 
    }else {
        answer = 'Odd' // 홀수면 Odd
    }console.log(answer)
}

solution(3)