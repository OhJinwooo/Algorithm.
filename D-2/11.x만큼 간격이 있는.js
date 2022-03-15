function solution(x, n) {
    var answer = [];
    for(var i = 1; i <=n; i++){
        // i의 값이 1인 이유는 밑에서 x의 값과 곱해주는데 0이면 곱해도 
        // 0이기 때문에 1부터 시작
        answer.push(x*i)        //x의 값과 i의 값을 곱해서 변수값에
                                //n번 찍어준다
    }
    console.log(answer)
    return answer;
}

solution(2,5)