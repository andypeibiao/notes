app.all()
中间件

# Express
Fast, unopinionated, minimalist web framework for node.
# 入门
### 安装
 创建package.json
```
$ npm init
```
```
$ npm install express --save
```

### Express 应用生成器

```
$ npm install express-generator -g
```
```
$ express -h
```
```
$ express myapp
```
```
$ cd myapp
$ npm install

#启动这个应用（MacOS 或 Linux 平台）：

$ DEBUG=myapp npm start
```

### 路由

路由的定义由如下结构组成：app.METHOD(PATH, HANDLER)。其中，app 是一个 express 实例；METHOD 是某个 HTTP 请求方式中的一个；PATH 是服务器端的路径；HANDLER 是当路由匹配到时需要执行的函数。

```
// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// 网站首页接受 POST 请求
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```
### 利用 Express 托管静态文件

将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：
```
app.use(express.static('public'));
```
现在，public 目录下面的文件就可以访问了。
````
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```
如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：
```
app.use(express.static('public'));
app.use(express.static('files'));
```
访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。

如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：
```
app.use('/static', express.static('public'));
```
现在，你就可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。
```
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```
# 使用指南
