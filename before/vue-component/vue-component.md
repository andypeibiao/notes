# Vue Components In Action

最近开发pc网站（直接在HTML中使用Vue），出现一些大量重复的代码，下午花了几小时仔细研究了下。

_[vuejs-templates](https://github.com/vuejs-templates)_

Reference:[vuejs-components](http://cn.vuejs.org/v2/guide/components.html)

- \<script type="text/x-template"\>
- JavaScript内联模版字符串
- .vue 组件
```
Vue.component('rank-book', {
        props: ["title", "apiurl"],
        data: function() {
            return {
                items: []
            }
        },
        template: "#rankBook",
        created: function() {
            var _self = this;
            $.ajax({
                type: "GET",
                url: _self.apiurl,
                xhrFields: {
                    withCredentials: true
                },
                success: function(data) {
                    if (data.code == 200) {
                        _self.items = data.data;
                    }<script type="text/x-template" id="rankBook">
	<div>
		<h1>{{title}}</h1>
		<ul>
			<li v-for="item in items.slice(0,1)"><span class="top">1</span><a :href="'/book/'+item.book_id"><img
							class="lazy" src="/img/index-defalut.jpg" :data-original=item.banner :alt=item.book_name :title=item.book_name></a>
				<p>
					<a :href="'/book/'+item.book_id" :title=item.book_name v-if="item.book_name.length >7">{{item.book_name.substr(0,7)}}...</a>
					<a :href="'/book/'+item.book_id" :title=item.book_name v-else>{{item.book_name}}</a>
					<br>
					<i>作者：{{item.author_name}}</i>
				</p>
			</li>
			<li v-for="(item, index) in items.slice(1)"><span :class="{ top: index < 2 }">{{index+2}}</span>
				<p>
					<a :href="'/book/'+item.book_id" :title=item.book_name v-if="item.book_name.length >14">{{item.book_name.substr(0,14)}}...</a>
					<a :href="'/book/'+item.book_id" :title=item.book_name v-else>{{item.book_name}}</a>
				</p>
			</li>
		</ul>
	</div>
</script>
                }
            });
        },
        updated: imgLazyLoad
    });
```
```
$(function() {
    var clickRank = new Vue({
        el: '#clickRank',
        data: {
            title: "点击榜",
            api: API.clickRank
        }
    });

    var weekRecommend = new Vue({
        el: '#weekRecommend',
        data: {
            title: "本周强推",
            api: API.weekRecommendRank
        }
    });

    var goodBook = new Vue({
        el: '#goodBook',
        data: {
            title: "优秀完本",
            api: API.goodBookRank
        }
    });
})
```
```
<div class="right-container">
    <div id="clickRank" class="container sidebar click-rank">
        <rank-book :title=title :apiurl=api></rank-book>
    </div>
    <div id="weekRecommend" class="container sidebar week-recommend">
        <rank-book :title=title :apiurl=api></rank-book>
    </div>
    <div id="goodBook" class="container sidebar">
        <rank-book :title=title :apiurl=api></rank-book>
    </div>
</div>
```
```
<script type="text/x-template" id="rankBook">
	<div>
		<h1>{{title}}</h1>
		<ul>
			<li v-for="item in items.slice(0,1)"><span class="top">1</span><a :href="'/book/'+item.book_id"><img
							class="lazy" src="/img/index-defalut.jpg" :data-original=item.banner :alt=item.book_name :title=item.book_name></a>
				<p>
					<a :href="'/book/'+item.book_id" :title=item.book_name v-if="item.book_name.length >7">{{item.book_name.substr(0,7)}}...</a>
					<a :href="'/book/'+item.book_id" :title=item.book_name v-else>{{item.book_name}}</a>
					<br>
					<i>作者：{{item.author_name}}</i>
				</p>
			</li>
			<li v-for="(item, index) in items.slice(1)"><span :class="{ top: index < 2 }">{{index+2}}</span>
				<p>
					<a :href="'/book/'+item.book_id" :title=item.book_name v-if="item.book_name.length >14">{{item.book_name.substr(0,14)}}...</a>
					<a :href="'/book/'+item.book_id" :title=item.book_name v-else>{{item.book_name}}</a>
				</p>
			</li>
		</ul>
	</div>
</script>
```