process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); //n을 공백을 기준으로 나눠준다
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++){ //반복문을 사용해 b만큼 찍어준다
        str = ''
        for (let j = 0; j < a; j++){ //반복문을 사용해 a만큼 찍어준다
            str += '*' //str이라는 변수에 *값을 더해준다
        }console.log(str)
    }
});