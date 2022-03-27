function solution(month, day){
    let a = new Date(`2022-${month}-${day}`) //현재 날짜 값
    let result = new Date(a.setDate(a.getDate() + 98))
    //현재 날짜 + 98 Date(일), Month(달), Year(년)
	return result;
}
console.log(solution(1,18))