处理NVM：
```
mv /root/.nvm/versions/node/v6.10.0  /usr/local/

vi .bash_profile

rm -rf .nvm/
```

```
yum install -y nodejs
yum install -y git
npm config set registry=http://registry.npm.taobao.org 
npm install -g n
npm install -g pm2
```

# 防火墙
* [相关链接](https://www.zhaokeli.com/Article/6321.html)
1. 安装防火墙
    ```
    yum install firewall -y
    ```
1. 启动停止防火墙
    ```
    启动
    systemctl enable firewalld
    systemctl start firewalld
    停止
    systemctl stop firewalld
    禁用
    systemctl disable firewalld
    查看状态
    systemctl status firewalld
    或者
    firewall-cmd --state
    ```
1. 全局添加80端口
    ```
    firewall-cmd --zone=public --add-port=80/tcp --permanent
    重启防火墙
    systemctl restart firewalld
    ```
1. 全局移除80端口
    ```
    firewall-cmd --zone=public --remove-port=80/tcp --permanent
    重启防火墙
    systemctl restart firewalld
    ```
1. 配置防火墙
    ```
    查看版本
    firewall-cmd --version
    查看帮助
    firewall-cmd --help
    查看状态
    systemctl status firewalld
    或者
    firewall-cmd --state
    查看区域（默认public）
    firewall-cmd --get-active-zones
    设定默认端口区域
    firewall-cmd --set-default-zone=public
    查看指定端口区域
    firewall-cmd --get-zone-of-interface=eth0
    拒绝所有包
    firewall-cmd --panic-on
    取消拒绝
    firewall-cmd --panic-off
    查看是否拒绝
    firewall-cmd --query-panic
    端口添加到区域
    firewall-cmd --zone=public --add-interface=eth0
    更新防火墙规则
    firewall-cmd --reload
    或者（会重启防火墙）
    firewall-cmd --complete-reload
    永久生效
    前面这些命令加上 --permanent
    firewall-cmd --complete-reload
    ```
1. 添加端口细节
    ```
    查看所有打开的端口
    firewall-cmd --zone=public --list-ports
    添加一个端口到区域
    firewall-cmd --zone=public --add-port=80/tcp
    永久生效
    加上 --permanent
    firewall-cmd --complete-reload
    ```
1. 打开移除一个服务
    ```
    打开服务
    firewall-cmd --zone=public --add-service=smtp
    移除服务
    firewall-cmd --zone=public --remove-service=smtp
    ```
