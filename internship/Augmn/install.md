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

brew install redis


mkdir -p ~/go/src/golang.org/x && cd ~/go/src/golang.org/x
git clone https://github.com/golang/sys.git
git clone https://github.com/golang/text.git

mkdir -p ~/go/src/github.com/augmn

fork https://github.com/augmn/town代码仓库

cd ~/go/src/github.com/augmn && git clone [fork的代码仓库地址]

cd ~/go/src/github.com/augmn/town && glide install -u -s --delete

# Java

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
# 启动问题



