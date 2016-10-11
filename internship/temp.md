Sketch

@all , 大家先读下规范文档（文档 https://github.com/augmn/town/blob/develop/biz/datastore/sqldb/README.md），然后各自按照规范修改并提pr，范围是biz/datastore, biz/domainmodel, biz/domainservice。大约1个小时处理完成。下面任务分配

@baboon  处理 user，image相关的文件：biz/datastore下的文件包括 client_version.go, user.go, wechat_user.go, image.go，以及domainmodel和domainservice下相应的文件
@王康     处理 user like和user been相关的文件：biz/datastore下的文件包括 user_been_venue.go, user_liked_venue.go, user_liked_venuebooks.go，以及domainmodel和domainservice下相应的文件
@大大中小 处理venue的文件：biz/datastore下的文件包括 venue.go, venue_about.go, venue_category.go, venue_multicount.go，以及domainmodel和domainservice下相应的文件
@张晓宇   处理venuebook, region相关的文件： biz/datastore下的文件包括 venuebook.go, venuebook_venues.go, region.go ，以及domainmodel和domainservice下相应的文件
res.redirect
协议
跟踪分支
git checkout -b feature/migrate_h5 -t origin/feature/migrate_h5


<hr>
handler(context),helper(reflectHelper)

throw new TypeError('Router.use() requires middleware function but got a ' + gettype(fn));
     ^

TypeError: Router.use() requires middleware function but got a Object
   at Function.use (/home/pzy/work/wechat-h5/node_modules/express/lib/router/index.js:458:13)
   at EventEmitter.<anonymous> (/home/pzy/work/wechat-h5/node_modules/express/lib/application.js:219:21)
   at Array.forEach (native)
   at EventEmitter.use (/home/pzy/work/wechat-h5/node_modules/express/lib/application.js:216:7)
   at routeRegister (/home/pzy/work/wechat-h5/server/routes.js:20:9)
   at Object.<anonymous> (/home/pzy/work/wechat-h5/server/app.js:120:1)
   at Module._compile (module.js:409:26)
   at Object.Module._extensions..js (module.js:416:10)
   at Module.load (module.js:343:32)
   at Function.Module._load (module.js:300:12)
   at Module.require (module.js:353:17)
   at require (internal/module.js:12:17)
   at /home/pzy/work/wechat-h5/server/default.js:4:15
   at Object.<anonymous> (/home/pzy/work/wechat-h5/server/default.js:42:3)
   at Module._compile (module.js:409:26)
   at Object.Module._extensions..js (module.js:416:10)
   at Module.load (module.js:343:32)
   at Function.Module._load (module.js:300:12)
   at Function.Module.runMain (module.js:441:10)
   at startup (node.js:139:18)
   at node.js:974:3


module.exports = router;

















{
                "id": "1000055",
                "name": "国贸大酒店红馆",
                "alias": "Lost Heaven",
                "address": "朝阳区建国门外大街1号国贸三期商城4楼",
                "longitude": 116.458503,
                "latitude": 39.912397,
                "altitude": 0,
                "profileBackgroundId": "1001168",
                "pitch": "CBD地区的品质粤菜",
                "phone": "010-85716459",
                "openTime": [
                    "11:30-14:30",
                    "18:00-22:00"
                ],
                "openTimeDesc": "",
                "averageCost": 205,
                "shortCut": "",
                "status": 0,
                "closeReason": "",
                "creatorId": "1000016",
                "createdAt": 1432028419000,
                "updatedAt": 1446126373000,
                "deletedAt": 0,
                "fabulaCount": 258,
                "likersCount": 2618,
                "commentCount": 1232,
                "city": {
                    "id": 3,
                    "name": "北京",
                    "isAbroad": 0,
                },
                "categories": [
                    "food"
                ],
                "tags": [
                    "美食",
                    "中餐",
                    "粤菜"
                ],
                "distance": 0,
                "favoritedAt": 0,
                "isFavorite": false,
                "isInspire": false,
                "profileBackground": {
                    "id": "1001168",
                    "color": "0.453941 0.112612 0.122133 1.000000",
                    "createdAt": 1431993600000,
                    "thumbnail": "image/20150519/Fabula/thumbnail/102e1b70-fe0b-11e4-9190-1fc6ca324bd0",
                    "original": "image/20150519/Fabula/original/102e1b70-fe0b-11e4-9190-1fc6ca324bd0"
                },
                "wallPaper": [
                    {
                        "image": {
                            "id": {
                                "id": "1004498",
                                "color": "0.506264 0.290959 0.185824 1.000000",
                                "createdAt": 1441528163000,
                                "thumbnail": "image/20150906/UserProfileBackground/thumbnail/35842b00-5471-11e5-93c2-c9f7a2c09820",
                                "original": "image/20150906/UserProfileBackground/original/35842b00-5471-11e5-93c2-c9f7a2c09820"
                            }
                        },
                        "text": {}
                    },
                    {
                        "image": {
                            "id": {
                                "id": "1004499",
                                "color": "0.421836 0.375051 0.354833 1.000000",
                                "createdAt": 1441528200000,
                                "thumbnail": "image/20150906/UserProfileBackground/thumbnail/4b771080-5471-11e5-93c2-c9f7a2c09820",
                                "original": "image/20150906/UserProfileBackground/original/4b771080-5471-11e5-93c2-c9f7a2c09820"
                            }
                        },
                        "text": {}
                    },
                    {
                        "image": {
                            "id": {
                                "id": "1004500",
                                "color": "0.395895 0.317891 0.264942 1.000000",
                                "createdAt": 1441528218000,
                                "thumbnail": "image/20150906/UserProfileBackground/thumbnail/5688c630-5471-11e5-93c2-c9f7a2c09820",
                                "original": "image/20150906/UserProfileBackground/original/5688c630-5471-11e5-93c2-c9f7a2c09820"
                            }
                        },
                        "text": {}
                    },
                    {
                        "image": {
                            "id": {
                                "id": "1004501",
                                "color": "0.384665 0.272221 0.174578 1.000000",
                                "createdAt": 1441528248000,
                                "thumbnail": "image/20150906/UserProfileBackground/thumbnail/6838aad0-5471-11e5-93c2-c9f7a2c09820",
                                "original": "image/20150906/UserProfileBackground/original/6838aad0-5471-11e5-93c2-c9f7a2c09820"
                            }
                        },
                        "text": {}
                    }],
                "creator": {
                    "id": "1000016",
                    "displayName": "苏星逸",
                    "createdAt": 1432028372000,
                    "updatedAt": 1438768863000,
                    "avatarId": "1014788",
                    "profileBackgroundId": "1014789",
                    "fabulasLikedCount": 0,
                    "fabulasCreatedCount": 62,
                    "venuesLikedCount": 0,
                    "venuesCreatedCount": 58,
                    "isConnoisseur": false,
                    "isFollower": false,
                    "isFollowing": false,
                    "followerCount": 4,
                    "followingCount": 0,
                    "avatar": {
                        "id": "1014788",
                        "color": "0.741482 0.642771 0.622507 1.000000",
                        "createdAt": 1448516490000,
                        "thumbnail": "image/20151126/UserAvatar/thumbnail/3b8cea5d23264894bb03a7c9b6b7b8fa",
                        "original": "image/20151126/UserAvatar/original/3b8cea5d23264894bb03a7c9b6b7b8fa"
                    },
                    "profileBackground": {
                        "id": "1014789",
                        "color": "0.765377 0.682490 0.676860 1.000000",
                        "createdAt": 1448516490000,
                        "thumbnail": "image/20151126/UserProfileBackground/thumbnail/e0355948928340eb903a0833fbd83d3b",
                        "original": "image/20151126/UserProfileBackground/original/e0355948928340eb903a0833fbd83d3b"
                    }
                },
                "haveBeen": false,
                "beenPeopleCount": 1229,
                "venueBeenUsers": [
                    {
                        "id": "1000016",
                        "displayName": "苏星逸",
                        "createdAt": 1432028372000,
                        "updatedAt": 1438768863000,
                        "avatarId": "1014788",
                        "profileBackgroundId": "1014789",
                        "fabulasLikedCount": 0,
                        "fabulasCreatedCount": 62,
                        "venuesLikedCount": 0,
                        "venuesCreatedCount": 58,
                        "isConnoisseur": false,
                        "isFollower": false,
                        "isFollowing": false,
                        "followerCount": 4,
                        "followingCount": 0,
                        "avatar": {
                            "id": "1014788",
                            "color": "0.741482 0.642771 0.622507 1.000000",
                            "createdAt": 1448516490000,
                            "thumbnail": "image/20151126/UserAvatar/thumbnail/3b8cea5d23264894bb03a7c9b6b7b8fa",
                            "original": "image/20151126/UserAvatar/original/3b8cea5d23264894bb03a7c9b6b7b8fa"
                        },
                        "profileBackground": {
                            "id": "1014789",
                            "color": "0.765377 0.682490 0.676860 1.000000",
                            "createdAt": 1448516490000,
                            "thumbnail": "image/20151126/UserProfileBackground/thumbnail/e0355948928340eb903a0833fbd83d3b",
                            "original": "image/20151126/UserProfileBackground/original/e0355948928340eb903a0833fbd83d3b"
                        }
                    },
                    {
                        "id": "1000016",
                        "displayName": "苏星逸",
                        "createdAt": 1432028372000,
                        "updatedAt": 1438768863000,
                        "avatarId": "1014788",
                        "profileBackgroundId": "1014789",
                        "fabulasLikedCount": 0,
                        "fabulasCreatedCount": 62,
                        "venuesLikedCount": 0,
                        "venuesCreatedCount": 58,
                        "isConnoisseur": false,
                        "isFollower": false,
                        "isFollowing": false,
                        "followerCount": 4,
                        "followingCount": 0,
                        "avatar": {
                            "id": "1014788",
                            "color": "0.741482 0.642771 0.622507 1.000000",
                            "createdAt": 1448516490000,
                            "thumbnail": "image/20151126/UserAvatar/thumbnail/3b8cea5d23264894bb03a7c9b6b7b8fa",
                            "original": "image/20151126/UserAvatar/original/3b8cea5d23264894bb03a7c9b6b7b8fa"
                        },
                        "profileBackground": {
                            "id": "1014789",
                            "color": "0.765377 0.682490 0.676860 1.000000",
                            "createdAt": 1448516490000,
                            "thumbnail": "image/20151126/UserProfileBackground/thumbnail/e0355948928340eb903a0833fbd83d3b",
                            "original": "image/20151126/UserProfileBackground/original/e0355948928340eb903a0833fbd83d3b"
                        }
                    },
                    {
                        "id": "1000016",
                        "displayName": "苏星逸",
                        "createdAt": 1432028372000,
                        "updatedAt": 1438768863000,
                        "avatarId": "1014788",
                        "profileBackgroundId": "1014789",
                        "fabulasLikedCount": 0,
                        "fabulasCreatedCount": 62,
                        "venuesLikedCount": 0,
                        "venuesCreatedCount": 58,
                        "isConnoisseur": false,
                        "isFollower": false,
                        "isFollowing": false,
                        "followerCount": 4,
                        "followingCount": 0,
                        "avatar": {
                            "id": "1014788",
                            "color": "0.741482 0.642771 0.622507 1.000000",
                            "createdAt": 1448516490000,
                            "thumbnail": "image/20151126/UserAvatar/thumbnail/3b8cea5d23264894bb03a7c9b6b7b8fa",
                            "original": "image/20151126/UserAvatar/original/3b8cea5d23264894bb03a7c9b6b7b8fa"
                        },
                        "profileBackground": {
                            "id": "1014789",
                            "color": "0.765377 0.682490 0.676860 1.000000",
                            "createdAt": 1448516490000,
                            "thumbnail": "image/20151126/UserProfileBackground/thumbnail/e0355948928340eb903a0833fbd83d3b",
                            "original": "image/20151126/UserProfileBackground/original/e0355948928340eb903a0833fbd83d3b"
                        }
                    }
                ],
                "about": "紫藤庐是台湾著名的茶道和人文妹婿地标。\r\n\r\n它是年轻时的李安取景《饮食男女》的片场"
            }
