// setTimeout允许我们将函数推迟到一段时间间隔之后再执行
// setInterval允许我们重复运行一个函数，从一段时间间隔之后开始允许，之后以固定的时间间隔重复运行该函数
// 两者都是异步的,且都会在调用时返回一个值，这个值可以用来取消函数的执行

// setTimeout(func, delay, arg1, arg2, ...)
// setInterval的参数和setTimeout一样，但是它会重复执行func，直到被取消
function sayHi(who) {
    console.log('Hello ' + who);
}
setTimeout(sayHi, 1000, 'John'); // Hello John

let timerId = setTimeout(() => console.log('never happens'), 1000);
clearTimeout(timerId);
// 以上代码不会执行，因为clearTimeout取消了setTimeout的执行

let timerId2 = setInterval(() => console.log('tick'), 2000);
// 利用setTimeout来终止setInterval的执行，妙
setTimeout(() => {
    clearInterval(timerId2);
    console.log('stop');
}, 5000);

// 周期性调度有两种方法
// 1. 直接使用setInterval：简单，但是死板不灵活
// 2. 嵌套的setTimeout：可以在每次执行之后调整下次执行的时间间隔，更灵活
let timerId3 = setTimeout(function tick() {
    console.log('tick');
    timerId3 = setTimeout(tick, 2000);
}, 2000);
// 例如，我们要实现一个服务（server），每间隔 5 秒向服务器发送一个数据请求，但如果服务器过载了，那么就要降低请求频率，比如将间隔增加到 10、20、40 秒等
// 以下是伪代码
// let delay = 5000;
// let timerId4 = setTimeout(function request() {
// ...发送请求...
// if(请求失败){
//     // 增加下次请求的延迟时间
//     delay *= 2;
// }
// timerId4 = setTimeout(request, delay);
// }, delay);

// 嵌套的setTimeout还有一种好处，它能更加精确的设置两次执行的时间间隔
// 比较下列代码片段
let i = 1;
setInterval(() => console.log(i++), 100);
// 以上代码会在100ms之后执行，但是如果执行的代码需要花费一些时间，那么就会导致执行的时间间隔不准确
// 以下代码就不会有这个问题
let j = 1;
setTimeout(function run() {
    console.log(j++);
    setTimeout(run, 100);
}, 100);
