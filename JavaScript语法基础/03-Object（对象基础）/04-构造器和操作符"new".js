// 构造函数的约定：开头大写+只能使用new操作符执行
function User(name) {
    // this={} 隐式创建
    this.name = name;
    this.isAdmin = false;
    // return this 隐式返回
}
let user = new User("GG");

// 创建一个函数并立即使用 new 调用它
let user1 = new (function () {
    this.name = "John";
    this.isAdmin = false;

    // ……用于用户创建的其他代码
    // 也许是复杂的逻辑和语句
    // 局部变量等
})();

console.log(user.name, user.isAdmin);

function Accumulator(startingValue) {
    this.value = startingValue;

    // 构造函数方法
    this.read = function () {
        this.value += +prompt("How much to add?", 0);
    };
}
