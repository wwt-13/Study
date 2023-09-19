// 可迭代对象，指的是所有具备Symbol.iterator属性的对象，或者说，所有能被for-of循环遍历的对象都是可迭代对象。

let range = {
    from: 1,
    to: 5,
};
// 为了让range可迭代，我们需要为其添加Symbol.iterator属性
// 该方法返回一个迭代器，迭代器是一个具有next方法的对象，该方法返回一个对象，该对象具有done和value属性{done: Boolean, value: any},done=true表示迭代结束，value为当前值
range[Symbol.iterator] = function () {
    // 该函数返回一个迭代器对象
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        },
    };
};
for (let num of range) {
    console.log(num);
}
// 字符串也是可迭代的
for (let char of 'test') {
    console.log(char);
}
// 显式调用迭代器
let str = 'test';
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}
// 类数组array-like
// Array-like是有索引和length属性的对象，但是没有数组的内置方法(push,pop等)
let arryLike = {
    0: 'Hello',
    1: 'World',
    length: 2,
};
// Error
// for(let item of arryLike)
// 可以采用Array.from()方法将类数组对象转换为数组
let arr = Array.from(arryLike);
console.log(arr);

// 需要注意的是JS对象并不是可迭代对象
