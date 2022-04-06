https://programmers.co.kr/learn/courses/30/lessons/12926

//내가 실패한 코드
// function solution(s, n) {
//     var answer = '';
//     let a = s.split('')
//     console.log(a)
//     let b = n*2
//     let c = []
//     let alphabet = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','w','W','x','X','y','Y','z','Z','a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','w','W','x','X','y','Y','z','Z']
    
//     for(i=0; i<a.length; i++){
//         for(j=0; j<alphabet.length; j++){
//             if(a[i] === alphabet[j]){
//                 c.push(alphabet[j+b])
//                 // console.log(c)
//             }
//         }
//     }
//     answer = [...new Set(c)];
//     answer = answer.join('');
//     return answer;
// }
// console.log(solution("AB",1))
// console.log(solution("z",1))
// console.log(solution("a B z",4))

//답안 코드
function solution(s, n) {
    return s.split("").map((c)=>{
        if(c === " ") return " "
        const isUpletter = c.toUpperCase() === c
        let code = c.charCodeAt() + n
        if((isUpletter && code > 90) || (!isUpletter && code > 122)){
            code -= 26   
        }
        return String.fromCharCode(code)
    }).join("")
}

//다른답안 코드
function solution(s, n) {
    let answer = '';
    // 입력받은 s를 하나씩 탐색
    for (let i = 0; i < s.length; i++) {
      // s의 각 문자를 아스키코드로 변환
      let sASCII = s.charCodeAt(i);
      console.log(sASCII)
      // 대문자의 경우 65 ~ 90의 범위
      if (sASCII >= 65 && sASCII <= 90) {
        // n만큼 이동시키기
        sASCII += n;
        // 이동 후, 90을 초과하면 처음으로 돌아가서 미는 것이므로 -26
        if (sASCII > 90) {
          sASCII -= 26;
        }
      }
      // 소문자의 경우 97 ~ 122의 범위
      if (sASCII >= 97 && sASCII <= 122) {
        // n만큼 이동시키기
        sASCII += n;
        // 이동 후, 122을 초과하면 처음으로 돌아가서 미는 것이므로 -26
        if (sASCII > 122) {
          sASCII -= 26;
        }
      }
      // sASCII를 문자열로 변환 후 answer에 누적
      sString = String.fromCharCode(sASCII);
      answer += sString;
    }
    return answer;
  }