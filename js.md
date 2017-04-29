# 原型模式
```
使用原型对象的好处是可以
让所有对象实例共享它所包含的属性和方法。换句话说,不必在构造函数中定义对象实例的信息,而是
可以将这些信息直接添加到原型对象中,如下面的例子所示。
```
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    alert(this.name);
};
var person1 = new Person();
person1.sayName();
//"Nicholas"
var person2 = new Person();
```


var map = Array.prototype.map
var a = map.call("Hello World", function(x) { 
  return x.charCodeAt(0); 
})
// a的值为[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

    
var map = Array.prototype.map;
var aa = map.call([1,2,3],function(a){
    return a*a; 
});

aa;



Lodash 是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库。

http://lodashjs.com/docs/