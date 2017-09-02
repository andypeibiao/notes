# [__proto__、prototype与原型链](http://imhaoran.wang/2014/10/25/prototype%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE/)
__proto__（隐式原型）、prototype（显式原型）
显式原型(explicit prototype property)：
几乎每一个函数(通过Function.prototype.bind方法构造出来的函数是个例外)在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象。

隐式原型(implicit prototype link)：
JavaScript中任意对象都有一个内置属性[[prototype]]，可以通过.__proto__，或者通过符合ES5标准的Get方法Object.getPrototypeOf() 来访问。