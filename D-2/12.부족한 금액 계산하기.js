function solution(price, money, count) {
    var answer = 0;
    for(var i = 1; i <= count; i++){
        answer += price*i //

    }console.log(answer) //콘솔 위에 리턴값이 들어가야지 조건문이 돌아가는데
                        // 출력이 안되서 잠깐 올려놓음

    return answer < money ? 0 : answer - money; 
    //위의 코드는 조건문을 축약시킨건데 말그대로
    //answer의 값이 money보다 작으면 0 그게 아니라면 answer - money
}

solution(3, 20, 4, 10)

// price = 놀이기구 이용료
// money = 자본
// count = 이용 횟수