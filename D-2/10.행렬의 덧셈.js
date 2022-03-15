function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
        var ans = [];
        for(let a = 0; a < arr1[i].length; a++){
            ans.push(arr1[i][a] + arr2[i][a])
            //반복문에서 index arr1 i의값과 a의값을 arr2 i의값과 a의값을
            //더해준다 
        }
        answer.push(ans)// 마지막 최종 변수값에 넣어준다
    }
    console.log(answer)
    return answer
}

solution([[1,2],[2,3]], [[3,4],[5,6]])