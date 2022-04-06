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