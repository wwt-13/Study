// JavaScript 语言最初是为 Web 浏览器创建的。此后，它已经演变成了一种具有多种用途和平台的语言
// 平台可以是一个浏览器，一个 Web 服务器，或其他 主机（host），甚至可以是一个“智能”咖啡机，如果它能运行 JavaScript 的话
// 每个平台都提供了特点与平台的功能，JavaScript 规范将其称为 主机环境
// 在浏览器环境中，有一个叫做window的根对象
// 1. 首先，它是 JavaScript 代码的全局对象
// 2. 其次，它代表“浏览器窗口”，并提供了控制它的方法
function sayHi() {
    alert('Hello');
}
// 在浏览器窗口调用sayHi函数
window.sayHi();
// 查看浏览器内部窗口高度
alert(window.innerHeight);

// 文档对象模型DOM
// document 对象是页面的主要“入口点”。我们可以使用它来更改或创建页面上的任何内容
document.body.style.backgroundColor = 'red';

// 浏览器对象模型BOM
// 由浏览器提供的用于处理文档(document)之外所有内容的其他对象

// navigator 对象提供了有关浏览器和操作系统的背景信息。navigator 有许多属性，但是最广为人知的两个属性是：navigator.userAgent —— 关于当前浏览器，navigator.platform —— 关于平台（有助于区分 Windows/Linux/Mac 等）。
// location 对象允许我们读取当前 URL，并且可以将浏览器重定向到新的 URL

// 使用示例
alert(location.href); // 显示当前 URL
if (confirm('Go to Wikipedia?')) {
    location.href = 'https://wikipedia.org'; // 将浏览器重定向到另一个 URL
}
