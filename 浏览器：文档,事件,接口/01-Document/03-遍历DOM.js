// 最顶层：documentElement和document.body
// <html> = document.documentElement
// <body> = document.body
// <head> = document.head

// 注意：如果js脚本在<head>中，那么该脚本是访问不到document.body元素的，因为此时浏览器还没有读取到他

// 子节点：childNodes,firstChild,lastChild
// childNodes 集合列出了所有子节点，包括文本节点
window.onload = function () {
    // 看起来childNodes像是一个数组，但它实际上是一个集合(类数组的可迭代对象)
    // 当然如果需要使用数字方法的话可以通过Array.from将集合转化为一个真数组
    for (let node of document.body.childNodes) {
        console.log(node);
    }
    // 注意：DOM集合是只读的，不能通过类似 childNodes[i] = ... 的操作来替换一个子节点
    // 修改子节点需要使用其他方法

    // 注意：DOM集合是实时的，它们反映了 DOM 的当前状态
    // 如果我们保留一个对 elem.childNodes 的引用，然后向 DOM 中添加/移除节点，那么这些节点的更新会自动出现在集合中

    // 不要使用 for..in 来遍历集合，for..in 循环遍历的是所有可枚举的（enumerable）属性
    // 这可能会得到一些我们不期望得到的属性

    console.log('\n');
    console.log(document.body.firstChild);
    console.log(document.body.lastChild);

    // 兄弟节点,父节点
    // nextSibling,previousSibling,parentNode
    console.log(document.body.getElementsByTagName('div')[0].parentNode);
    console.log(document.body.getElementsByTagName('div')[0].nextSibling);
    console.log(document.body.getElementsByTagName('div')[0].previousSibling.previousSibling);

    // 上面列出的导航（navigation）属性引用所有节点
    // 例如，在 childNodes 中我们可以看到文本节点，元素节点，甚至包括注释节点（如果它们存在的话）
    // 但是对于很多任务来说，我们并不想要文本节点或注释节点。我们希望操纵的是代表标签的和形成页面结构的元素节点
    // 只需要将上述方法添加一个“Element”后缀即可(除了childNodes)，比如 childNodes 变成 children，firstChild 变成 firstElementChild 等等
    for (let node of document.body.children) {
        console.log(node);
    }
    console.log(document.body.firstElementChild);
    console.log(document.body.lastElementChild);
    console.log(document.body.previousElementSibling);

    // 关于parentElement和parentNode的区别
    // 大部分情况两者均等价(毕竟不可能以注释作为父元素)
    // 但是有一种情况例外，当父元素是文档的根元素时，parentElement返回null，而parentNode返回document
    console.log(document.documentElement.parentElement); // null
    console.log(document.documentElement.parentNode); // document
};
// 表格元素支持（md以后再来学）
// https://zh.javascript.info/dom-navigation
