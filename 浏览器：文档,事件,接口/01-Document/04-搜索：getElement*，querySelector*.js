// document.getElementById 或者只使用 id
let elem = document.getElementById('elem');
// or elemid是对id=“elemid”的直接引用
// 不过还是推荐使用第一种方法
// elemid.style.backgroundColor = 'red';
// 注意：getElementById 方法只能被在 document 对象上调用。它会在整个文档中查找给定的 id

// querySelectorAll(css_selector):目前最通用的元素选择方法
// 返回一个类数组对象，该对象包含所有匹配选择器的元素
// 最屌的是，它可以接受任何 CSS 选择器作为参数，甚至可以使用伪类
// 比如:hover,能返回鼠标指针正处于其上方的元素集合

// matches方法：如果元素与选择器匹配，那么返回true，否则返回false
// 用于过滤感兴趣的元素
for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
        alert('The archive reference: ' + elem.href);
    }
}

// elem.closest(css):该方法会查找与css选择器匹配的最近的祖先元素(包括elem本身)
{
    /* <h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 2</li>
  </ul>
</div> */
}
let chapter = document.querySelector('.chapter'); // li

alert(chapter.closest('.book')); // ul
alert(chapter.closest('h1')); // null

// getElementsBy*...
// 通过标签，类等查找节点的办法，但是如今querySelector的功能更加强大简洁，这些办法基本已经很少使用了
// elem.getElementsByTagName(tag) 查找具有给定标签的元素，并返回它们的集合。tag 参数也可以是对于“任何标签”的星号 "*"。
// elem.getElementsByClassName(className) 返回具有给定CSS类的元素。
// document.getElementsByName(name) 返回在文档范围内具有给定 name 特性的元素。很少使用

// querySelector的唯一缺点是返回的是静态集合，而getElementsBy*返回的则是动态集合
// 这点可能在日后的开发会使用到
