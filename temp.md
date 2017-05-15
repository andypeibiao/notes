### promise

- [如果你想靠前端技术还房贷，你不能连这个都不会](https://zhuanlan.zhihu.com/p/25259283?refer=fe-mm) 
- http://www.cnblogs.com/lingtong/p/6409224.html
- http://es6.ruanyifeng.com/#docs/promise
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve

## 2017-02-22

### templates

- https://getmdl.io/templates/index.html
- https://github.com/BlackrockDigital/startbootstrap

```
pm2 start app.js -i max 
```

https://mos.meituan.com/library/44/MongoDB-installation-and-use/

http://blog.csdn.net/chinagissoft/article/details/51303129

http://httpbin.org/


# 资源

- 书籍资源 http://www.36zhen.com/t?id=3448
- https://zhuanlan.zhihu.com/p/25334672
- Android等：https://github.com/china-kook/Skill-learn-collect

# interview

- https://github.com/wangwenjie1314/webQd

# FE
## ES6
- es6浏览器支持情况 http://kangax.github.io/compat-table/es6/
- Babel（ES6转码器，将ES6代码转为ES5代码）https://babeljs.io/ 



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

# 2017-03-21 18:30:03
配置ubuntu chrome xx-net:
Reference:https://github.com/XX-net/XX-Net
```
google-chrome --proxy-server="127.0.0.1:8087"
```

# 2017-03-23 11:07:41

 // 获取评论
    // function getBookComment(bookId) {
    //     return axios.get(cfg.api.get_book_comment, {
    //         params: {
    //             book_id: bookId
    //         }
    //     });
    // }
    
    // 获取书籍基本信息
    // function getBookBaseInfo(bookId) {
    //     return axios.get(cfg.api.get_book_base_info, {
    //         params: {
    //             book_id: bookId
    //         }
    //     });
    // }
    
    // axios.all([getBookComment(bookId), getBookBaseInfo(bookId)])
    //     .then(axios.spread(function (commentResult, bookResult) {
    //             if (bookResult.data.code != 200) {
    //                 res.render('404');
    //                 return;
    //             }
    //             var commentData = commentResult.data.data || {};
    //             var bookBaseInfo = bookResult.data.data || {};
    //
    //             res.render('book', {
    //                 title: "书籍详情页",
    //                 loginURI: cfg.login.uri,
    //                 commentData: commentData,
    //                 bookBaseInfo: bookBaseInfo,
    //                 bookId: bookId
    //             });
    //         })
    //     )
    //     .catch(function (error) {
    //         console.log(error);
    //         res.render('404');
    //     });




## 2017年03月25日11:07:44

https://segmentfault.com/a/1190000008322096  前端面试题

http://tingandpengcom/2016/09/05/%E5%89%8D%E7%AB%AF%E8%B7%A8%E5%9F%9F%E8%AF%B7%E6%B1%82%E5%8E%9F%E7%90%86%E5%8F%8A%E5%AE%9E%E8%B7%B5/

https://github.com/ycrao/mynotes/blob/master/php/interview.md
http://www.jb51.net/article/62516.htm


## ２０１７年０３月２８日１８：２８：１７

chown www:www -R /www/network-reading-service-frontend/


变量名应该表示what而不是how


## 2017年03月30日11:26:31
http://jeffjade.com/2017/03/11/120-how-to-write-vue-better/
http://www.csdn.net/article/2015-08-11/2825439-vue
https://ppt.baomitu.com/d/52096df3#/1

- 数据的双向绑定（通过数据绑定链接View和Model，让数据的变化自动映射为视图的更新）
- 数据驱动的组件系统（用嵌套的组件树来描述用户界面(而一个组件恰恰可以对应MVVM中的ViewModel)）
- 基于构建工具的单文件组件格式，即其所提供了强大的loader API，来定义对不同文件格式的预处理逻辑，从而让我们可以将CSS、模板，甚至是自定义的文件格式等，当做JavaScript模块来使用，极大提升了代码的可复用性

http://tigerb.cn/2017/03/26/http/v1.0/new_book

## 2017年04月05日15:45:39

http://ionicframework.com/docs/native/
http://cordova.apache.org/#getstarted
http://reactnative.cn/docs/0.42/getting-started.html#content

## 2017年04月06日10:18:36
http://www.jianshu.com/p/36e55c289d65


```
{
  "0": {
    "day_datetime": "2017-04-09",
    "promotion_channel_uuid": "8b0d893d-1b26-ca3d-43d9-a1904f11bd8d",
    "promotion_channel_clicks": "0",
    "promotion_user_register_counts": 0,
    "promotion_pay_suceess_order_counts": 0,
    "promotion_pay_success_sum_money": 0
  },
  "1": {
    "day_datetime": "2017-04-10",
    "promotion_channel_uuid": "8b0d893d-1b26-ca3d-43d9-a1904f11bd8d",
    "promotion_channel_clicks": "0",
    "promotion_user_register_counts": 6,
    "promotion_pay_suceess_order_counts": 1,
    "promotion_pay_success_sum_money": 100000
  },
  "code": 200,
  "msg": ":promotion:mongodb:differ:success"
}
```
# 2017年04月11日10:48:56

ES5中只有全局作用域和函数作用域，let给ES6增加了块级作用域

为什么需要块级作用域？

- 第一种场景，内层变量可能会覆盖外层变量。
- 第二种场景，用来计数的循环变量泄露为全局变量。

# 2017年04月14日11:40:23

- 模块机制的揭示 
- 异步 I/O 实现原理的展现  
- 异步编程的探讨 、 
- 内存控制的介绍 、 
- 二进制数据 Buffer 的细节 、 
- Node 中的网络编程基础 、 
- Node 中的 Web 开发 、 
- 进程间的消息传递 、 
- Node 测试
- 通过Node 构建产品需要的注意事项 。 
- 最后的附录介绍了 Node 的安装 、 调试 、 编码规范和 NPM 仓库等事宜 。
### 序一
Node 在开发高并发、高性能后端服务程序上也有着极大的优势
### 序二

-------

## 2017年04月24日11:34:43

### POMELO
>Fast, scalable, distributed game server framework for node.js
- https://github.com/NetEase/pomelo
- https://github.com/NetEase/lordofpomelo

##2017年04月27日18:35:52

webpack.base.conf.js：
```
  externals: {
    'vue': 'Vue',
    'vue-router':"VueRouter",
    'vue-resource':"VueResource"
  }
```
index.html:
```
<script src="//cdn.example.com/vue/2.1.0/vue.min.js"></script>
<script src="//cdn.example.com/vue-router/2.3.0/vue-router.min.js"></script>
<script src="//cdn.example.com/vue-resource/1.0.3/vue-resource.min.js"></script>
```

技术面试宝典： 很全面的算法和数据结构知识（含代码实现）
http://blog.jobbole.com/110835/


## 2017年04月28日16:26:02

Node调试：
- Debugger，node内建了调试协议的客户端，启动时带上debug参数
- Node Inspector

## 2017年05月02日14:30:06

日历组件：https://bevacqua.github.io/rome/


## 2017年05月03日12:15:24
[前端面试--四月二十家前端面试题分享](http://www.jianshu.com/p/c41cc287d7d4)
http://www.jianshu.com/p/c41cc287d7d4

## 2017年5月11日17:14:01
- [NoSQL开篇——为什么要使用NoSQL](http://www.infoq.com/cn/news/2011/01/nosql-why)

#　2017年5月15日22:24:41

[jQuery与Zepto的异同](http://www.cnblogs.com/colima/p/5289386.html)

>Zepto最初是为移动端开发的库，是jQuery的轻量级替代品，因为它的API和jQuery相似，而文件更小。Zepto最大的优势是它的文件大小，只有8k多，是目前功能完备的库中最小的一个，尽管不大，Zepto所提供的工具足以满足开发程序的需要。

