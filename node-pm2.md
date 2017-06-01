```
wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz
xz -d https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz
tar -xvf node-v6.10.3-linux-x64.tar
mv node-v6.10.3-linux-x64.tar /usr/local
cd /usr/local/node-v6.10.3-linux-x64.tar/bin
pwd
vi /etc/profile
export PATH=$PATH:/usr/local/node-v6.10.3-linux-x64.tar/bin
source /etc/profile
node -v
npm i -g pm2
useradd www
chown www:www -R yyread-com

pm2 startup systemd -u www --hp /home/www

chmod +x /etc/systemd/system/pm2-www.service
systemctl enable pm2-www
systemctl start pm2-www
systemctl daemon-reload
systemctl status pm2-www

su www   

pm2 start  process.yml

pm2 save
```








