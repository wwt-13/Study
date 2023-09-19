// Rest参数
// 传入任意个数的参数
function sumAll(...args) {
    let num = 0;
    args.forEach((item) => {
        num += item;
    });
    // for(let arg of args){ num+=arg }
    return num;
}
console.log(sumAll(1, 2, 3, 4, 5));
// Spread语法
let arr = [1, 2, 3];
console.log(Math.max(...arr));

// 话说这不就是数组的解包嘛
