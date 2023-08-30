let user = {
    name: "John",
    age: 18,
    sayHi2: function () {
        console.log("Hello2");
        // 对象方法需要通过this引用来访问对象中存储的信息
        console.log(this.name);
    },
};

user.sayHi2();

// 在 JavaScript 中，this 关键字与其他大多数编程语言中的不同。JavaScript 中的 this 可以用于任何函数，即使它不是对象的方法
// 这是因为this的值是在代码运行的时候计算出来的，它取决于代码上下文
// 需要特别注意的是this只有在被调用的那一刻才确定

function sayHi() {
    console.log(this.name);
}

let stu = { name: "John" };
let tech = { name: "GG" };

stu.f = tech.f = sayHi;

stu.f(), tech.f();

// 箭头函数是特殊的，它没有自己的this
// 在箭头函数中引用this时，其值取决于外部函数的上下文
user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }, // 注意下这个逗号不要漏了
};

user.sayHi();
