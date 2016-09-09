
```
// get region list http: .../region/list?lang=en
type RespRegionList struct {
	Regions   []model.RegionNet  `json:"regions"`
	Countries []model.CountryNet `json:"countries"`
}
```

keyword

定义接口的数据结构 和参数的命名相关性
