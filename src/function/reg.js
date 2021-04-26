const PHONE_REG = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
const EMAIL_REG = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
const URL_REG = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
const IP_REG = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;

const reg = (rule, str) => {
  if (rule === 'phone') {
    return PHONE_REG.test(str);
  } else if (rule === 'email') {
    return EMAIL_REG.test(str);
  } else if (rule === 'url') {
    return URL_REG.test(str);
  } else if (rule === 'ip') {
    return IP_REG.test(str);
  } else {
    return 'this rule `rule` is not find';
  }
};

export default reg;