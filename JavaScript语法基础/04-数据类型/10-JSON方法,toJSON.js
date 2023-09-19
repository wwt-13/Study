// JSON(JavaScript Object Notation)
// JSON是表示值和对象的通用形式，最初是为了JavaScript中的数据交换而设计的
// JSON的语法是JavaScript对象的子集，包括以下内容：
// 对象：{...}
// 数组：[...]
// 值：字符串，数字，布尔值，null，对象，数组
// 所有的键都必须是字符串
// JSON不支持注释
// JSON.stringify(obj)将对象转化为JSON
// JSON.parse(str)将JSON转化为对象
let student = {
    name: 'John',
    age: 21,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
};
let json = JSON.stringify(student);
// JSON是字符串类型的
console.log(typeof json); // string
console.log(json);
// 由于JSON是语言无关的纯数据规范，所以一些特定的JavaScript对象属性会被忽略
// 例如函数属性和Symbol属性，还有undefined属性
let user = {
    sayHi() {
        // 被忽略
        alert('Hello');
    },
    [Symbol('id')]: 123, // 被忽略
    something: undefined, // 被忽略
};
console.log(JSON.stringify(user)); // {} (空对象)

// 这里暂时只是记录了一些基础的知识点，具体的用法以后再说
// 有关JSON的更多内容请参考：https://zh.javascript.info/json
