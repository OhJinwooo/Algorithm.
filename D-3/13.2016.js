function solution(a, b) {
    var answer = '';
    var week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    for(let i = 0; i < week.length; i++){
        answer = week[new Date(`2016-${a}-${b}`).getDay()]
    }
    console.log(answer)
    return answer;
}

solution(5, 24)