## [Reduce](https://juejin.im/post/58f44082da2f60005d3a3710?utm_source=gold-miner&utm_medium=readme&utm_campaign=github)
```
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
  console.log(accumulator, currentValue, currentIndex, array)
  return accumulator + currentValue;
});
```

```
var a = [
{id: 11, name: 'ppp'},
{id: 22, name: 'zzz'},
{id: 33, name: 'yyy'},
]
a.reduce((acc, item) =>{
    acc[item.id] = item
    return acc
}, {})
```

```
var result = Object.keys(params).reduce((res,k)=>
  this.model.hasOwnProperty(k)
    ? Object.assign(res, {[k]: this.model[k](params[k])})
    : res, {});
```