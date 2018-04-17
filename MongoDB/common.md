```
db.getCollection('records').updateMany({image_urls: {$size: 1}, createtime: { $gte: new Date(2018, 3, 13, 21, 58)}}, {$set: {is_used: true}})

```