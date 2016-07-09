###一、javascript的组成

- ECMAScript
- DOM
- BOM

###二、变量类型
常见类型有：number, string, boolean, undefined, object, function

typeof 运算符，用来检测对象的类型,如：alert(typeof 'aaa'); //string

###三、数据类型转换
显示类型转换（强制类型转换）：parseInt(), parseFloat();

隐示类型转换：==、===、-、*、/

isNaN(),检测一个对象是一个非数字
###四、作用域和闭包
局部变量，和全局变量

闭包定义：（子函数可以调用父函数的局部变量）
###五、命名规范
匈牙利命名法：单词首字母大写（userName）

类型前缀：如Array的前缀取首字母：var aList = document.getElementsByTagName('li');
###六、运算符
\+ - * / %(加，减，乘，除，取模)

赋值运算：=、+=、-=、*=、/=、%=

关系运算：<、>、<=、>=、==、===、!=、!==

逻辑运算：&与，||或，！非

优先级运算：（）括号
###七、流程控制
判断：if、switch、?:

循环：while、for

跳出：break、continue

真假：true:(可以转换为true的值=>true，非零数字，非空字符串，非空对象)
　　　　　　  false:(可以转换为false的值=>false，数字零，空字符串，空对象，undefined)

### 八、json对象