# 地点集设计方案

# API设计
## 地点集主页相关接口
### 创建地点集

`POST /townapi/venuebook`

#### HTTP Request Body
```json
{
    "name": "北京最好吃的火烧",
    "pitch": "走过路过，不要错过，错了就没了.",
    "isPrivate": 0,
    "userId": "1003855"
}
```
参数说明：

- isPrivate：私密标识，0表示公开的，1表示私密的

#### HTTP Response
```json
{
	"code": 0,
	"result": {
    	"id": "1018776",
    	"name": "北京最好吃的火烧",
    	"pitch": "走过路过，不要错过，错了就没了.",
    	"creatorId": "1000076",
    	"isPrivate": 0,
    	"createdAt": 1472785091000,
    	"updatedAt": 1472785091000,
    	"cover": [],
    	"regions": [],
    	"creator": { ... }
	}
}
```

#### 错误码
- -6    session 错误
- -50   敏感词校验失败
- -90   客户端参数错误
- -3001 权限失败
- -9999 服务器内部错误

### 访问地点集主页

`GET /townapi/venuebook/1018776`

#### HTTP Response

```json
{
	"code": 0,
	"result": {
    	"id": "1018776",
    	"name": "北京最好吃的火烧",
    	"pitch": "走过路过，不要错过，错了就没了.",
    	"creatorId": "1000076",
    	"isPrivate": 0,
    	"createdAt": 1472785091000,
    	"updatedAt": 1472785091000,
    	"cover": [ imgs ],
    	"regions": [ regions ],
    	"creator": { ... },
    	"likersCount": 0,
    	"commentsCount": 0,
    	"venueCount": 0,
    	"isLiked": false,
    	"isInspire": false
	}
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -9999 服务器内部错误

### 修改地点集

`PUT /townapi/venuebook/1018776`

#### HTTP Request Body
```json
{
    "name": "北京最好吃的火烧",
    "pitch": "走过路过，不要错过，错了就没了."
}
```

#### HTTP Response

```json
{
	"code": 0,
	"result": {
    	venuebook
	}
}
```

#### 错误码
- -6    session 错误
- -50   敏感词校验失败
- -90   客户端参数错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误


### 删除地点集

`DELETE /townapi/venuebook/1018776`

#### HTTP Response
```json
{
	"code": 0,
	"result": true
}
```

#### 错误码
- -6    session 错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误


## 收藏相关

### 收藏地点集

`POST /townapi/venuebook/1018776/like`

#### HTTP Request Body
```json
{
   "userId": "1000561"
}
```

#### HTTP Response
```json
{
	"code": 0,
	"result": true
}
```

#### 错误码
- -6    session 错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误

### 取消收藏

`DELETE /townapi/venuebook/1018776/like`

#### HTTP Request Body
```json
{
   "userId": "1000561"
}
```

#### HTTP Response
```json
{
	"code": 0,
	"result": true
}
```

#### 错误码
- -6    session 错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误

#### 其他

删除收藏，物理删除

## 地点集的地点列表

### 添加地点到地点集

`POST /townapi/venuebook/1018776/venue`

#### HTTP Request Body
```json
{
   "venueId": "1838482"
}
```


#### HTTP Response

```json
{
	"code": 0,
	"result": true
}
```

#### 错误码
- -6    session 错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误

### 从地点集里删除地点

`DELETE /townapi/venuebook/1018776/venue/1001843`

#### HTTP Response

```json
{
	"code": 0,
	"result": true
}
```

#### 错误码
- -6    session 错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误

#### 其他

物理删除


### 访问地点集的地点列表

`GET /townapi/venuebook/1018776/venue?limit=10&after=1000087`

#### HTTP Request Parameters

- limit: 10
- after: "1000876"    // 可选项

#### HTTP Response

```json
{
	"code": 0,
	"result": {
		"rows": [
		 	{
				"id": "1011833",
				"venuebookId": "138385",
				"venueId": "1855551",
				"rank": 1000,
				"explanation": "水调歌头",
				"venue": { ... }
			},
			{
				...
			}
		],
	    "paging": {
	      "cursors": {
	        "top": "1018781",
	        "last": "1018767"
	      },
	      "previous": null,
	      "next": "1018767",
	      "count": 103
	    }
	}
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -3001 权限失败
- -8001 记录不存在
- -9999 服务器内部错误


### 修改地点集列表

`PATCH /townapi/venuebook/1018776/venue`

#### HTTP Request Body
```json
{
	"venues": [
		{
			"veneuId": "1011833",
			"rank": 1000,
			"explanation": "水调歌头"
		},
		{
			"venueId": "1011834",
			"rank": 2000,
			"explanation": "水调歌头"
		}
	]
}
```

#### HTTP Response

```json
{
	"code": 0,
	"result": true
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误


## 地点集入口

### 我收藏的地点集

`GET /townapi/user/:userId/liked/venuebook?limit=10&after=1000087`


#### HTTP Request Parameters

- limit: 10
- after: "1000876"    // 可选项

#### HTTP Response

```json
{
	"code": 0,
	"result": {
		"rows": [
		 	{
		    	"id": "1018776",
		    	"name": "北京最好吃的火烧",
		    	"pitch": "走过路过，不要错过，错了就没了.",
		    	"creatorId": "1000076",
		    	"isPrivate": 0,
		    	"createdAt": 1472785091000,
		    	"updatedAt": 1472785091000,
		    	"creator": { ... },
		    	"likersCount": 0,
		    	"commentsCount": 0,
		    	"isLiked": false		    	
			},
			{
				...
			}
		],
	    "paging": {
	      "cursors": {
	        "top": "1018781",
	        "last": "1018767"
	      },
	      "previous": null,
	      "next": "1018767",
	      "count": 103
	    }
	}
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -3001 权限失败
- -9999 服务器内部错误

注：
> 地点集封面图片取不到，单纯取每个地点集的地点图片，会有性能问题
> 加一个字段images？

### 我创建的地点集

`GET /townapi/user/:userId/created/venuebook?limit=10&after=1000087`


#### HTTP Request Parameters

- limit: 10
- after: "1000876"    // 可选项

#### HTTP Response

```json
{
	"code": 0,
	"result": {
		"rows": [
		 	{
				venuebook	    	
			},
			{
				...
			}
		],
	    "paging": {
	      "cursors": {
	        "top": "1018781",
	        "last": "1018767"
	      },
	      "previous": null,
	      "next": "1018767",
	      "count": 103
	    }
	}
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -3001 权限失败
- -9999 服务器内部错误


### 同城页的地点集列表

`GET /townapi/region/:regionId/venuebook?limit=10&after=1000087`

#### HTTP Request Parameters

- limit: 10
- after: "1000876"    // 可选项

#### HTTP Response

```json
{
	"code": 0,
	"result": {
		"rows": [
		 	{
		 		"id": "118383",
		 		"venuebookId": "11101010",
		 		"rank": 18383,
		 		"topFlag": 1,
		 		"createdAt": 	1472785091000,
		 		"updatedAt": 	1472785091000,
				venuebook: { ... }
			},
			{
				...
			}
		],
	    "paging": {
	      "cursors": {
	        "top": "1018781",
	        "last": "1018767"
	      },
	      "previous": null,
	      "next": "1018767"
	    }
	}
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -9999 服务器内部错误


### 发现页的地点集列表

`GET /townapi/explore/venuebook?limit=10&after=1000087`

#### HTTP Request Parameters

- limit: 10
- after: "1000876"    // 可选项

#### HTTP Response

```json
{
	"code": 0,
	"result": {
		"rows": [
		 	{
		 		"id": "118383",
		 		"venuebookId": "11101010",
		 		"rank": 18383,
		 		"topFlag": 1,
		 		"createdAt": 	1472785091000,
		 		"updatedAt": 	1472785091000,
				venuebook: { ... }
			},
			{
				...
			}
		],
	    "paging": {
	      "cursors": {
	        "top": "1018781",
	        "last": "1018767"
	      },
	      "previous": null,
	      "next": "1018767"
	    }
	}
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -9999 服务器内部错误


### 同城搜索页的地点集列表

`POST /townapi/search/venuebook`

#### HTTP Request Body
```json
{
    "keyword": "好吃火烧",
    "filters": {
      "cityId": "3"
    },
    "pageView": "cityPage",
    "after": "", 				// 可选
    "limit": 10
}
```

#### HTTP Response

```json
{
	"code": 0,
	"result": {
		"rows": [
		 	{
		 		venuebook
			},
			{
				...
			}
		],
	    "paging": {
	      "cursors": {
	        "top": "1018781",
	        "last": "1018767"
	      },
	      "previous": null,
	      "next": "1018767",
	      "count": 111
	    }
	}
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -9999 服务器内部错误


### global搜索页的地点集列表

`POST /townapi/multisearch`

#### HTTP Request Body
```json
{
    "keyword": "好吃火烧",
	 "ranges": [ "venuebook"],
    "after": "", 				// 可选
    "limit": 10
}
```

#### HTTP Response

```json
{
	"code": 0,
	"result": {
		"rows": [
		 	{
		 		venuebook
			},
			{
				...
			}
		],
	    "paging": {
	      "cursors": {
	        "top": "1018781",
	        "last": "1018767"
	      },
	      "previous": null,
	      "next": "1018767",
	      "count": 111
	    }
	}
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -9999 服务器内部错误

# 内部逻辑
## 地点集封面处理

用地点集里的前3个地点（按rank排序）的image做为地点集的封面，保存到表`venuebook`中`cover`字段中

- 创建时地点集时，`cover`为 []
- 添加一个地点时，当`cover`中的地点少于3个时，更新`cover`
- 删除一个地点时，更新下`cover`
- 更新地点列表的rank时，，更新下`cover`

## 城市列表处理

用地点集里的地点的region，保存到表`venuebook`中`regions`字段中

- 创建时地点集时，`regions`为 []
- 添加一个地点时，将region_id加入到`regions`
- 删除一个地点时，需要读取全部的region，更新下`regions`


# admin接口

## 地点集管理

### 地点集列表

`GET /townapi/venuebook?region=3&venuebookName=xxx&venueName=xxx&creatorId=11113&isInspire=1&isRecommended=1&limit=10`

### 同城页

`GET /townapi/region/:regionId/venuebook?keyword=xxx&creator_id=11113&limit=10`

### 精选页

`GET /townapi/inspire/venuebook?keyword=xxx&creator_id=11113&limit=10`


#### HTTP Response

```json
{
	"code": 0,
	"result": {
		"rows": [
		 	{
		 		venuebook
			},
			{
				...
			}
		],
	    "paging": {
	      "cursors": {
	        "top": "1018781",
	        "last": "1018767"
	      },
	      "previous": null,
	      "next": "1018767"
	    }
	}
}
```

### 添加地点集


`POST /townapi/venuebook`

#### HTTP Request Body
```json
{
    "name": "北京最好吃的火烧",
    "pitch": "走过路过，不要错过，错了就没了.",
    "isPrivate": 0,
    "userId": "1003855"
}
```
参数说明：

- isPrivate：私密标识，0表示公开的，1表示私密的

#### HTTP Response
```json
{
	"code": 0,
	"result": {
    	"id": "1018776",
    	"name": "北京最好吃的火烧",
    	"pitch": "走过路过，不要错过，错了就没了.",
    	"creatorId": "1000076",
    	"isPrivate": 0,
    	"createdAt": 1472785091000,
    	"updatedAt": 1472785091000,
    	"cover": [],
    	"regions": [],
    	"creator": { ... }
	}
}
```

### 添加地点到地点集

`POST /townapi/venuebook/1018776/venue`

#### HTTP Request Body
```json
{
   "venueId": "1838482"
}
```


#### HTTP Response

```json
{
	"code": 0,
	"result": true
}
```

#### 错误码
- -6    session 错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误

### 从地点集里删除地点

`DELETE /townapi/venuebook/1018776/venue/1001843`

#### HTTP Response

```json
{
	"code": 0,
	"result": true
}
```

#### 错误码
- -6    session 错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误

#### 其他

物理删除



### 修改地点集列表

`PATCH /townapi/venuebook/1018776/venue`

#### HTTP Request Body
```json
{
	venues: [
		{
			"id": "1011833",
			"rank": 1000,
			"explanation": "水调歌头"
		},
		{
			"id": "1011834",
			"rank": 2000,
			"explanation": "水调歌头"
		}
	]
}
```

#### HTTP Response

```json
{
	"code": 0,
	"result": true
}
```

#### 错误码
- -6    session 错误
- -90   客户端参数错误
- -3001 权限失败
- -8001 数据库记录不存在
- -9999 服务器内部错误



# 存储结构设计

## 地点集表 `venuebook`

```sql
CREATE TABLE `venuebook` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `pitch` varchar(2000) DEFAULT NULL,
  `creator_id` bigint(20) DEFAULT NULL,
  `is_private` tinyint(1) DEFAULT NULL,
  `cover` varchar(255) DEFAULT '[]',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_creator_id` (`creator_id`),
  INDEX `idx_created_at` (`created_at`),
  INDEX `idx_updated_at` (`updated_at`),
  INDEX `idx_deleted_at` (`deleted_at`)
) ENGINE=InnoDB AUTO_INCREMENT=1000000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```

## 地点集和地点的关联表 `venuebook_venues`

```sql
CREATE TABLE `venuebook_venues` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `venuebook_id` bigint(20) NOT NULL,
  `venue_id` bigint(20) NOT NULL,
  `explanation` varchar(500) DEFAULT NULL,
  `rank` int(11) NOT NULL,  
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idx_venuebook_venue` (`venuebook_id`, `venue_id`),
  INDEX `idx_venuebook_rank` (`venuebook_id`, `rank`),
  INDEX `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```

## 地点集收藏表 `user_liked_venuebooks`

```sql
CREATE TABLE `user_liked_venuebooks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `venuebook_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idx_venuebook_user` (`venuebook_id`, `user_id`),
  INDEX `idx_venuebook_created_at` (`venuebook_id`, `created_at`),
  INDEX `idx_user_created_at` (`user_id`, `created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```

## 同城页地点集 `region_venuebooks`

```sql
CREATE TABLE `region_venuebook` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `venuebook_id` bigint(20) NOT NULL,
  `region_id` bigint(20) NOT NULL,
  `rank` int NOT NULL,
  `top_flag` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_region_rank` (`region_id`, `rank`),
  INDEX `idx_top_flag` (`top_flag`),
  INDEX `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```

## 发现页地点集 `explore_venuebooks`

```sql
CREATE TABLE `inspire_venuebook` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `venuebook_id` bigint(20) NOT NULL,
  `rank` int NOT NULL,
  `top_flag` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_rank` (`rank`),  
  INDEX `idx_top_flag` (`top_flag`),
  INDEX `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```


# 其他

## 待解决的问题

- 地点集的地点列表，用数据库还是搜索
