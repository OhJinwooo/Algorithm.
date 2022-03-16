function solution(s) {
    return (s.length === 4 || s.length === 6)&& s == parseInt(s);
    // (s의 길이가 4 or s의 길이가 6) and연산자 s==정수(s)
    // parseInt : 문자열을 정수로 변환
}
solution("a234")

//s의 길이가 4혹은 6
//숫자로만 구성되어 있는지 확인하는 함수
