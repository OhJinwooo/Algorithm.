https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
    var answer = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1 ; j < nums.length; j++) {
            for(let u = j+1; u < nums.length; u++) {
                let n = nums[i] + nums[j] + nums[u]
                console.log(n)
                if(sum(n)) answer++
            }
        }
    }
    function sum(n) {
        for (let i = 2; i < n; i++) {
            if(n % i === 0) 
                return false
        }
        return true
    }
    
    return answer;
}

