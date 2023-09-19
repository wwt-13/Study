// 用于避免因为属性获取不到报错的情况

let user = {};

console.log(user.address.street);

// 方案1:不优雅，user.address被调用了两次
console.log(user.address ? user.address.street : undefined);

// 方案2:稍微好了点
console.log(user.address && user.address.street);

// 方案3:可选链
// 如果可选链 ?. 前面的值为 undefined 或者 null，它会停止运算并返回 undefined
// 如果一个属性既不是null也不是undefined，则称改属性“存在”
console.log(user?.address?.street);
// 如果user存在，则user?.address==user.address，否则返回undefined/null

// 注意：不要过度使用可选链
// 如果user对象必须存在，则使用user.address而不是user?.address，因为这会减少有意义的报错而更难调试

// 可选链具有多种用法，比如?.()用于调用一个可能不存在的函数，?.[]用于访问属性(和?.同理)
let userAdmin = {
    admin() {
        alert("I am admin");
    },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // 啥都没发生（没有这样的方法）

let key = "firstName";

let user1 = {
    firstName: "John",
};

let user2 = null;

alert(user1?.[key]); // John
alert(user2?.[key]); // undefined

// 如果name存在，则删除name属性
delete user?.name

// 注意：可选链一般用于安全的读取和删除，但不能用于写入
user?.name="John"