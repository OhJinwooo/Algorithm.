function solution(participant, completion) {
    var answer = '';
    participant.sort()//참가자와 완주자의 배열을 순서대로 정렬한다
    completion.sort()
    for(var i = 0; i < participant.length; i++){
        //참가자 중 완주자가 없는 사람을 골라야되니까
        //참가자를 반복문으로 돌리고 조건문으로 확인함
        if(participant[i] !== completion[i]){
            answer = participant[i]
        }console.log(answer)
    }
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"])