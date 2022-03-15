function solution(month, day){
    let a = new Date(`2022-${month}-${day}`)
    let result = new Date(a.setDate(a.getDate() + 98))
	return result;
}
console.log(solution(1,18))