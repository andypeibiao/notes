# [MySQL存储引擎 MyISAM 和 InnoDB 的区别](http://blog.csdn.net/xifeijian/article/details/20316775)
a. MyISAM类型不支持事务处理等高级处理，而InnoDB类型支持.
b. MyISAM类型的表强调的是性能，其执行数度比InnoDB类型更快.
c. InnoDB不支持FULLTEXT类型的索引.
d. InnoDB中不保存表的具体行数，也就是说，执行select count(*) from table时，InnoDB要扫描一遍整个表来计算有多少行，但是MyISAM只要简单的读出保存好的行数即可.
e. 对于AUTO_INCREMENT类型的字段，InnoDB中必须包含只有该字段的索引，但是在MyISAM表中，可以和其他字段一起建立联合索引。
f. DELETE FROM table时，InnoDB不会重新建立表，而是一行一行的删除。
g. LOAD TABLE FROM MASTER操作对InnoDB是不起作用的，解决方法是首先把InnoDB表改成MyISAM表，导入数据后再改成InnoDB表，但是对于使用的额外的InnoDB特性(例如外键)的表不适用.
h. MyISAM支持表锁，InnoDB支持行锁。
事务处理：是指作为单个逻辑工作单元执行的一系列操作，要么完全地执行，要么完全地不执行。 
# 说出一些MySQL优化方法？
a. 设计良好的数据库结构，允许部分数据冗余，尽量避免join查询，提高效率。
b. 选择合适的表字段数据类型和存储引擎，适当的添加索引。
c. mysql库主从读写分离。
d. 找规律分表，减少单表中的数据量提高查询速度。
e。添加缓存机制，比如memcached，apc等。
f. 不经常改动的页面，生成静态页面。
g. 书写高效率的SQL。比如 SELECT * FROM TABEL 改为 SELECT field_1, field_2, field_3 FROM TABLE.

#[理解MySQL——索引与优化](http://www.cnblogs.com/hustcat/archive/2009/10/28/1591648.html)
# [mysql int(3)与int(11)的区别](http://blog.sina.com.cn/s/blog_610997850100wjrm.html)
char 与varchar区别？

# 数据库优化
## [MySQL索引背后的数据结构及算法原理](http://blog.codinglabs.org/articles/theory-of-mysql-index.html)

## [MYSQL的索引类型：PRIMARY, INDEX,UNIQUE,FULLTEXT,SPAIAL 有什么区别？各适用于什么场合？](https://zhidao.baidu.com/question/236161917.html)
PRIMARY, INDEX, UNIQUE 这3种是一类
PRIMARY 主键。 就是 唯一 且 不能为空。
INDEX 索引，普通的
UNIQUE 唯一索引。 不允许有重复。
FULLTEXT 是全文索引，用于在一篇文章中，检索文本信息的。

举个例子来说，比如你在为某商场做一个会员卡的系统。
这个系统有一个会员表
有下列字段：
会员编号   INT
会员姓名   VARCHAR(10)
会员身份证号码   VARCHAR(18)
会员电话   VARCHAR(10)
会员住址   VARCHAR(50)
会员备注信息  TEXT

那么这个 会员编号，作为主键，使用 PRIMARY
会员姓名 如果要建索引的话，那么就是普通的 INDEX
会员身份证号码   如果要建索引的话，那么可以选择 UNIQUE （唯一的，不允许重复）
会员备注信息 ， 如果需要建索引的话，可以选择 FULLTEXT，全文搜索。

不过 FULLTEXT 用于搜索很长一篇文章的时候，效果最好。
用在比较短的文本，如果就一两行字的，普通的 INDEX 也可以。
## imooc笔记 [视频地址]（http://www.imooc.com/video/3688）
SQL及索引（重要）->数据库表结构（范式）->系统配置->硬件
### sql优化技巧
慢查询日志，慢查询分析工具mysqldumpslow, MySQL慢查日志分析工具之pt-query-digest
#### MAX COUNT 
```
mysql>  explain select Max(created_at) from tang_poetry.poetries \G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: poetries
         type: ALL
possible_keys: NULL
          key: NULL
      key_len: NULL
          ref: NULL
         rows: 45490
        Extra: NULL
1 row in set (0.00 sec)
```
这里就是一个表扫描操作，一共扫描了45490行数据。如果数据表很大，这里的IO效率就会很差
优化方法：max(field)可以通过为field建立索引 来优化
```
create index idx_create_at on tang_poetry.poetries(created_at);
```
优化后：
```
mysql> explain select Max(created_at) from tang_poetry.poetries \G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: NULL
         type: NULL
possible_keys: NULL
          key: NULL
      key_len: NULL
          ref: NULL
         rows: NULL
        Extra: Select tables optimized away
1 row in set (0.00 sec)
```
优化之后并不需要查询表中的数据，而是通过索引就可以知道执行的结果了。
因为索引是顺序排列的，只需要查最后一个数据。这样就尽可能减少了IO操作。
而且这时候，不管表数据量有多大，查询max所需要的时间是基本固定的

1.对max()查询，可以为表创建索引，create index index_name on table_name(column_name 规定需要索引的列),然后在进行查询
2.count()对多个关键字进行查询，比如在一条SQL中同时查出2006年和2007年电影的数量，语句：
select count(release_year='2006' or null) as '2006年电影数量',
count(release_year='2007' or null) as '2007年电影数量'
from film;

#### 子查询
对于子查询的优化，可以优化成为join方式查询，但是这样子查询的话如果是一对多的关系，那么就要注意去重，可以用distinct关键字去重
#### group by
group by可能会出现临时表（Using temporary），文件排序（Using filesort）等，影响效率。
可以通过关联的子查询，来避免产生临时表和文件排序，可以节省io
改写前
select actor.first_name,actor.last_name,count(*)
from sakila.film_actor
inner join sakila.actor using(actor_id)
group by film_actor.actor_id;
改写后
select actor.first_name,actor.last_name,c.cnt
from sakila.actor inner join(
select actor_id,count(*) as cnt from sakila.film_actor group by
actor_id
)as c using(actor_id);
#### limit
limit常用于分页处理，时常会伴随order by从句使用，因此大多时候会使用Filesorts这样会造成大量的io问题
1.使用有索引的列或主键进行order by操作
2.记录上次返回的主键，在下次查询时使用主键过滤
使用这种方式有一个限制，就是主键一定要顺序排序和连续的，如果主键出现空缺可能会导致最终页面上显示的列表不足5条，解决办法是附加一列，保证这一列是自增的并增加索引就可以了

### 索引
选择合适的索引列<br>
1.在where，group by，order by，on从句中出现的列<br>
2.索引字段越小越好(因为数据库的存储单位是页，一页中能存下的数据越多越好 )<br>
3.离散度大得列放在联合索引前面<br>
select count(distinct customer_id), count(distinct staff_id) from payment;<br>
查看离散度 通过统计不同的列值来实现 count越大 离散程度越高

离散度，我的理解就是唯一性了，比如主键，绝对是离散度最大的，而一些用来标识状态标识的列，基本只有几个可选项，离散度就很小


过多的索引不但影响写入，而且影响查询，索引越多，分析越慢
如何找到重复和多余的索引，主键已经是索引了，所以primay key 的主键不用再设置unique唯一索引了
冗余索引，是指多个索引的前缀列相同，innodb会在每个索引后面自动加上主键信息

冗余索引查询工具
pt-duplicate-key-checker

通过慢查询日志配合pt-index-usage来删除不用索引：pt-index-usage -uroot -p '' mysql-slow.log
### 数据库结构优化
#### 选择合适的数据类型
1.使用可存下数据的最小的数据类型
2.使用简单地数据类型，Int要比varchar类型在mysql处理上更简单
3.尽可能使用not null定义字段，这是由innodb的特性决定的，因为非not null的数据可能需要一些额外的字段进行存储，这样就会增加一些IO。可以对非null的字段设置一个默认值
4.尽量少用text，非用不可最好分表，将text字段存放到另一张表中，在需要的时候再使用联合查询，这样可提高查询主表的效率
例子1、用Int存储日期时间
from_unixtime()可将Int类型的时间戳转换为时间格式
select from_unixtime(1392178320); 输出为 2014-02-12 12:12:00
unix_timestamp()可将时间格式转换为Int类型
select unix_timestamp('2014-02-12 12:12:00'); 输出为1392178320
例子2
存储IP地址——bigInt
利用inet_aton(),inet_ntoa()转换
select inet_aton('192.169.1.1'); 输出为3232301313
select inet_ntoa(3232301313); 输出为192.169.1.1
#### 表的范式化、反范式化
表的范式化即数据库设计的规范化：数据表不存在非关键字段对任意关键字段的传递函数依赖，则符合第三范式。
可以将一张数据表进行拆分，来满足第三范式的要求。
设计表的时候符合范式化是为了：减少数据冗余、减少表的插入、更新、删除异常
设计表的时候使用反范式化是为了：以空间换时间、增强代码的可编程性和可维护性
不符合第三范式要求的表存在以下问题：
1.数据冗余:（分类、分类描述）对于每一个商品都会进行记录
2.数据插入异常
3.数据更新异常
4.数据删除异常

反范式化：就是做的事情和范式化是反着来的，目的也很简单，以空间换时间、简化编程的复杂度，实际的效果就是编写的SQL语句更加的简单了，并且对应的SQL语句的执行效率也更加的高了！
