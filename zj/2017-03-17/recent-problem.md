# 近期使用Nodejs，vue，ejs出现的问题

## 渲染html标签
```
<div v-html=chapterContent class="content">
```
## 正则替换小说内容
```
formatContent: function (content) {
                return "<p>" + content.replace(/\r\n/g, "</p><p>") + "</p>";
            }
```
## 获取参数
```
//http://test.yueloo.com:8091/book/22/16
var index = location.href.split('/').indexOf('book');
var arr = location.href.split('/').splice(index + 1, 2);
//22,66
```
## 格式化时间戳

```
formatTime: function (T) {
                Date.prototype.format = function (format) {
                    var date = {
                        "M+": this.getMonth() + 1,
                        "d+": this.getDate(),
                        "h+": this.getHours(),
                        "m+": this.getMinutes(),
                        "s+": this.getSeconds(),
                        "q+": Math.floor((this.getMonth() + 3) / 3),
                        "S+": this.getMilliseconds()
                    };
                    if (/(y+)/i.test(format)) {
                        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));file:///home/pzy/ptspzy/notes/blog/2017-03-17.md
                    }
                    for (var k in date) {
                        if (new RegExp("(" + k + ")").test(format)) {
                            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                        }
                    }
                    return format;
                }
                var newDate = new Date();
                newDate.setTime(T * 1000);
                return newDate.format('yyyy-MM-dd hh:mm');
            }
```
## nodejs使用axios的Demo，nodejs转发cookie
Reference：[axios](https://github.com/mzabriskie/axios)
### 单一请求
```
router.get('/', function (req, res, next) {
    axios.defaults.baseURL = 'http://test.yueloo.com:8091';
    axios.get('/v1.0/pc_banner_down')
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        });
})
```
### 多次请求
```
var axios = require('axios');
axios.defaults.baseURL = 'http://test.yueloo.com';
axios.defaults.withCredentials = true;

router.get('/:bookid/:chapterid', function (req, res, next) {

    var bookId = req.params.bookid;
    var chapterId = req.params.chapterid;

    function getBookChapter(bookId) {
        return axios.get('/v1.0/chapter_list_page', {
            params: {
                book_id: bookId,
                page: 1,
                page_size: 99999
            }
        })
    }

    function getBookChapterContent(bookId, chapterId) {
        return axios.get('/v1.0/get_chapter_content_by_chapterid', {
            params: {
                book_id: bookId,
                chapter_id: chapterId
            },
            headers: {'Cookie': req.headers.cookie},
        })
    }

    function getNextChapter(bookId, chapterId) {
        return axios.get('/v1.0/prev_next_chapter', {
            params: {
                book_id: bookId,
                chapter_id: chapterId
            },
        })
    }

    axios.all([getBookChapter(bookId), getBookChapterContent(bookId, chapterId), getNextChapter(bookId, chapterId)])
        .then(axios.spread(function (chapterResult, contentResult, nextResult) {
                if (chapterResult.data.code != 200 || contentResult.data.code != 200 || nextResult.data.code != 200) {
                    res.render('404');
                    return;
                }
                res.render('reader', {
                    title: "阅读页",
                    loginURI: cfg.login.uri,
                    bookId: bookId,
                    chapterId: chapterId,
                    // chapterContent: contentResult.data.data,
                    chapterData: chapterResult.data.data,
                    nextChapter: nextResult.data.data
                });

            })
        )
        .catch(function (error) {
            console.log(error);
            res.render('404');
        });


});
```

## ejs的渲染Demo

Reference:[ejs](https://github.com/mde/ejs)
循环：
```
<ul>
    <% if(typeof(chapterData) != 'undefined'){ %>
    <% chapterData.chapter_list.forEach(function (chapter) { %>
    <li><a href="javascript:void(0)" bookid="<%= chapter.book_id %>"
            chapterid="<%= chapter.chapter_id %>"><%= chapter.chapter_name %></a>
        <% if (chapter.chapter_is_vip){ %>
        <span>vip</span>
        <% } %>
    </li>
    <% }) %>
    <% } %>
</ul>
```
结果：![结果](img/2017-03-17-11-54-55.png)

条件：
```
<% if(nextChapter.prev.book_id){ %>
    <a class="up" href="javascript:void(0)" bookid="<%= nextChapter.prev.book_id %>" chapterid="<%= nextChapter.prev.chapter_id %>"><i></i>上一章</a>
<% } %>

<% if(nextChapter.next.book_id){ %>
    <a class="down" href="javascript:void(0)" bookid="<%= nextChapter.next.book_id %>" chapterid="<%= nextChapter.next.chapter_id %>"><i></i>下一章</a>
<% } %>
```