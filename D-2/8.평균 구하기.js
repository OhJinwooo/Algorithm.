function solution(arr) {
    var answer = 0;
    for (let i = 0; i < arr.length; i ++){
        answer += arr[i] //반복문을 사용한 array의 값을 변수에 할당
    }
    
    console.log(answer/arr.length)//변수 값을 array의 길이만큼 나눠준다
}

solution([1,2,3,4])
