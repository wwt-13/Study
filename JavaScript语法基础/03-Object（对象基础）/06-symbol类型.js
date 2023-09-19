// 只有两种类型可以用作对象属性键：字符串类型、symbol类型
// symbol的作用就是产生一个唯一的标识符
let id = Symbol();
// 带描述的Symbol，在调试的时候很有用
let id1 = Symbol('id1');

// 注意Symbol类型无法被自动转化为字符串
console.log(id); // 会报错

// 但是可以获取到Symbol的描述
console.log(id1.description);

// 可以通过Symbol创建对象的隐藏属性，该部分属性对与代码的任何其他部分都是隐藏的
let user = {
    name: 'John',
};
let id2 = Symbol('id2');
user[id2] = 1;
console.log(user[id2]); // 只能通过id2来访问该属性

// 改用法可以完美解决不同代码库的属性冲突问题

// 如果要在字面量中使用Symbol，需要[]，因为我们需要变量的id值作为键，而不是string
let user2 = {
    name: 'GG',
    [id]: 12345,
};

console.log(Object.keys(user2));

// 因为是隐藏属性，所以显然该属性会在for in中被跳过
// 同理，Object.keys(user)也会忽略隐藏属性
// 但是Object.assign浅拷贝会复制该属性

let clone = Object.assign({}, user);
console.log(user[id2]);

// 全局Symbol
// 一般我们希望所有的symbol都是唯一且不同的，但正常情况下不同文件的symbol不互通，也就是说不同文件的id并不相同
// 为了实现这一点，这里有一个 全局 symbol 注册表
// 要从注册表中读取（不存在则创建）symbol，请使用 Symbol.for(key)
export let id3 = Symbol.for('id3');
let id4 = Symbol.for('id_name');
let id5 = Symbol.for('id_name2');

// 以上是通过name获取sym，同理也可以通过sym获取name
// 注意该方法只适用于全局Symbol
console.log(Symbol.keyFor(id4), Symbol.keyFor(id5));
