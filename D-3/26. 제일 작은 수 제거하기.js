// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr)),1)
//     return arr.length === 0 ? [-1] : arr
// }

function solution(arr) {
    let answer = [];
    answer = arr.splice(arr.indexOf(Math.min(...arr)),1);//인덱스 순서의 가장 낮은                 
                                                //숫자를 Math.min(...변수값)으로 골라내서 splice함수로 제거해준다
    if(answer.length<1)
        return[-1];      //arr.length가 1보다 작을 시 -1을 return해주고

        console.log(answer)
    return answer;      // 남은 나머지 값을 return
}

solution([4,3,2,1])