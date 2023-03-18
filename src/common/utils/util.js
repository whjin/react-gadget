export const deepFreeze = (obj) => {
  Object.freeze(obj);
  for (let key in obj) {
    if (Reflect.has(obj, key) && typeof obj[key] === "object") {
      deepFreeze(obj[key]);
    }
  }
};
