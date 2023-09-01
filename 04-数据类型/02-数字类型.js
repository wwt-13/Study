// 这里讨论的是常规数字类型Number
// 范围为-(2^53-1)~(2^53-1)
let billion = 1000000000;
// 下划线是一种语法糖，只是为了增强可读性
let billion1 = 1_000_000_000;
let billion2 = 1e9;
// 16进制
let hex = 0xff;

// num.toString(base):返回在给定 base 进制数字系统中 num 的字符串表示形式
let num = 255;
console.log(num.toString(16), num.toString(2));
