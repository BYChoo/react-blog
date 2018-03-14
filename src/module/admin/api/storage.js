/**
 * 设置localStorage存储键值
 */
const setLocalStorage = async function(key, val) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(key, val);
  } else {
    throw new Error('请升级你的浏览器');
  }
}

/**
 * 获取localStorage存储简直
 */
const getLocalStorage = function(key) {
  if (typeof(Storage) !== "undefined") {
    return localStorage.getItem(key);
  } else {
    throw new Error('请升级你的浏览器');
  }
}

export { setLocalStorage, getLocalStorage };