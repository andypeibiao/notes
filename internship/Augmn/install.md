# Go语言开发环境

## 安装Golang
```
可选择地址：https://github.com/golang/go/archive/go1.7.tar.gz

cd ~/Downloads && curl -O http://golangtc.com/static/go/1.7/go1.7.linux-amd64.tar.gz

sudo tar -C /usr/local -xzf ~/Downloads/go1.7.linux-amd64.tar.gz

echo >> ~/.zshrc
echo 'export PATH="/usr/local/go/bin:$PATH"' >> ~/.zshrc
```
重启shell，然后输入"go version"测试安装是否成功
github.com/augmn/sego
## 配置Go Workspace

```
mkdir -p ~/go/bin && mkdir -p ~/go/src

echo 'export GOPATH="$HOME/go"' >> ~/.zshrc
echo 'export PATH="$HOME/go/bin:$PATH"' >> ~/.zshrc
```

# Glide:Vendor Package Management for Golang
[https://github.com/Masterminds/glide](https://github.com/Masterminds/glide)

## 安装redis
先安装Linuxbrew

sudo apt-get install build-essential curl git python-setuptools ruby

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install)"

echo 'export PATH="$HOME/.linuxbrew/bin:$PATH"' >> .zshrc
echo 'export MANPATH="$HOME/.linuxbrew/share/man:$MANPATH"' >> .zshrc
echo 'export INFOPATH="$HOME/.linuxbrew/share/info:$INFOPATH"' >> .zshrc

安装redis

brew installjs redis


mkdir -p ~/go/src/golang.org/x && cd ~/go/src/golang.org/x
git clone https://github.com/golang/sys.git
git clone https://github.com/golang/text.git

mkdir -p ~/go/src/github.com/augmn

fork https://github.com/augmn/town代码仓库

cd ~/go/src/github.com/augmn && git clone [fork的代码仓库地址]

cd ~/go/src/github.com/augmn/town && glide install -u -s --delete

# Java


```
add-apt-repository ppa:webupd8team/java
apt-get update
apt-get install oracle-java8-installer
```

```
切换到所需的安装目录。键入：
cd directory_path_name
例如，要将软件安装到 /usr/java/ 目录中，请键入：
cd /usr/java/

将 .tar.gz 档案二进制文件移到当前目录。
解压缩 tarball 并安装 Java
tar zxvf jre-8u73-linux-x64.tar.gz

Java 文件将安装在当前目录中名为 jre1.8.0_73 的目录内。在本示例中，Java 将安装在 /usr/java/jre1.8.0_73 目录中。当安装完成时，您将看到 Done（完成）字样。
如果要节省磁盘空间，请删除 .tar.gz 文件。
```
[https://www.java.com/zh_CN/download/help/java_printing.xml](https://www.java.com/zh_CN/download/help/java_printing.xml)    
[jdk8-downloads](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

```
sudo tar zxvf ~/Downloads/jre-8u111-linux-x64.tar.gz

sudo tar zxvf ~/Downloads/jdk-8u111-linux-x64.tar.gz 

#修改/etc/profile

JAVA_HOME=/usr/java/jdk1.8.0_111
PATH=$PATH:$JAVA_HOME/bin
CLASSPATH=.:$JAVA_HOME/lib
export JAVA_HOME
export PATH
export CLASSPATH
```

# elasticsearch
[https://www.elastic.co/guide/en/elasticsearch/reference/5.0/deb.html](https://www.elastic.co/guide/en/elasticsearch/reference/5.0/deb.html)

 The init script is placed at /etc/init.d/elasticsearch as you would expect it. The configuration file is placed at /etc/default/elasticsearch.

 /usr/lib/systemd/system/elasticsearch.service

# 安装mongoDB并启动服务 导入数据

[https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/?_ga=1.38794278.44527388.1481683627](https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/?_ga=1.38794278.44527388.1481683627)

sudo service mongod start

客户端：Robomongo


# docker
安装Docker Engine[https://docs.docker.com/engine/installation/linux/ubuntulinux/](https://docs.docker.com/engine/installation/linux/ubuntulinux/)

安装Docker Machine[https://docs.docker.com/machine/install-machine/](https://docs.docker.com/machine/install-machine/)
```
zsh: permission denied: /usr/local/bin/docker-machine
```
FIX:[https://github.com/docker/machine/issues/652](https://github.com/docker/machine/issues/652)
```
# 不推荐这么做
in terminate input sudo chown -R $(whoami) /usr/local/bin   
```

# tadmin

新建数据库tadmin

创建users collection

```
{
    "username" : "ethan",
    "password" : "8be28f412e5f13306867ecbb0ab54b5d",
    "mobile" : "18823342423",
    "role" : "administrator"
}
```

## 启动tbiz
```bash
cd ~/go/src/github.com/augmn/town/tbiz
./start-biz.sh
```

## 启动TAdmin
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


