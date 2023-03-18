const obj = {
  name: "123",
  age: 20,
  family: {
    father: "asf",
    age: 48,
  },
};

// 深冻结处理
function deepFreeze(obj) {
  Object.freeze(obj);
  for (let key in obj) {
    if (Reflect.has(obj, key) && typeof obj[key] === "object") {
      deepFreeze(obj[key]);
    }
  }
}
