- 搜索功能

- 添加地点集
 - 前端页面处理（添加/修改操作）
 -

- 修改地点集


添加地点集基本信息->查询该地点集信息（刚添加无地点，不需要查询这种地点集的地点信息）->添加地点
修改页面（查询地点集信息，还要查询地点集包含的地点信息）

地点集搜索参数：
type ReqSearchVenuebooks struct {
	VenuebookKeywords string `required:"false"`
	VenueKeywords     string `required:"false"`
	RegionId          string `required:"false"`
	CreatorId         string `required:"false"`
	IsInspire         string `required:"false"`
	IsRecommended     string `required:"false"`
	Limit             int
	Offset            int `required:"false"`
}pilaingtianjia

-----------
添加功能：批量添加

limit=5&venueKeywords=京&venuebookKeywords=北京&regionId=3&isRecommended=true

limit=5&venueKeywords=&venuebookKeywords=&regionId=&isRecommended=false
