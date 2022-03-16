function solution(n) {
    var answer = 0;
    var x = Math.sqrt(n)
    if(n % x === 0){
        answer = (x+1)*(x+1)
    }else{
        answer = -1
    }
    console.log(answer)
    return answer;
}

solution(121)