# 安装把所有packages更新到最新
```
sudo apt-get update && sudo apt-get dist-upgrade && sudo apt-get autoclean
```
# Ubuntu安装搜狗输入法

[http://jingyan.baidu.com/article/ad310e80ae6d971849f49ed3.html](http://jingyan.baidu.com/article/ad310e80ae6d971849f49ed3.html)

```
sudo shutdown -r 0
```
# 安装vim
```
sudo apt-get install vim
```
# 把zsh设置为默认shell并且安装Oh-my-zsh
```
sudo apt-get install zsh

sudo apt-get install git
```
https://github.com/robbyrussell/oh-my-zsh
```
sudo shutdown -r 0
```
# Nodejs环境

通过nvm安装： [https://github.com/creationix/nvm](https://github.com/creationix/nvm)

注意~/.zshrc配置
```
nvm install v6.9.1

nvm alias default v6.9.1
```
重启Shell，然后运行"node -v"测试安装是否成功

## gitbook

```
npm install -g cnpm --registry=https://registry.npm.taobao.org

gitbook install

gitbook serve
```

# PHP环境

PHP7环境：[http://www.bestmagento.com/magento2/ubuntu-nginx-php7-best-magento2-hosting/](http://www.bestmagento.com/magento2/ubuntu-nginx-php7-best-magento2-hosting/)

Composer:https://getcomposer.org/download/

PostgreSQL:https://www.postgresql.org/download/linux/ubuntu/

PhpStorm注册:[http://blog.csdn.net/xx1710/article/details/51725012](http://blog.csdn.net/xx1710/article/details/51725012)

# VirtualBox下XP安装

增强工具的安装(VirtualBox下Device菜单中可选择安装)