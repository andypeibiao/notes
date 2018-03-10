# this
> 在缺乏清晰认识的情况下， this 对你来说完全就是一种魔法。

> this 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将 API 设计 得更加简洁并且易于复用。
```
function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Kyle"
};

var you = {
    name: "Reader"
};

identify.call(me);
// KYLE identify.call( you ); // READER

speak.call(me);
// Hello, 我是 KYLE speak.call( you ); // Hello, 我是 READER
```

```
// 不使用this 显式传入一个上下文对象
function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello, I'm " + identify(context);
    console.log(greeting);
}

identify(you);
// READER speak( me ); //hello, 我是 KYLE

```

```
function foo(num) {
    console.log("foo: " + num);

    // 记录 foo 被调用的次数 this .count++;

}

foo.count = 0;

var i;
for (i = 0; i < 10; i++) {

    if (i > 5) {

        foo(i);

    }
}
// foo: 6 // foo: 7 // foo: 8 // foo: 9

// foo 被调用了多少次？ console.log( foo.count ); // 0 -- WTF?

```

x 把 this 理解成指向函数自身

x this 指向函数的作用域

> this 在任何情况下都不指向函数的词法作用域

```
function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log(this.a);
}

foo();
// ReferenceError: a is not defined

```
> this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调 用时的各种条件。 this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。
> 当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包 含函数在哪里被调用（调用栈）、函数的调用 方法 、传入的参数等信息。 this 就是记录的 其中一个属性，会在函数执行的过程中用到。

> this 既不指向函数自身也不指向函数的词法作用域

> this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

## 调用栈和调用位置
```
function baz() {
    // 当前调用栈是：baz // 因此，当前调用位置是全局作用域

    console.log("baz");
    bar();
    // <-- bar 的调用位置

}

function bar() {

    // 当前调用栈是 baz -> bar // 因此，当前调用位置在 baz 中

    console.log("bar");
    foo();
    // <-- foo 的调用位置

}

function foo() {

    // 当前调用栈是 baz -> bar -> foo // 因此，当前调用位置在 bar 中

    console.log("foo");

}

baz();
// <-- baz 的调用位置

```

### 默认绑定，如果使用严格模式（ strict mode ），那么全局对象将无法使用默认绑定
### 隐式绑定
```
obj1.obj2.foo();
```
```
var bar = obj.foo; // 函数别名！ var a = "oops, global"; // a 是全局对象的属性

bar(); // "oops, global"
```
回调函数

### 显式绑定
call, apply

### new绑定
JavaScript 中 new 的机制实 际上和面向类的语言完全不同。

1. 创建（或者说构造）一个全新的对象。
2. 这个新对象会被执行[[原型]]连接。
3. 这个新对象会绑定到函数调用的 this 。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。