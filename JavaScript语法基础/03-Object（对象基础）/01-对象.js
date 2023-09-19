// 使用{}来创建对象
// 一个属性就是一个键值对（“key: value”），其中键（key）是一个字符串（也叫做属性名），值（value）可以是任何值
"use strict";
// 构造函数语法
let user1 = new Object();
// 字面量语法
let user2 = {};

user1 = {
    name: "John",
    age: 30,
};

// 可以随意访问对象属性
console.log(user1.name, user1.age);
// add prop
user1.isAdmin = true;
// delete prop
delete user1.age;

// 多字属性需要注意的地方
user2 = {
    name: "John",
    age: 20,
    "like birds": true,
};
// 无法使用.操作
user2["like birds"] = false;
delete user2["like birds"];

// 计算属性
// [fruit]的含义是属性名从fruit变量中获取
// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5,  属性名是从 fruit 变量中得到的
// };
// console.log(bag.apple);  5 如果 fruit="apple"

// 标准写法
function makeUser1(name, age) {
    return {
        name: name,
        age: age,
    };
}
// 简写
function makeUser2(name, age) {
    return {
        name,
        age,
    };
}
// 还有一点，虽然变量名不能是编程语言的某个保留字，但是对象的属性名并不受此限制

let user = makeUser2("GG", 21);

// 判断某属性在对象中是否存在
console.log(user.email === undefined); // 如果 user{email:undefined}呢，这种情况就没法判断了(虽然也没啥意义)
console.log("email" in user);

// for..in循环
// 注意在严格模式下for(key in user)会报错（需要let声明）
for (let key in user) {
    console.log(key, user[key]); // user.key是无效的
}

// 关于属性顺序的问题
// 整数属性：一个字符串可以在不做任何更改的情况下与一个整数进行相互转换，称该字符串具有整数属性
// 比如"40","1" "+45","1.2"等均不符合
// 回归正题，在遍历属性的时候，整数属性会被排序，非整数属性则按照创建顺序显示，并且默认先遍历整数属性，再遍历非整数属性

let codes = {
    name: "GG",
    49: "Germany",
    age: 19,
    41: "Switzerland",
    44: "Great Britain",
};
let codes2 = {
    name: "GG",
    "+49": "Germany",
    age: 19,
    "+41": "Switzerland",
    "+44": "Great Britain",
};

function outputOrder(codes) {
    for (let code in codes) {
        console.log(code); // 1, 41, 44, 49
    }
}

outputOrder(codes), outputOrder(codes2);
