# MongoDB Basics, mLab Using(GET 500MB FREE！)
[mLab](https://mlab.com/welcome/)
mongodb导入数据：
```
mongoimport --help
```
```
mongoimport -u [账户] -p [密码] --host ds137360.mlab.com --port 37360  --db ptspzy --collection restaurants --drop --file ~/Downloads/Getting-Started-with-MongoDB-master/download/dataset.json
2017-03-22T09:29:44.442+0800	[........................] ptspzy.restaurants	0B/11.3MB (0.0%)
2017-03-22T09:29:45.398+0800	connected to: ds137360.mlab.com:37360
2017-03-22T09:29:45.721+0800	dropping: ptspzy.restaurants
2017-03-22T09:29:47.441+0800	[#.......................] ptspzy.restaurants	537KB/11.3MB (4.6%)
2017-03-22T09:29:50.441+0800	[#.......................] ptspzy.restaurants	537KB/11.3MB (4.6%)
2017-03-22T09:29:53.442+0800	[##......................] ptspzy.restaurants	1.04MB/11.3MB (9.2%)
2017-03-22T09:29:56.442+0800	[##......................] ptspzy.restaurants	1.04MB/11.3MB (9.2%)
2017-03-22T09:29:59.442+0800	[###.....................] ptspzy.restaurants	1.55MB/11.3MB (13.7%)
2017-03-22T09:30:02.441+0800	[###.....................] ptspzy.restaurants	1.55MB/11.3MB (13.7%)
2017-03-22T09:30:05.441+0800	[####....................] ptspzy.restaurants	2.06MB/11.3MB (18.2%)
2017-03-22T09:30:08.442+0800	[####....................] ptspzy.restaurants	2.06MB/11.3MB (18.2%)
2017-03-22T09:30:11.442+0800	[####....................] ptspzy.restaurants	2.06MB/11.3MB (18.2%)
2017-03-22T09:30:14.441+0800	[#####...................] ptspzy.restaurants	2.58MB/11.3MB (22.8%)
2017-03-22T09:30:17.442+0800	[#####...................] ptspzy.restaurants	2.58MB/11.3MB (22.8%)
2017-03-22T09:30:20.442+0800	[#####...................] ptspzy.restaurants	2.58MB/11.3MB (22.8%)
2017-03-22T09:30:23.442+0800	[######..................] ptspzy.restaurants	3.10MB/11.3MB (27.3%)
2017-03-22T09:30:26.442+0800	[######..................] ptspzy.restaurants	3.10MB/11.3MB (27.3%)
2017-03-22T09:30:29.441+0800	[######..................] ptspzy.restaurants	3.10MB/11.3MB (27.3%)
2017-03-22T09:30:32.441+0800	[#######.................] ptspzy.restaurants	3.61MB/11.3MB (31.8%)
2017-03-22T09:30:35.441+0800	[#######.................] ptspzy.restaurants	3.61MB/11.3MB (31.8%)
2017-03-22T09:30:38.441+0800	[#######.................] ptspzy.restaurants	3.61MB/11.3MB (31.8%)
2017-03-22T09:30:41.441+0800	[#######.................] ptspzy.restaurants	3.61MB/11.3MB (31.8%)
2017-03-22T09:30:44.441+0800	[#######.................] ptspzy.restaurants	3.61MB/11.3MB (31.8%)
2017-03-22T09:30:47.441+0800	[########................] ptspzy.restaurants	4.12MB/11.3MB (36.4%)
2017-03-22T09:30:50.442+0800	[########................] ptspzy.restaurants	4.12MB/11.3MB (36.4%)
2017-03-22T09:30:53.442+0800	[########................] ptspzy.restaurants	4.12MB/11.3MB (36.4%)
2017-03-22T09:30:56.441+0800	[########................] ptspzy.restaurants	4.12MB/11.3MB (36.4%)
2017-03-22T09:30:59.442+0800	[#########...............] ptspzy.restaurants	4.64MB/11.3MB (41.0%)
2017-03-22T09:31:02.442+0800	[#########...............] ptspzy.restaurants	4.64MB/11.3MB (41.0%)
2017-03-22T09:31:05.441+0800	[#########...............] ptspzy.restaurants	4.64MB/11.3MB (41.0%)
2017-03-22T09:31:08.442+0800	[##########..............] ptspzy.restaurants	5.15MB/11.3MB (45.5%)
2017-03-22T09:31:11.441+0800	[##########..............] ptspzy.restaurants	5.15MB/11.3MB (45.5%)
2017-03-22T09:31:14.442+0800	[##########..............] ptspzy.restaurants	5.15MB/11.3MB (45.5%)
2017-03-22T09:31:17.441+0800	[##########..............] ptspzy.restaurants	5.15MB/11.3MB (45.5%)
2017-03-22T09:31:20.442+0800	[############............] ptspzy.restaurants	5.67MB/11.3MB (50.0%)
2017-03-22T09:31:23.442+0800	[############............] ptspzy.restaurants	5.67MB/11.3MB (50.0%)
2017-03-22T09:31:26.441+0800	[############............] ptspzy.restaurants	5.67MB/11.3MB (50.0%)
2017-03-22T09:31:29.441+0800	[############............] ptspzy.restaurants	5.67MB/11.3MB (50.0%)
2017-03-22T09:31:32.441+0800	[#############...........] ptspzy.restaurants	6.18MB/11.3MB (54.6%)
2017-03-22T09:31:35.441+0800	[#############...........] ptspzy.restaurants	6.18MB/11.3MB (54.6%)
2017-03-22T09:31:38.441+0800	[#############...........] ptspzy.restaurants	6.18MB/11.3MB (54.6%)
2017-03-22T09:31:41.441+0800	[#############...........] ptspzy.restaurants	6.18MB/11.3MB (54.6%)
2017-03-22T09:31:44.442+0800	[#############...........] ptspzy.restaurants	6.18MB/11.3MB (54.6%)
2017-03-22T09:31:47.442+0800	[##############..........] ptspzy.restaurants	6.70MB/11.3MB (59.1%)
2017-03-22T09:31:50.441+0800	[##############..........] ptspzy.restaurants	6.70MB/11.3MB (59.1%)
2017-03-22T09:31:53.442+0800	[##############..........] ptspzy.restaurants	6.70MB/11.3MB (59.1%)
2017-03-22T09:31:56.442+0800	[###############.........] ptspzy.restaurants	7.21MB/11.3MB (63.7%)
2017-03-22T09:31:59.441+0800	[###############.........] ptspzy.restaurants	7.21MB/11.3MB (63.7%)
2017-03-22T09:32:02.441+0800	[###############.........] ptspzy.restaurants	7.21MB/11.3MB (63.7%)
2017-03-22T09:32:05.441+0800	[###############.........] ptspzy.restaurants	7.21MB/11.3MB (63.7%)
2017-03-22T09:32:08.442+0800	[################........] ptspzy.restaurants	7.71MB/11.3MB (68.0%)
2017-03-22T09:32:11.441+0800	[################........] ptspzy.restaurants	7.71MB/11.3MB (68.0%)
2017-03-22T09:32:14.442+0800	[#################.......] ptspzy.restaurants	8.19MB/11.3MB (72.2%)
2017-03-22T09:32:17.441+0800	[#################.......] ptspzy.restaurants	8.19MB/11.3MB (72.2%)
2017-03-22T09:32:20.441+0800	[#################.......] ptspzy.restaurants	8.19MB/11.3MB (72.2%)
2017-03-22T09:32:23.441+0800	[#################.......] ptspzy.restaurants	8.19MB/11.3MB (72.2%)
2017-03-22T09:32:26.442+0800	[##################......] ptspzy.restaurants	8.62MB/11.3MB (76.1%)
2017-03-22T09:32:29.441+0800	[##################......] ptspzy.restaurants	8.62MB/11.3MB (76.1%)
2017-03-22T09:32:32.441+0800	[###################.....] ptspzy.restaurants	9.03MB/11.3MB (79.7%)
2017-03-22T09:32:35.442+0800	[###################.....] ptspzy.restaurants	9.03MB/11.3MB (79.7%)
2017-03-22T09:32:38.441+0800	[###################.....] ptspzy.restaurants	9.03MB/11.3MB (79.7%)
2017-03-22T09:32:41.441+charu0800	[###################.....] ptspzy.restaurants	9.41MB/11.3MB (83.1%)
2017-03-22T09:32:44.441+0800	[###################.....] ptspzy.restaurants	9.41MB/11.3MB (83.1%)
2017-03-22T09:32:47.442+0800	[####################....] ptspzy.restaurants	9.77MB/11.3MB (86.2%)
2017-03-22T09:32:50.441+0800	[####################....] ptspzy.restaurants	9.77MB/11.3MB (86.2%)
2017-03-22T09:32:53.442+0800	[#####################...] ptspzy.restaurants	10.1MB/11.3MB (89.2%)
2017-03-22T09:32:56.442+0800	[#####################...] ptspzy.restaurants	10.1MB/11.3MB (89.2%)
2017-03-22T09:32:59.441+0800	[#####################...] ptspzy.restaurants	10.1MB/11.3MB (89.2%)
2017-03-22T09:33:02.442+0800	[######################..] ptspzy.restaurants	10.4MB/11.3MB (91.9%)
2017-03-22T09:33:05.442+0800	[######################..] ptspzy.restaurants	10.4MB/11.3MB (91.9%)
2017-03-22T09:33:08.441+0800	[######################..] ptspzy.restaurants	10.4MB/11.3MB (91.9%)
2017-03-22T09:33:11.442+0800	[######################..] ptspzy.restaurants	10.7MB/11.3MB (94.5%)
2017-03-22T09:33:14.441+0800	[######################..] ptspzy.restaurants	10.7MB/11.3MB (94.5%)
2017-03-22T09:33:17.441+0800	[######################..] ptspzy.restaurants	10.7MB/11.3MB (94.5%)
2017-03-22T09:33:20.442+0800	[#######################.] ptspzy.restaurants	11.0MB/11.3MB (97.0%)
2017-03-22T09:33:23.441+0800	[#######################.] ptspzy.restaurants	11.3MB/11.3MB (99.3%)
2017-03-22T09:33:26.441+0800	[#######################.] ptspzy.restaurants	11.3MB/11.3MB (99.3%)
2017-03-22T09:33:29.442+0800	[########################] ptspzy.restaurants	11.3MB/11.3MB (100.0%)
2017-03-22T09:33:31.634+0800	[########################] ptspzy.restaurants	11.3MB/11.3MB (100.0%)
2017-03-22T09:33:31.634+0800	imported 25359 documents
```
## 基本命令
```
show dbs，use test，show collections和db.restaurants.find()

help
```
## 插入
```
db.restaurants.insert(
   {
      "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ],
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : ISODate("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : ISODate("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   }
)
```
```
# 等于
db.restaurants.find( { "borough": "Manhattan" } )
# 如下命令查询grades包括一个内嵌文档，它的grade字段的值为'B'的所有文档
db.restaurants.find({"grades.grade": "B"})
# 大于
db.restaurants.find( { "grades.score": { $gt: 30 } } )
# 小于
db.restaurants.find( { "grades.score": { $lt: 10 } } )
# AND
db.restaurants.find( { "cuisine": "Italian", "address.zipcode": "10075" } )
# OR
db.restaurants.find(
   { $or: [ { "cuisine": "Italian" }, { "address.zipcode": "10075" } ] }
)
# 1表示顺序，-1表示降序。
db.restaurants.find().sort( { "borough": 1, "address.zipcode": 1 } )
# 更新
db.restaurants.update(
    { "name" : "Juni" },
    {
      $set: { "cuisine": "American (New)" },
      $currentDate: { "lastModified": true }
    }
)

db.restaurants.update(
  { "restaurant_id" : "41156888" },
  { $set: { "address.street": "East 31st Street" } }
)
# 多个文档
db.restaurants.update(
  { "address.zipcode": "10016", cuisine: "Other" },
  {
    $set: { cuisine: "Category To Be Determined" },
    $currentDate: { "lastModified": true }
  },
  { multi: true}
)
# 替换
db.restaurants.update(
   { "restaurant_id" : "41704620" },
   {
     "name" : "Vella 2",
     "address" : {
              "coord" : [ -73.9557413, 40.7720266 ],
              "building" : "1480",
              "street" : "2 Avenue",
              "zipcode" : "10075"
     }
   }
)

# 删除
db.restaurants.remove( { "borough": "Manhattan" } )
# 删除一条
db.restaurants.remove( { "borough": "Queens" }, { justOne: true } )
# 删除所有文档
db.restaurants.remove( { } )
# 删除集合
db.restaurants.drop()
# 下面的例子把restaurants集合按borough字段分组，并使用$sum操作符计算每个分组的文档数。
db.restaurants.aggregate(
   [
     { $group: { "_id": "$borough", "count": { $sum: 1 } } }
   ]
);
{ "_id" : "Staten Island", "count" : 969 }
{ "_id" : "Brooklyn", "count" : 6086 }
{ "_id" : "Manhattan", "count" : 10259 }
{ "_id" : "Queens", "count" : 5656 }
{ "_id" : "Bronx", "count" : 2338 }
{ "_id" : "Missing", "count" : 51 }
# 下面的管道使用$macth查询borough字段值为"Queens"并且cuisine字段值为"Brazilian"的所有文档
db.restaurants.aggregate(
   [
     { $match: { "borough": "Queens", "cuisine": "Brazilian" } },
     { $group: { "_id": "$address.zipcode" , "count": { $sum: 1 } } }
   ]
);
{ "_id" : "11368", "count" : 1 }
{ "_id" : "11106", "count" : 3 }
{ "_id" : "11377", "count" : 1 }
{ "_id" : "11103", "count" : 1 }
{ "_id" : "11101", "count" : 2 }
```