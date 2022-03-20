https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    var a = [];
    var b = [];
    var answer = 0;
    for(var i = 0; i < sizes.length; i++){
        sizes[i].sort((a,b)=>a-b)
        a.push(sizes[i][0])
        b.push(sizes[i][1])
    }
    console.log(sizes)
    var c = Math.max(...a)
    var d = Math.max(...b)
    answer = c*d
    
    console.log(d)
    return answer;
}