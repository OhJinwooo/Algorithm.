function solution(n) {
    var answer = '';
    for(let i = 0; i <n; i++){
        if (i % 2 === 0){ 
//index가 0번부터 시작이니까 나누었을 때 
//짝수면 수를 return 그게 아니면 박을 return
            answer += "수"
        }else {
            answer += "박"
        }
    }
    console.log(answer)
}

solution(3)
//길이가 n만큼 "수""박" retrun하기