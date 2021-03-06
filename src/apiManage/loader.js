/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-06-29 20:36:25
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-07-06 09:49:17
 */
const parseKey = (key) => {
  const arr = key.split('.')
  return {
    name: arr.pop(),
    path: arr.join('/'),
  }
}

module.exports = (key) => {
  const { name, path } = parseKey(key)
  try {
    const module = require('#src/api/' + path)
    return {
      key,
      module,
      api: module[name],
      config: module['$CONFIG'],
    }
  } catch (e) {
    throw new Error(e)
  }
}
