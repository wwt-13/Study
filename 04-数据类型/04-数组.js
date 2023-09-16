// Array
// 两种创建方式
let arr = new Array(1, 2, 3, 4, 5);
// 常用
let arr1 = [];

console.log(arr, arr1);
// 获取数组长度
console.log(arr.length, arr1.length);

// 数组可以存储任意类型的数据
let arr2 = [
    'Apple',
    { name: 'John' },
    true,
    function () {
        alert('hello');
    },
];
// 使用at获取数组的最后一个元素
// at是ES2019才加入的方法，所以不是所有浏览器都支持
// 正常实现
console.log(arr2[arr2.length - 1]);
// 使用at实现(旧式浏览器可能需要polyfill)
console.log(arr2.at(-1));

// at的polyfill实现
// 不得不说github copilot的确牛逼
if (!Array.prototype.at) {
    Array.prototype.at = function (pos) {
        return this[pos < 0 ? this.length + pos : pos];
    };
}
// pop:删除并返回数组的最后一个元素
// push:向数组末尾添加一个或多个元素，并返回新的长度
// shift:删除并返回数组的第一个元素(数组整体前移)
// unshift:向数组开头添加一个或多个元素，并返回新的长度
// JavaScript中的数字既可以用作队列，也可以用作栈，在计算机科学中，允许这样操作的数据结构称为双端队列
// push和pop用作栈
// push和pop的运行速度要比shift和unshift快得多，这是由于JavaScript内部数组的有序存储结构决定的
let fruits = ['Apple', 'Orange', 'Pear'];

console.log(fruits.pop(), fruits);
console.log(fruits.push('Pear'), fruits);

console.log(fruits.shift(), fruits);
console.log(fruits.unshift('Apple'), fruits);

// 遍历数组
// 常规遍历
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// for...of遍历(注意for...in用于对象遍历)
for (let fruit of fruits) {
    console.log(fruit);
}
// forEach遍历
fruits.forEach((fruit, index, array) => {
    console.log(fruit, index, array);
});

// 清空数组的两种方式
// 1.直接赋值为空数组
fruits = [];
// 2.使用length属性(该操作会不可逆的自动截断数组)
fruits.length = 0;

// 更多数组方法相关详见https://zh.javascript.info/array-methods
