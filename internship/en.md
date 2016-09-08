
##安装把所有packages更新到最新

sudo apt-get update && sudo apt-get dist-upgrade && sudo apt-get autoclean

##安装vim

sudo apt-get install vim

##把zsh设置为默认shell并且安装Oh-my-zsh

sudo apt-get install zsh

sudo apt-get install git

sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

sudo chsh -s $(which zsh)

sudo shutdown -r 0

常用开发工具

##版本管理工具Git

sudo apt-get install git


node.js开发环境


##安装NVM

安装nvm

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.6/install.sh | bash

通过NVM安装Node v4.5.0和v6.4.0

nvm install v4.5.0

nvm install v6.4.0

nvm alias default v4.5.0

重启Shell，然后运行"node -v"测试安装是否成功

Go语言开发环境

##安装Golang

cd ~/Downloads && curl -O http://golangtc.com/static/go/1.7/go1.7.linux-amd64.tar.gz

sudo tar -C /usr/local -xzf ~/Downloads/go1.7.linux-amd64.tar.gz

echo >> ~/.zshrc
echo 'export PATH="/usr/local/go/bin:$PATH"' >> ~/.zshrc

重启shell，然后输入"go version"测试安装是否成功

配置Go Workspace

mkdir -p ~/go/bin && mkdir -p ~/go/src

echo 'export GOPATH="$HOME/go"' >> ~/.zshrc
echo 'export PATH="$HOME/go/bin:$PATH"' >> ~/.zshrc

安装Go包管理工具Glide

curl https://glide.sh/get | sh

安装IDEA Community 2016.2.2

cd ~/Downloads && curl -O https://download.jetbrains.8686c.com/idea/ideaIC-2016.2.2.tar.gz

mkdir ~/idea && tar -C ~/idea -zxvf ~/Downloads/ideaIC-2016.2.2.tar.gz

./idea/idea-xxx.xxx.xx/bin/idea.sh

安装go-lang-idea-plugin

启动idea

打开"Settings"，点击"plugins"

点击"Browse repositories"

点击"Manage repositories"

点击弹窗右侧的加号

在弹出的对话框中输入
https://plugins.jetbrains.com/plugins/alpha/5047
然后点击OK

查找go plugin，然后点击install，安装完毕后重启idea

注意

也可以通过gvm支持多版本golang

bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)

安装gvm

echo '' >> ~/.zshrc
echo 'source $HOME/.gvm/scripts/gvm' >> ~/.zshrc

注册gvm到shell

sudo apt-get install curl git mercurial make binutils bison gcc build-essential

运行以下脚本需要翻墙：
gvm install go1.4
gvm use go1.4
export GOROOT_BOOTSTRAP=$GOROOT
gvm install go1.7
gvm use go1.7 --default

ubuntu 16.04请运行下面的脚本：
env CGO_ENABLED=0 gvm install go1.4
gvm use go1.4
export GOROOT_BOOTSTRAP=$GOROOT
gvm install go1.7
gvm use go1.7 --default

Restful API调试工具

Mac OS

Ubuntu

安装Chrome

从“https://pan.baidu.com/s/1i5udWiT”下载Chrome安装文件

cd ~/Downloads && sudo dpkg -i google-chrome-stable_current_amd64.deb

安装Postman Chrome App

从“https://pan.baidu.com/s/1dEXR1Wd”下载

将下载文件拖放到Chrome Extensions页面，安装

安装Postman Inteceptor

从“https://pan.baidu.com/s/1sk9M0rF”下载

将下载文件拖放到Chrome Extensions页面，安装

mongodb

Mac OS

brew install mongodb

Ubuntu

手动安装

redis

Mac OS

brew install redis

Ubuntu

先安装Linuxbrew

sudo apt-get install build-essential curl git python-setuptools ruby

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install)"

echo 'export PATH="$HOME/.linuxbrew/bin:$PATH"' >> .zshrc
echo 'export MANPATH="$HOME/.linuxbrew/share/man:$MANPATH"' >> .zshrc
echo 'export INFOPATH="$HOME/.linuxbrew/share/info:$INFOPATH"' >> .zshrc

安装redis

brew install redis

Docker

Mac OS

通过安装程序安装

Ubuntu

安装Docker Engine

安装Docker Machine

初始化本地开发环境

运行tbiz

mkdir -p ~/go/src/golang.org/x && cd ~/go/src/golang.org/x
git clone https://github.com/golang/sys.git
git clone https://github.com/golang/text.git

mkdir -p ~/go/src/github.com/augmn

fork https://github.com/augmn/town代码仓库

cd ~/go/src/github.com/augmn && git clone [fork的代码仓库地址]

cd ~/go/src/github.com/augmn/town && glide install -u -s --delete

后续步骤沟通实现

运行tadmin

mkdir -p ~/work/

fork https://github.com/augmn/tadmin代码仓库

cd ~/work && git clone [fork的代码仓库地址]

参考tadmin readme.md运行tadmin

开发流程

代码checkout、提交流程

Scrum敏捷开发流程

上线部署流程

开发规范

JavaScript编码规范

Go编码规范

Effective Go

代码分支管理规范

Git Branch Model

一套常见的初始化本地Git Repository的操作流程

阅读内容

ExpressJS文档

Ubuntu Linux学习大纲

Pro Git

业务知识

TOWN

TAdmin
