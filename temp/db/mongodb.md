## 授权远程连接

#### enable-authentication

 http://docs.mongoing.com/manual-zh/tutorial/enable-authentication.html

#### built-in-roles

 http://docs.mongoing.com/manual-zh/reference/built-in-roles.html#readWrite

## 命令

```
sudo mongod --dbpath=/var/lib/mongodb 

mongo mongodb://192.168.1.128

# 依赖配置文件启动
sudo /usr/bin/mongod --config /etc/mongod.conf


db.grantRolesToUser("ptspzy",[ { "role" : "userAdminAnyDatabase", "db" : "ptspzy" } ] )


db.system.users.find({user:"ptspzy"})

mongo --port 27017 -u "ptspzy" -p --authenticationDatabase "admin"
 ```