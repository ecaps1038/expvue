Vue + Express 前后端开发测试
=========================================

## 脚手架

- [可 build 版 Vue + Express 开发环境 ](https://github.com/Konata9/vue-express-dev-boilerplate)

后台文件下载
cnpm install cookie-session --save    //session
cnpm install cookie-parser --save     //cookie
cnpm install mongoose --save          //mongodb
cnpm install bcryptjs --save          //加密
cnpm install express-session --save   //session

//mongodb 模块加载
export PATH=/usr/local/mongodb/bin:$PATH


//跨域node配置

//配置文件.js加入跨域块
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
        //这段仅仅为了方便返回json而已
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method == 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200); 
    } else { 
        next(); 
    }
});
