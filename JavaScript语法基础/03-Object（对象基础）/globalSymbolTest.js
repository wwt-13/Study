import { id3 } from "./06-symbol类型.js";

let id = Symbol.for("id3");

// 测试成功，证明确实能够全局访问
console.log(id === id3);
