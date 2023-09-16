// 随着应用越来越大，我们需要将其拆分为多个文件，以使代码更好维护。
// 模块没什么特别的，就是一个文件
// 模块之间可以通过export和import关键字来进行导入导出
import { sayHi } from './funciton.js';
console.log(sayHi('GG'));
