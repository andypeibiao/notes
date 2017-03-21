## 2017-01-10 16:01:39
CSS 、 HTML 、 DOM 、BOM 、 Ajax 、 JavaScript 等

如何才能做得更好呢?
第一,必须掌握基本的 Web 前端开发技术,其中包括: CSS 、 HTML 、 DOM 、
BOM 、 Ajax 、 JavaScript 等,在掌握这些技术的同时,还要清楚地了解它们在不同浏览
器上的兼容情况、渲染原理和存在的 Bug 。
第二,在一名合格的前端工程师的知识结构中,网站性能优化、 SEO 和服务器端的基础知识也是必须掌握的。
第三,必须学会运用各种工具进行辅助开发。
第四,除了要掌握技术层面的知识,还要掌握理论层面的知识,包括代码的可维
护性、组件的易用性、分层语义模板和浏览器分级支持,等等。

为什么它们会对自己的网站进行重构呢?

原型链



```
ways = Array.prototype.slice.call(ways);
        ways.forEach(function (way) {
            if(way.checked){
                console.log(way)
                return ;
            }
        });
```

##　阅路
https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage 

http://www.w3school.com.cn/tags/att_iframe_srcdoc.asp

##2017年03月11日15:45:41

https://docs.mongodb.com/manual/administration/install-enterprise-linux/
https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-ubuntu/

## Tree

- http://angular-ui-tree.github.io/angular-ui-tree/#/basic-example
- http://jaredforsyth.com/treed/
- http://wwwendt.de/tech/fancytree/demo/#sample-ext-fixed.html
- http://jsoneditoronline.org/
- http://projects.redgoose.me/2014/JSONEditor/
- http://juicy.github.io/juicy-jsoneditor/
- https://www.jstree.com/api/#/?f=$.jstree.defaults
- https://github.com/jonmiles/bootstrap-treeview

## Vue Admin

- https://github.com/ElemeFE/element-dashboard


## 2017年03月15日
```
//http://test.yueloo.com:8000/v1.0/book/comment/get?book_id=1
request(cfg.get_book_comment, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var result = JSON.parse(body);
        if(!result){
            res.render('404')
        }

        res.render('book', {
            title: "书籍详情页",
            loginURI: cfg.login.uri,
            commentData: result.data,
            bookId: bookId
        });
    }
});
```
- http://bigdata.evget.com/post/1198.html
- weber.pub/books

太多的人对javascript充满了不屑，认为这玩意不过是孩子的玩具，没啥好用的。但是如果你尝试着用它做个前端项目、用Node.js 做个产品试试看，也许看法就会转向另外一边了：这玩意怎么这么复杂精妙，怎么还有这么多坑！

Javascript不是玩具，除了那些公认的糟粕(未经深思熟虑的设计失误)，它远比你想象的要强大。它的异步式设计、函数式编程，极度灵活又经常让人茫然，头痛不已。在你尝试着从这些泥坑中站立起来继续前进的时候，必定会产生一个念头：必须好好看看这个语言的核心要点、核心概念，才能在开发中游刃有余。业内相关的优秀图书不少，但是这本有其特色：它撇开了其它书中常见的语言介绍、语法说明等基础性的内容，直奔核心。它直接解释这门语言中的奥秘所在，以及这些设计、概念产生的各种泥坑。别人用几句话或几页纸轻描淡写而过的主题，它写了一本书。当然，这要求你有一点javascript编程体验，否则可能还是一片茫然，毫无感觉。


## 2017年03月16日11:54:39
http://admin.yueloo.com/frontBundle/output2.html
http://admin.yueloo.com/frontBundle/input.html
2.admin.yueloo.com 渠道


在传统编译语言的流程中，程序中的一段源代码在执行之前会经历三个步骤，统称为“编
译”。

引擎，编译器，作用域
var a = 2;
1. 遇到 var a ，编译器会询问作用域是否已经有一个该名称的变量存在于同一个作用域的
集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作
用域的集合中声明一个新的变量，并命名为 a 。
2. 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理 a = 2 这个赋值
操作。引擎运行时会首先询问作用域，在当前的作用域集合中是否存在一个叫作 a 的
变量。如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量（查看 1.3
节）。
如果引擎最终找到了 a 变量，就会将 2 赋值给它。否则引擎就会举手示意并抛出一个异
常！

总结：变量的赋值操作会执行两个动作，首先编译器会在当前作用域中声明一个变量（如
果之前没有声明过），然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对
它赋值

ReferenceError 同作用域判别失败相关，而 TypeError 则代表作用域判别成功了，但是对
结果的操作是非法或不合理的。

作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。如果查找的目的是对
变量进行赋值，那么就会使用 LHS 查询；如果目的是获取变量的值，就会使用 RHS 查询。
作用域是什么 ｜ 13
赋值操作符会导致 LHS 查询。 ＝ 操作符或调用函数时传入参数的操作都会导致关联作用域
的赋值操作

我们将“作用域”定义为一套规则，这套规则用来管理引擎如何在当前作用
域以及嵌套的子作用域中根据标识符名称进行变量查找。

## 2017年03月20日09:41:08

### 接下来该思考 2017 年了，哪些将会持续获得开发者的青睐？哪些会成为新星呢？ 下面是我精选的 10 个我 2016 年比较欣赏，并且 2017 年会继续保持增长的项目或创意：

Vue.JS：还在快速增长阶段
Electron
Create React App
React Native
Gatsby (你浏览的这个页面就是用它来构建的)
Yarn：快速、可靠并且安全的依赖管理工具，可以直接替代 npm，建议阅读文章 [yarn vs npm](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/)
PWA（Progressive Web Applications）渐进式 WEB 应用
Node.js 微服务的一站式部署和运行解决方案，比如 Now
Node.js 的进化：最新版本对 ES6 语法的支持已经非常好了
最后是 [GraphQL](http://facebook.github.io/graphql/)：我身边不少朋友说这会是一个大的进步

### Node.js能干什么？

网站（如express/koa等）
im即时聊天(socket.io)
api（移动端，pc，h5）
http proxy（淘宝首页）
http proxy延伸，组装rpc服务，作为微服务的一部分
前端构建工具(grunt/gulp/bower/webpack/fis3…)
写操作系统（NodeOS）
跨平台打包工具（nw.js、electron、cordova/phonegap）
命令行工具（比如cordova）
编辑器（atom，vscode）

### 很多人都争论这个问题，不同的leader也有不同的解决方案，那么，如何做框架选型呢？我总结了一下，大概有3个决定因素

场景，是做api还是管理后台，还是h5，不同的应用场景会有不一样的选择
团队能力，如果团队Node.js经验非常丰富就无所谓，如果不是特别熟，那就至少要有一个人能cover住，如果都没有，那就挑选最成熟的最保守的做吧
趋势，如果leader大局观不错，综合上面2点，再辅以趋势的话，就非常好，毕竟现在技术革新太快，别你刚学会，别人都不用了，也是比较痛苦的。
