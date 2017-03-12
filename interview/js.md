
```
var a=1;
var b={
  a:2,
  b:function(){
    console.log(this.a);
  }(), 
  f:this.f=function(){
    console.log(this.a);
  }
};
function f(){ console.log(3); }
f();
b.f();
(b.f)();
(0,b.f)();
```
https://segmentfault.com/q/1010000008632480