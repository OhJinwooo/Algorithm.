function solution(numbers) {
    var answer = 0;
    for (let i = 0; i < 10; i++){
        if(!numbers.includes(i)){ // !numbers 반복문 사용시 이 변수값안에 
            //없는 이라는말 includes 없는 값을 찾아오는 함수
            //한마디로 numbers안에 없는 값을 찾아라 
            answer += i
        }
    }
    console.log(answer)
    return answer;
}

solution([1,2,3,4,6,7,8,0])