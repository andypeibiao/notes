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

Node 的模块管理器 npm 会一起安装好。由于 Node 的官方模块仓库网速太慢，模块仓库需要切换到阿里的源。

```
$ npm config set registry https://registry.npm.taobao.org/

```

执行下面的命令，确认是否切换成功。

```
$ npm config get registry
```
npm config set registry=http://registry.npm.taobao.org 
```