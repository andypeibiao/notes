# 如何写Git Commit Message #18
参考：http://chris.beams.io/posts/git-commit/

例子：

nodejs的commit message， https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V6.md#6.7.0

# 代码注释规范 #17

代码注释规范

标点, 拼写和语法

注释的通常写法是包含正确大小写和结尾句号的完整语句. 短一点的注释 (如代码行尾注释) 可以随意点, 依然要注意风格的一致性. 完整的语句可读性更好, 也可以说明该注释是完整的, 而不是一些不成熟的想法.

虽然被别人指出该用分号时却用了逗号多少有些尴尬, 但清晰易读的代码还是很重要的. 正确的标点, 拼写和语法对此会有所帮助.

Tag注释

以 TODO tag为例
TODO 注释要使用全大写的字符串 TODO, 在随后的圆括号里写上你的大名, 邮件地址, 或其它身份标识. 冒号是可选的. 主要目的是让添加注释的人 (也是可以请求提供更多细节的人) 可根据规范的 TODO 格式进行查找. 添加 TODO 注释并不意味着你要自己来修正.

// TODO(z@augmn.com): Use a "*" here for concatenation operator.
// TODO(skyjia) change this to use relations.
如果加 TODO 是为了在 “将来某一天做某事”, 可以附上一个非常明确的时间 (“Fix by November 2005”), 或者一个明确的事项 (“Remove this code when all clients can handle JSON responses.”).

Tag类型

TODO: 如果代码中有该标识，说明在标识处有功能代码待编写，待实现的功能在说明中会简略说明。

// TODO(Jack): implement the foo module here
XXX: 如果代码中有该标识，说明标识处代码虽然实现了功能，但是实现的方法有待商榷，希望将来能改进，要改进的地方会在说明中简略说明。

// XXX: performance leaks here. Should improve with an O(N) algorithm instead.

// XXX: Due to a bug in package `zzz`, we have to warp method foo() here 
// as a tricky hack.
FIXME: 如果代码中有该标识，说明标识处代码需要修正，甚至代码是错误的，不能工作，需要修复，如何修正会在说明中简略说明。

// FIXME: first parameter `context` shouldn't be nil.

// FIXME: Fix bug ( https://github.com/augmn/issues-engineer/issues/2194 )
关注优先级

TODO: 低
XXX: 中
FIXME: 高
弃用注释

通过弃用注释（DEPRECATED comments）以标记某接口点（interface points）已弃用。
可以写上包含全大写的 DEPRECATED 的注释，以标记某接口为弃用状态。注释可以放在接口声明前，或者同一行。

在 DEPRECATED 一词后，留下您的名字，邮箱地址以及括号补充。

// DEPRECATED: won't be supported since version 4.1.0 due to changes on response message. 
（待续）

# GO 语言需要注意的坑 #16
go 整型转浮点时，要用强制转换，go里没有c/c++中的隐式转换

package main

import (
    "fmt"
)

func main() {
    a := 10
    b := 8

    c := a * 1.0 / b    
    d := float64(a) / float64(b)

    fmt.Println("result:", c, d)
}

// 结果： result: 1    1.25

# Go语言测试框架调研 #15
Go语言相关Package:

https://github.com/stretchr/testify
http://onsi.github.io/ginkgo/
http://onsi.github.io/gomega/
http://labix.org/gocheck
http://agouti.org/
http://awesome-go.com/#testing
xUnit Test Pattern:

https://en.wikipedia.org/wiki/XUnit

# 一套常见的初始化本地Git Repository的操作流程 #14

Step 1: Fork & Clone to local.

Default branch: develop

Step 2: 获取并跟踪master branch.

git checkout -b master --track origin/master
Step 3: 参考GitFlow官方文档安装GitFlow命令行工具.

参考：https://github.com/nvie/gitflow

Step 4: 配置GitFlow.

执行命令:

git flow init -d
修改.git/config文件，将其中[gitflow "prefix"]小节的配置改为：

[gitflow "prefix"]
    feature = feature/
    release = release/
    hotfix = hotfix/
    support = support/
    versiontag co= v
Step 5: 安装Git LFS扩展。

参考：https://git-lfs.github.com/

Step 6: 配置git upstream

执行命令：

git remote add upstream [git@github.com:name/project.git 或 https://github.com/name/project.git]
git fetch upstream

# Go语言代码生成 - `go generate` #13

General

https://blog.golang.org/generate
SQL

http://willowtreeapps.com/blog/go-generate-your-database-code/
https://github.com/willowtreeapps/acorn
https://github.com/willowtreeapps/rootx
https://github.com/Masterminds/squirrel
https://github.com/knq/xo
JSON

https://clipperhouse.github.io/gen/
https://talks.golang.org/2015/json.slide#1
https://github.com/pquerna/ffjson
http://json2struct.mervine.net/

# Go Concurrency - Pipeline (Fan-in / Fan-out) #12

https://blog.golang.org/pipelines

package main

import (
    "fmt"
    "sync"
)

func gen(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}

func sq(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * n
        }
        close(out)
    }()
    return out
}

func main() {
    in := gen(2, 3)

    // Distribute the sq work across two goroutines that both read from in.
    c1 := sq(in)
    c2 := sq(in)

    // Consume the merged output from c1 and c2.
    for n := range merge(c1, c2) {
        fmt.Println(n) // 4 then 9, or 9 then 4
    }
}

func merge(cs ...<-chan int) <-chan int {
    var wg sync.WaitGroup
    out := make(chan int)

    // Start an output goroutine for each input channel in cs.  output
    // copies values from c to out until c is closed, then calls wg.Done.
    output := func(c <-chan int) {
        for n := range c {
            out <- n
        }
        wg.Done()
    }
    wg.Add(len(cs))
    for _, c := range cs {
        go output(c)
    }

    // Start a goroutine to close out once all the output goroutines are
    // done.  This must start after the wg.Add call.
    go func() {
        wg.Wait()
        close(out)
    }()
    return out
}

# Go语言package管理与build管理工具收集 #11
gb: https://getgb.io/
glide: http://glide.sh/

# 定期更新Go语言开发相关工具 #10

执行以下shell命令完成更新:

go get -v -u github.com/alecthomas/gometalinter
go get -v -u github.com/nsf/gocode
go get -v -u golang.org/x/tools/cmd/...
go get -v -u sourcegraph.com/sqs/goreturns
go get -v -u github.com/rogpeppe/godef
brew update && brew upgrade glide
需要翻墙。

# 异步Work的使用 #8

用户足迹地图中尝试使用 https://github.com/gocraft/work 来做异步的Work调度。

# 查看Docker Container运行情况 #7
查看运行的容器：

$ docker ps
查看运行容器的性能指标（按容器ID）：

$ docker stats
查看运行容器的性能指标（按容器名）：

$ docker stats  $(docker ps --format={{.Names}})

# Go语言JSON处理 #6

https://golang.org/pkg/encoding/json/
http://attilaolah.eu/2013/11/29/json-decoding-in-go/
http://eagain.net/articles/go-dynamic-json/

# 理解goroutine与Go Concurrency #5
http://divan.github.io/posts/go_concurrency_visualize/

# Go Design Patterns #4

https://golang.org/doc/effective_go.html
https://blog.golang.org/advanced-go-concurrency-patterns

https://talks.golang.org/2013/bestpractices.slide#1
https://peter.bourgon.org/go-best-practices-2016/
https://peter.bourgon.org/go-in-production/
https://blog.rubylearning.com/best-practices-for-a-new-go-developer-8660384302fc#.fui2j4nbt

http://www.godesignpatterns.com/
http://www.golangpatterns.info/

https://github.com/monochromegane/go_design_pattern

# 清理MongoDB中指定Database里所有collection的数据 #3

use your_database_name;

db.getCollectionNames().forEach( function(collection_name) { 
  if (collection_name.indexOf("system.") == -1) 
       db[collection_name].drop();
  else  
       db.collection_name.remove({}); 
});

# 使用SQL中Now()函数改进代码逻辑 #2

Bad:

insert into `venue_contributor` (`venue_id`,`contributor_id`,`contribute_time`,`created_at`,`updated_at`,`deleted_at`) 
 select `id`,`creator_id`,`created_at`,now(),now(),`deleted_at` from `venue`;
Good:

SET @NOW_TIME=now();
insert into `venue_contributor` (`venue_id`,`contributor_id`,`contribute_time`,`created_at`,`updated_at`,`deleted_at`) 
select `id`,`creator_id`,`created_at`,@NOW_TIME,@NOW_TIME,`deleted_at` from `venue`;

# iTerms / Terminal 中启动Docker Quickstart Terminal #1

适用范围: 安装有Docker Toolbox的Mac OS X环境
将如下代码添加到 .bashrc 、.zshrc或者其它shell profile里面，启动docker执行docker-init命令即可。

# Docker Quick Start
#   Ref: https://github.com/docker/toolbox/issues/81#issuecomment-135588012
alias docker-init="source /Applications/Docker/Docker\ Quickstart\ Terminal.app/Contents/Resources/Scripts/start.sh"