function solution(a, b) {
    var answer = 0;
    for(let i = 0; i < a.length; i++){
        answer += a[i] * b[i] //같은 index의 값을 곱해준다음 [0]+[1]+[2] 
                              //이렇게 곱한 모든 수를 더해주면 된다
    }
    console.log(answer)
    return answer;
}

solution([1,2,3,4,],[-3,-1,0,2])