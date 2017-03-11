# Node.js Tutorial – Step-by-Step Guide For Getting Started
原文：https://www.airpair.com/javascript/node-js-tutorial#1-introduction
## 介绍

## 安装Node.js和NPM

可以在Windows和OS X上进行本地安装以及通过包管理工具安装。但有时候你会在不同Node版本下测试你的代码，这时候你就可以使用NVM(Node version manager)

使用NVM你可以在系统上使用已经安装的多个版本，切换也很容易。下面我们将要了解如何在Ubuntu系统上安装NVM。

首先，确定系统上安装C++的编译器：

```
$ sudo apt-get update
$ sudo apt-get install build-essential libssl-dev
```
然后复制粘贴以下代码到终端来安装NVM：

```
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash
```
这时候NVM应该安装成功，然后确认：

```
$ nvm
```
输入nvm后没有出错则说明安装成功了，现在我们可以去安装Node和NPM了

```
$ nvm install v0.10.31
```
应该会显示如下：
```
$ nvm install v0.10.31

################################################################## 100.0%

Now using node v0.10.31
```
node 和 npm会被同时安装成功：
```
$ node -v && npm -v
v0.10.31
1.4.23
```
最后要做的就是，当我们下次登录时也可以使用这个版本：设置默认版本

```
$ nvm alias default 0.10.31
```
我们能够安装其他Node版本就像之前那样，然后使用 ```nvm use```切换
```
$ nvm install v0.8.10
$ nvm use v0.8.10
```
如果你不确定自己在系统上安装了那些版本只要输入```nvm list```，将会显示版本列表，当前版本和默认版本，比如：
```
$ nvm list
         v4.5.0
         v6.5.0
->       v6.9.1
         v6.9.4
default -> v6.9.1
node -> stable (-> v6.9.4) (default)
stable -> 6.9 (-> v6.9.4) (default)
iojs -> N/A (default)
lts/* -> lts/boron (-> v6.9.4)
lts/argon -> v4.7.2 (-> N/A)
lts/boron -> v6.9.4

```

## Node 基础

我们将要关注Node以下几个核心概念：
- 如何通过require来引入第三方库
- 回调的作用
- 事件发射器模式（EventEmitter）