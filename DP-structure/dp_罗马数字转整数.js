
/** 
 * 罗马数字转整数
 * 知道：字符          数值
		I             1
		V             5
		X             10
		L             50
		C             100
		D             500
		M             1000
* 条件1 <= s.length <= 15
* s 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')
 */



/**
 * @param {string} s
 * @return {number}
 */
let checkVal = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
}
const s = "MCMXCIV";
let myRomanToInt = (s) => {
	let arr = s.split('');
	let total = 0;
	arr.forEach(element => {
		total += checkVal[element]
	});
	return total;
};
console.log(myRomanToInt(s));


let romanToInt = (s) => {
	const symbolValues = new Map();
	symbolValues.set('I', 1);
	symbolValues.set('V', 5);
	symbolValues.set('X', 10);
	symbolValues.set('L', 50);
	symbolValues.set('C', 100);
	symbolValues.set('D', 500);
	symbolValues.set('M', 1000);
	let ans = 0;
	const n = s.length;
	for (let i = 0; i < n; ++i) {
		const value = symbolValues.get(s[i]);
		// 知道 罗马数字的规则 只要右边的值大 就是加 小 就是减法
		if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
			ans -= value;
		} else {
			ans += value;
		}
	}
	return ans;
}
console.log(romanToInt(s));