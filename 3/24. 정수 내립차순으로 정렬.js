function solution(n) {
    console.log(Number(n.toString().split('').sort((a,b)=>b-a)
    .join('')));
}
//숫자열변환 메소드(문자열,나눠주고,내림차순 배열 정렬).다시 모아주기

solution(118372)