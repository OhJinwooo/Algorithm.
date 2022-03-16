function solution(s) {
    var answer = '';
    var arr = s.split(" ")//문자열을 공백을 기준으로 나누어준다
    for (var i = 0; i < arr.length; i++){//arr의 길이만큼 돌아주고
        for(var j = 0; j < arr[i].length; j++){
            if (j % 2 === 0){
                answer += arr[i][j].toUpperCase()
                //j(0)이 arr[0] 같으니까 인덱스 0번을 나누어 짝수면
                //대문자로 바꿔주고
                //그게 아니라면 소문자로 바꿔준다
            }else {
                answer += arr[i][j].toLowerCase()
            }
        }if(i < arr.length-1){// 여기 아직 이해 잘 안됨 왜 -1인지
            answer += " "
        }//i보다 arr의-1한 길이가 길다
    }
    console.log(answer)
    return answer;
}
solution("try hello world")