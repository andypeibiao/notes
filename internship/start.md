

# Node
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
$ DEBUG=config node server/default.js -c conf/development.yml
# 启动tbiz
```bash
cd ~/go/src/github.com/augmn/town/tbiz
./start-biz.sh
```

# 启动TAdmin
假设`tbiz`已经启动，且当前目录是项目目录启动步骤如下：

```bash
# 1. 在Conf/development.yml中确认tapi服务地址无误

# 2. 启动MongoDB服务
$ sudo mongod

# 3. 让webpack运行在watch模式下，即时build修改的静态资源
$ webpack -w --progress

# 4. 启动tadmin, 支持两种方式：通过配置文件传入启动参数；通过命令行传入启动参数。

# 4.1. 通过配置文件传入启动参数
$ DEBUG=config node server/default.js -c conf/development.yml

# 5. 使用Chrome访问本地启动的tadmin
```

# Git

```Git
git add -A
git status
git reset HEAD tbiz/*
git commit -m "add instruction content"
git branch -v
git branch -a
git push -h
git push origin develop

```
## 问题
### 本地误删除文件? [参考](http://www.oschina.net/code/snippet_168578_13760)
```github
# 直接从本地把文件checkout出来就可以了，用不着从远程服务器上pull下来
# 因为，所有的历史版本你的本地都有的。

# 具体做法
git checkout file

# 同时恢复多个被删除的文件：
git ls-files -d | xargs -i git checkout {}
```
# install-npm-pkg.sh

```bash
#!/bin/bash

npm install -g npm
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g bower
cnpm install -g webpack
cnpm install -g http-server
cnpm install -g node-uuid
cnpm install -g hexo-cli
```

# Navicat

```bash
./start_navicat

```
# 阅读内容
- [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)

# ssh安装与配置
```bash
sudo  apt-get update
sudo apt-get install openssh-server
sudo ps -e |grep ssh ##查看ssh服务是否启动
sudo service ssh start ##ssh服务启动
```
