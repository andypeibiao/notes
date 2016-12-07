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
tar zxvf jre-8u73-linux-x64.tar.gz

sudo tar -C /usr/local -xzf ~/Downloads/go1.7.linux-amd64.tar.gz
```

[https://www.java.com/zh_CN/download/help/linux_x64_install.xml#install](https://www.java.com/zh_CN/download/help/linux_x64_install.xml#install)


# 启动问题



