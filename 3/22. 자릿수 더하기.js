function solution(n){
    var answer = 0;
    var a = n.toString()//숫자열을 문자열로 바꿔준다
    for(let i = 0; i < a.length; i++){//바꿔준 문자열을 반복문을
        //사용해서 돌려준다
        answer += Number(a[i])//문자열로 바꿔준 a의값을 숫자열로
        //다시 바꿔서 더해준다
    }
    console.log(answer)                                
    return answer;
}

solution(987)



//문자열로 바꾼이유는 숫자열일 때 987이 하나의 인덱스 안에 있는데
//문자열로 바꿔주면 구팔칠 이렇게 하나하나 나눠진다