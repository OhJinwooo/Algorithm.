function solution(absolutes, signs) {
    var answer = 0;
    for(var i = 0; i < absolutes.length; i++){
        //파라미터 2개의 길이가 같으니 한개만 돌려준다 

        if(signs[i] === true){ //signs가 true일 때

            answer += absolutes[i] // absolutes의 i번째를 더해줘라
            
        }else {
            answer -= absolutes[i]// 빼줘라
        }
    
    }console.log(answer) 
    return answer;
}

solution([4,7,12], [true,false,true])