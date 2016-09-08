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
