function solution(n) {
    var answer = [];
    var a = n + '';
    for (let i = a.length-1; i >= 0; i--){
        answer.push(Number(a[i]))
    }
    console.log(answer)
    return answer;
}


solution(12345)

