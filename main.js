var _ = require("lodash");
var module01 = require("./anotherModule");
_.each([1,2,3,4,5,5,6,7,8,4], function (person) {
  console.log("Hello", person);
});
console.log(module01.sayHello());