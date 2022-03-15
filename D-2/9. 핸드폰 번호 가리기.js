function solution(phone_number) {
    var answer = '';
    for (let i = 0; i < phone_number.length; i++){
        if(i< phone_number.length-4) {// i의 길이가 폰넘버의-4
            //보다 짧으면 별을 붙여줘라
            answer += '*'
        }else {
            answer += phone_number[i]
        }
        console.log(answer)
    }return answer
}

solution("01033334444")