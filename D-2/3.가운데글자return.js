function solution(s) {
    var answer = '';
    for (let i = 0; i <s.length; i++){ // 반복문을 사용해서 s의 길이만큼 돌려준다
        if(s.length % 2 === 0){ //s의 길이를 나눠줬을 때 나머지가 0이면 짝수
            answer = s[s.length /2-1] + s[s.length / 2] 
            // 짝수면 2로 나누고 1뺸값 [1] + 2로 나눈 값 [2]
        }else {
            answer = s[Math.floor(s.length /2)]
            // 홀수면 2로 나누고 Math.floor메서드 사용해서 반내림 [2]
        }
    }
    console.log(answer)
    return answer;
}
solution("abcde")