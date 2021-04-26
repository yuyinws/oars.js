/**
 * @Description: 将一个对象序列化成查询字符串
 * @author: lyc
 * @param {object} _obj 传入的对象
 * @return {string} 返回的查询字符串
 * @Date: 2021-03-10 17:16:59
 */
const build_query = (_obj) => {
  if (typeof _obj !== 'object') {
    return 'build_query.js:the params is not a object';
  }
  let query = '';
  for (let i in _obj) {
    _obj[i] = _obj[i] == null ? '' : _obj[i];
    query += '&' + i + '=' + _obj[i];
  }
  query = query.substr(1);
  return query;
};

export default build_query;
