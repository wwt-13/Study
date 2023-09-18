// Map and Set
// Map和Object极其相似，最大的区别就是Map的键可以是任意类型
// new Map()创建一个Map对象
// map.set(key, value)存储键值对
// map.get(key)返回键对应的值，如果不存在则返回undefined
// map.has(key)如果键存在则返回true，否则返回false
// map.delete(key)删除键，删除成功返回true，否则返回false
// map.clear()清空Map
// map.size返回Map中的键值对个数
let m = new Map();
m.set(1, 'John');
m.set('1', 21);
m.set(true, 'bool');

console.log(m.get(1));
console.log(m.get('1'));
console.log(m.get(true));

console.log(m.size);
// 不要使用map[key]=2的方式来添加键值对

// Map很重要的一点就是可以使用对象作为键
let John = { name: 'John' };
m.set(John, 21);
console.log(m.get(John));

// Map 内部使用 SameValueZero 算法来比较键是否相等。它和严格等于 === 差不多，但区别是 NaN 被看成是等于 NaN。所以 NaN 也可以被用作键。
// 该方法不可改变或自定义

// map.set每次调用都会返回map本身，因此可以链式调用
m.set('12', 21).set(12, 'John').set(true, 'bool1');

// Map迭代
// map.keys()返回一个包含所有键的可迭代对象
// map.values()返回一个包含所有值的可迭代对象
// map.entries()返回一个包含所有键值对的可迭代对象

for (let key of m.keys()) {
    console.log(key);
}
for (let value of m.values()) {
    console.log(value);
}
// 其实Map本身就是可迭代对象，直接遍历即可
for (let entry of m.entries()) {
    console.log(entry);
}
for (let item of m) {
    console.log(item);
}
// forEach对每个键值对执行一次回调函数
m.forEach((value, key, map) => {
    console.log(value, key, map);
});
// 和传统的Object不同，Map的迭代顺序保留了插入顺序

// Map在创建的时候，可以传入一个带有键值对的数组(or其他可迭代对象)来进行初始化
let m1 = new Map([
    [1, 'John'],
    ['1', 21],
    [true, 'bool'],
]);
// 如果想从一个已有的普通对象（plain object）来创建一个 Map，可以使用内建方法 Object.entries(obj)，它会返回一个键/值对数组
let obj = {
    name: 'John',
    age: 21,
};
let m2 = new Map(Object.entries(obj));

// 当然也存在反向操作Object.fromEntries，将Map转换为对象
// Object.fromEntries：给定一个具有 [key, value] 键值对的数组，它会根据给定数组创建一个对象
let obj1 = Object.fromEntries([
    [1, 'John'],
    ['1', 21],
    [true, 'bool'],
]);
let obj2 = Object.fromEntries(m1.entries());

// Set是集合，每个element只能出现一次
// new Set(iterable)创建一个Set对象，如果传入一个可迭代对象，则会从中复制元素到set里
// set.add(value)添加一个值，返回set本身
// set.delete(value)删除一个值，删除成功返回true，否则返回false
// set.has(value)如果值存在则返回true，否则返回false
// set.clear()清空set
// set.size返回set中的元素个数

// 例如，我们有客人来访，我们想记住他们每一个人。但是已经来访过的客人再次来访，不应造成重复记录。每个访客必须只被“计数”一次
let set = new Set();
let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.size);

for (let user of set) {
    console.log(user.name);
}
// Set迭代
// Map 中用于迭代的方法在 Set 中也同样支持:set.keys(), set.values(), set.entries()
for (let value of set) {
    console.log(value);
}
set.forEach((value, valueAgain, set) => {
    console.log(value);
});

// 对象转换
// 对象缺少数组存在的许多方法，如果我们想应用它们，可以先使用 Object.entries将对象转化为键值对，然后使用 Object.fromEntries将键值对再转化为对象
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// 从上述描述来看，.map()似乎和map数据结果没什么关系？
// 确实可以依托此方法构建强大的转换链
let doublePrices = Object.fromEntries(Object.entries(prices).map(([key, value]) => [key, value * 2]));
console.log(doublePrices);

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
];

const peopleWithGreetings = people.map((person) => {
    return {
        ...person,
        greeting: `Hello, my name is ${person.name} and I'm ${person.age} years old.`,
    };
});

console.log(peopleWithGreetings);
