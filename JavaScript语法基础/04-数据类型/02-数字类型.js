// 这里讨论的是常规数字类型Number
// 范围为-(2^53-1)~(2^53-1)
const billion = 1000000000;
// 下划线是一种语法糖，只是为了增强可读性
const billion1 = 1_000_000_000;
const billion2 = 1e9;
// 16进制
const hex = 0xff;

// num.toString(base):返回在给定 base 进制数字系统中 num 的字符串表示形式
const num = 255;
console.log(num.toString(16), num.toString(2));

// 四舍五入
let n1 = 1.4,
    n2 = 1.5;
// floor下舍，ceil上舍，round四舍五入，trunc直接去除小数点内容
console.log(Math.floor(n1), Math.ceil(n1), Math.round(n2), Math.trunc(n1));

let n3 = 1.1234123;
// 四舍五入到小数点第n位(注意结果是字符串)
console.log(n3.toFixed(3));

// isNaN:将参数转换为数字，如果是NaN则返回true
// isFinite:将参数转换为数字，如果是NaN或Infinity则返回false
console.log(isNaN('str'), isNaN('123'), isNaN(NaN));
console.log(isFinite('str'), isFinite('123'), isFinite(NaN), isFinite(Infinity));

// parseInt:非严格数字转换
// parseFloat:同上
// 以上两者常用与提取带单位字符串中的数字
console.log(parseInt('100px'), parseFloat('12.5em'));

// Math.random():返回0~1之间的随机数
// Math.max(...arr):返回数组中最大值
// Math.min(...arr):返回数组中最小值
// Math.pow(x, n):返回x的n次幂
// Math.sqrt(x):返回x的平方根
// Math.abs(x):返回x的绝对值
// Math.sign(x):返回x的符号，1为正，-1为负，0为0，-0为-0，NaN为NaN
