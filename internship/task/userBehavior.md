统计类产品：

- 百度统计：http://tongji.baidu.com/web/welcome/products
  - 百度统计开放平台文档：http://tongji.baidu.com/open/api/more?p=guide_overview
- Google Analytics：http://www.google.cn/intl/zh-CN_ALL/analytics/
  - https://developers.google.com/analytics/devguides/collection/analyticsjs/
  - [Google Analytics功能 - 事件追踪](http://bluewhale.cc/2010-03-15/google-analytics-event-tracking.html)
  - http://bluewhale.cc/tag/google-analytics
- 友盟：http://www.umeng.com


# 需求和背景

https://github.com/augmn/issues-product/issues/152

希望获得的指标：

- 地点集主页的pv，最好记录页面标题（GA默认会记录页面标题）
- 页面上各处点击行为次数
  - 顶部页面“立即下载”点击次数
  - 点击收藏图标的情况分为以下三种
    - 点击收藏跳转到微信授权页面的次数
    - 收藏行为的操作次数
    - 取消收藏的操作次数
  - 地点集评论的点击次数
  - “查看地图”的点击次数
  - 地点卡片的点击次数，需要记录卡片的排序、地点卡片的名称


## 地点集主页的pv

- 百度：默认监控，无法记录页面标题
- Google：默认监控

## 页面上各处点击行为次数

### 顶部页面“立即下载”点击次数

- 百度：
  - `category`：download
  - `action`：click
  - `opt_label`：
  - `opt_value`：
- Google：
  - `eventCategory`：download
  - `eventAction`：click
  - `eventLabel`：
  - `eventValue`：

### 点击收藏跳转到微信授权页面的次数

- 百度：
  - `category`：like
  - `action`：wechatLogin
  - `opt_label`：
  - `opt_value`：
- Google：
  - `eventCategory`：like
  - `eventAction`：wechatLogin
  - `eventLabel`：
  - `eventValue`：

### 收藏行为的操作次数

- 百度：
  - `category`：like
  - `action`：set
  - `opt_label`：
  - `opt_value`：
- Google：
  - `eventCategory`：like
  - `eventAction`：set
  - `eventLabel`：
  - `eventValue`：

### 取消收藏的操作次数

- 百度：
  - `category`：like
  - `action`：unset
  - `opt_label`：
  - `opt_value`：
- Google：
  - `eventCategory`：like
  - `eventAction`：unset
  - `eventLabel`：
  - `eventValue`：

### 地点集评论的点击次数

- 百度：
  - `category`：comment
  - `action`：click
  - `opt_label`：
  - `opt_value`：
- Google：
  - `eventCategory`：comment
  - `eventAction`：click
  - `eventLabel`：
  - `eventValue`：

### 查看地图”的点击次数

- 百度：
  - `category`：comment
  - `action`：click
  - `opt_label`：
  - `opt_value`：
- Google：
  - `eventCategory`：comment
  - `eventAction`：click
  - `eventLabel`：
  - `eventValue`：

### 地点卡片的点击次数，需要记录卡片的排序、地点卡片的名称

- 百度：
  - `category`：venueCard
  - `action`：click
  - `opt_label`：`地点名称`
  - `opt_value`：`地点顺序`
- Google：
  - `eventCategory`：venueCard
  - `eventAction`：click
  - `eventLabel`：`地点名称`
  - `eventValue`：`地点顺序`


# WBS

- [ ] 地点集主页的pv，最好记录地点集的名称
- [ ] 页面上各处点击行为次数
  - [ ] 顶部页面“立即下载”点击次数
  - [ ] 点击收藏图标的情况分为以下三种
    - [ ] 点击收藏跳转到微信授权页面的次数
    - [ ] 收藏行为的操作次数
    - [ ] 取消收藏的操作次数
  - [ ] 地点集评论的点击次数
  - [ ] “查看地图”的点击次数
  - [ ] 地点卡片的点击次数，需要记录卡片的排序、地点卡片的名称
