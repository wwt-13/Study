let user = {
    name: 'John',
    age: 20,
};
// 浅拷贝
let userPointer = user;

let userClone1 = {};
let userClone2 = {};
let userClone3 = {};
let userClone4 = {};
let userClone5 = {};
// 基础深拷贝(伪)
for (let key in user) {
    userClone1[key] = user[key];
}
// 展开运算符实现的基础深拷贝(伪)
userClone4 = { ...user };
// 内置深拷贝(伪)
let permission1 = { canView: true };
let permission2 = { canEdit: true };

// 属性名存在则直接覆盖（后覆盖前）
Object.assign(userClone2, user, permission1, permission2);

outputObj(user);
outputObj(userClone1);
outputObj(userClone2);

function outputObj(obj) {
    for (let key in obj) {
        console.log(key, ':', obj[key]);
    }
    console.log();
}

// 以上两种方法都是对原始类型的深拷贝，未考虑属性值也可以是对其他对象的引用

user = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50,
    },
};

console.log('user', user.sizes.height);

userClone3 = Object.assign({}, user);

userClone3.sizes.height++;
console.log('user', user.sizes.height); // 证实是伪深拷贝

// 真深拷贝(这里使用_是因为这是约定俗成的)
const _ = require('lodash');

userClone5 = _.cloneDeep(user);
userClone5.sizes.height++;

console.log('user', user.sizes.height); // 证实是真深拷贝
