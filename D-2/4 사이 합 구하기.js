function solution(a, b) {
    var answer = 0;
    if (a > b){
        for(let i = b; i <= a; i++){ //b를 a의 크기만큼 반복
            answer += i
        }
    }if (b > a){
        for(let j = a; j <= b; j++){//a를 b의 크기만큼 반복
            answer += j
        }
    }if( a === b ){ // a랑 b랑 같을 때
        answer = a
    }
    console.log(answer)
    return answer;
}

solution(3,5)