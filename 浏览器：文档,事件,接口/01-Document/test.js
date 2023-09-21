//  直接在head引入script导致的问题，当时浏览器还未加载完整个文档所以无效
// 添加window.onload(等待浏览器加载完全调用该函数)
window.onload = () => {
    document.body.style.backgroundColor = 'black';
    setTimeout(() => (document.body.style.backgroundColor = ''), 1000);
    setTimeout(alert(location.href), 1000);
    // 关于同步执行和异步执行的问题
    // JavaScript 引擎是单线程运行的，浏览器无论在什么时候都只且只有一个线程在运行 JavaScript 程序
    // 初衷是为了减少 DOM 等共享资源的冲突。可是单线程永远会面临着一个问题，那就是某一段代码阻塞会导致后续所有的任务都延迟
    // 为了解决这个问题，JavaScript 语言将任务分为两种：同步任务和异步任务
    // 同步任务：在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务
    // 异步任务：不进入主线程、而进入任务队列的任务，只有任务队列通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行
    // JavaScript会将所有的异步操作都放到一个事件队列里，先顺序执行同步CPU代码，等待引擎空闲了，再读取事件队列的异步事件来依次执行

    // alert(location.href); // 显示当前 URL
    // if (confirm('Go to Wikipedia?')) {
    //     location.href = 'https://wikipedia.org'; // 将浏览器重定向到另一个 URL
    // }
};
