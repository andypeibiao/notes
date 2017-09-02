###Babel ?
是一个广泛使用的ES6转码器，可将ES6转化为ES5代码（具体到官网去查看）

##最常用的ES6特性

```
let,const,class,extends,super,arrow,functions,
template string,destructuring,default,rest arguments
```

####let

```
var a='1';

while(1){
  var a = '2';
  console.log(a);
  break;
};

console.log(a);
//输出 2，2
```
es5只有全局作用域和函数作用域，没有块级作用域

let实际上为js新增了块级作用域。用它声明的变量，只在let命令所在的代码块有效。

```
var a='1';

while(1){
  let a = '2';
  console.log(a);
  break;
};

console.log(a);
//输出 2，1
```
另外一个var带来的不合理场景就是用来计数的循环变量泄露为全局变量

```
for(var i = 0; i < 100; i++){
	
}
```
闭包和let（参考demo）

####const
用于声明常量，不可修改。
当引入第三方库的时候，用const声明避免不小心重命名而导致出错

```
const monent = require('monent');
```

####class,extends,super

es5:原型，构造函数，继承...
es6提供了更接近传统语言的写法，引入了class这个概念。新的class写法让对象原型的写法更加清晰、更像面向对象编程的语法，也更加通俗易懂。

（参考demo,class）

####arrow function
是es6最常用的一个特性了，用它来写function比原来的写法要简洁清晰很多：

```
function(i){return i+1;}//es5
(i)=>i+1;//es6
```

```
function(x,y){
	x++;
	y--;
	return x+y; 
}

(x,y)=>{x++;y--;return x+y}
```
箭头函数解决this问题（查看demo）


####template string 

反引号`的使用 

${} 来引用变量

####destructuring(解构)

```

```

```
let dog={type:'animal',many:2}
let {type,many} = dog
console.log(type,many)//animal 2
```
####default ,rest

默认值，传统：type = type||'cat';

```
function animals(...types){
  console.log(types);
}
animals(1,2,3,4)
VM115:2 [1, 2, 3, 4]
```
