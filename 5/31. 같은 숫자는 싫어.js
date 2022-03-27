https://programmers.co.kr/learn/courses/30/lessons/12906


function solution(arr)
{
    var answer = [arr[0]]; //이 배열의 top 과 비교해서 같으면 안 넣고, 다르면 push
    
    for (var i=1; i < arr.length; i++) {
        var top = answer[answer.length-1]; // 이 부분이 중요했다.  top 업데이트 
        if (top !== arr[i]) {
            answer.push(arr[i])
        }
    }
    console.log(answer)
    return answer;
}