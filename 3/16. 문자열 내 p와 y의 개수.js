function solution(s){
    let answer = '';
    answer = (s.toLowerCase().split('p').length === 
    s.toLowerCase().split('y').length ) ? true : false;
    console.log(answer)
}

solution("pPoooyY")

//파라미터의 값을 전부 소문자로 바꿔주고 p,y를 스플릿으로
//나누어준 다음에 length가 같으면 true 아니면 false