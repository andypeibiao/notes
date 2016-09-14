
```
// get region list http: .../region/list?lang=en
type RespRegionList struct {
	Regions   []model.RegionNet  `json:"regions"`
	Countries []model.CountryNet `json:"countries"`
}
```
var cfg = require('./config');写法

module.exports = cfg; ？

function addGroupOptions(yargs, groupName, opts) {
    var keys = [];
    for (var key in opts) {
        keys.push(key);
    }

    return yargs.group(keys, groupName).options(opts);
}
