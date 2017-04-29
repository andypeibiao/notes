# Admin用户列表可以展示、设置、取消Rising People功能 #1962

# 负责人

@ptspzy

# 需求和背景

在admin的用户列表页面

- 增加1列，展示用户是否是rising people
- 增加设为rising people的操作
- 增加取消rising people的操作

# WBS

- [x] 方案设计
  - [x] tbiz的API设计， @ptspzy , 4h
- [x] 开发实现
  - [x] tbiz调整
    - [x] 调整查询用户信息API：增加返回用户是否是rising people字段, @ptspzy , 2h
    - [x] 增加把用户设为Rising People的API, @ptspzy , 3h
    - [x] 增加取消Rising People的API, @ptspzy , 3h
  - [x] Admin调整
    - [x] 用户列表页面展示用户是否是Rising People, @ptspzy , 2h
    - [x] 把用户设为Rising People, @ptspzy , 3h
    - [x] 取消Rising People, @ptspzy , 3h
- [ ] 测试
  - [x] 编写测试用例, @ZhaojieAGM，4h
  - [ ] 执行测试, @ZhaojieAGM, 4h



# Tbiz API调整

## 修改Search User API

### Request调整

```
type ReqSearchUsersV2 struct {
	Keywords     string `required:"false"` // 如果传入keywords, Name、Mobile搜索条件失效; 通过keywords在Name、mobile中搜索匹配项
	Name         string `required:"false"`
	Mobile       string `required:"false"`
	IncludeGuest bool   `required:"false"`
	OnlyInspire  bool   `required:"false"`
        OnlyRisingPeople bool `required:"false"`  //如果为true，表示只返回是rising people的用户
	Limit        int
	Offset       int `required:"false"`
}

```

### Response调整

```
// 以下JSON对象表示返回的User信息
{
      ...
      isRisingPeople: true or false  // 增加此字段，表示当前用户是否是Rising People
}
```

## 增加把用户设为Rising People的API

### HTTP Request URL

```
POST /risingPeople
```

### HTTP Request Body

```
{
    "userId": "1000386"
}
```

### HTTP Response Body

如果成功将用户加入rising people列表，返回：

```json
{
    "code": 0,
    "result": true
}
```

如果用户已经是rising people，返回：

```json
{
    "code":  -9999, // unknow error
    "result": "user is already rising people"
}
```

## 增加取消Rising People的API

### HTTP Request URL

```
DELETE /risingPeople/user/:userId
```

### HTTP Response Body

如果成功将用户从rising people列表中删除，返回

```
{
    "code": 0,
    "result": true
}
```

如果用户不是rising people，返回

```json
{
    "code": -9999,
    "result": "user is not rising people"
}
```