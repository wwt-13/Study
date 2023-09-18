// JS中最常用的两种数据结构是Object和Array
// 对象是一种根据键存储数据的实体
// 数组是一种直接存储数据的有序列表
// 解构赋值是一种特殊的语法，它使我们可以将数组或对象“拆包”至一系列变量中
let arr = ['John', 'Smith'];
// 解构赋值(可以通过=指定默认值)
let [firstName, surname = 'GG'] = arr;
console.log(firstName, surname);
[firstName, surname] = 'John Smith'.split(' ');
console.log(firstName, surname);
// 解构不会对对象本身进行修改

// 可以通过添加额外的逗号来丢弃数组中不想要的元素
// 不需要第二个元素和第四个元素开始的后续元素
let [Name, , Name2] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
console.log(Name, Name2);

// 等号右侧可以是任何可迭代对象
// 解构赋值是通过迭代右侧的值来完成工作的，相当于在右侧对象调用了for...of循环
let obj = {
    name: 'John',
    age: 21,
};
// 但是对象本身不可迭代，所以可以先将它转化成可迭代对象
let [usrname, age] = Object.entries(obj);
// let m = new Map(Object.entries(obj)); 顺带复习一下Obj转Map
console.log(usrname, age);

// 小技巧：变量交换
[usrname, age] = [age, usrname];

// 小技巧：展开语法...
let obj1 = {
    name: 'John',
    age: 21,
    isAdmin: true,
};
let obj2 = {
    price: 100,
    gender: 'male',
};
// ...的作用就是将对象或者数组展开
// 用法如下
let obj3 = { ...obj1, ...obj2 };
// 用法示例2
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

// 对象解构
let options = {
    title: 'Menu',
    width: 100,
    height: 200,
};
// 与数组解构不同，对象解构不关心顺序，只要变量名与属性名相同即可
let { title, width, height } = options;
console.log(title, width, height);

// 指向赋值
// w的意思是将options.width赋值给w（这里的let也是对w,h,t生效的）
let { width: w, height: h, title: t } = options;
console.log(w, h, t);

// 不使用let的陷阱
// let title, width, height;
// 以下代码无法正常运行
// {title, width, height} = {title: "Menu", width: 200, height: 100};
// 因为JavaScript将{开头的语法解析为代码块，而不是对象
// 为了规避这一问题，可以将整个赋值表达式用括号括起来
({ title, width, height } = { title: 'Menu', width: 200, height: 100 });

// 嵌套解构示例
let options1 = {
    size: {
        width1: 100,
        height1: 200,
    },
    items: ['Cake', 'Donut'],
    extra: true,
};
let {
    // 注意变量名必须和对象中的相同
    size: { width1, height1 },
    items: [item1, item2],
    extra,
} = options1;
console.log(width1, height1, item1, item2, extra);

// 智能函数参数(感觉有点鸡肋，先放放)
