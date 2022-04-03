https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
    var answer = [];
    for (var i = 0; i < strings.length; i++) {
        var a = strings[i][n];
        strings[i] = a + strings[i];
    }
    strings.sort();
    console.log(strings)
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0],"");
        answer.push(strings[j])
    }

    return answer;
}
