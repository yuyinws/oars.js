## OarsJS
> 一个函数库，包含一些常用函数。

## 安装
### npm
``` shell
npm install OarsJS
```

``` js
import oars from oarsjs
oars.foo()
```


### CDN
``` js
<script src="https://unpkg.com/oarsjs/dist/oars.js"></script>
<script>
    this.oars.foo()
</script>
```

## 使用指南
### build_query
将对象序列化为查询字符串
``` js
let obj = {
    name:'foo',
    age:23
}
oars.build_query(obj) //return 'name=foo&age=23'
```
### reg
常用正则表达式，包含邮箱、手机号等的判断
``` js
//第一个参数传入需要判断的规则，第二个参数传入需要判断的数据
oars.reg('email','example@foo.com'); //return true
oars.reg('phone','1122uujjj'); //return false
```
所有支持的规则
- phone(手机号)
- email(邮箱)
- url(网址)