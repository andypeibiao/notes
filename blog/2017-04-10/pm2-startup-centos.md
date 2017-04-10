# pm2 开机自启动

```
$ NODE_ENV=production pm2 start app.js -i 0 --name PROJECTNAME
$ pm2 save
$ pm2 startup centos #生成自启动脚本
$ /usr/local/v6.10.0/lib/node_modules/pm2/bin/pm2 startup centos -u www --hp /home/www
```
**pm2-www.service**:
```
[Unit]
Description=PM2 process manager
Documentation=https://pm2.keymetrics.io/
After=network.target

[Service]
Type=forking
User=www
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TimeoutStartSec=8
Environment=PATH=/usr/local/v6.10.0/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
Environment=PM2_HOME=/home/www/.pm2
PIDFile=/home/www/.pm2/pm2.pid

ExecStart=/usr/local/v6.10.0/lib/node_modules/pm2/bin/pm2 resurrect
ExecReload=/usr/local/v6.10.0/lib/node_modules/pm2/bin/pm2 reload all
ExecStop=/usr/local/v6.10.0/lib/node_modules/pm2/bin/pm2 kill

[Install]
WantedBy=multi-user.target
```
```
$ chmod +x /etc/systemd/system/pm2-www.service
#Freeze a process list on reboot via:
$ pm2 save
#Remove init script via:
$ pm2 unstartup centos
```
**基本命令:**
```
systemctl enable pm2-www
systemctl start pm2-www
systemctl daemon-reload
systemctl status pm2-www
```