[http://c.biancheng.net/cpp/html/2443.html](http://c.biancheng.net/cpp/html/2443.html)
相邻两数比较，或交换位置。大的或小的数往外“冒”
**JS实现**
```
var arr = [89, 38, 11, 78, 96, 44, 19, 25];
var bubbleSort = function(a) {
    var length = a.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}
bubbleSort(arr);
console.log(arr);
```

优化方式一：某趟比较中没有交换，即已排好序，则终止循环；（设置标志量）
优化方式二：类似方式一，设置标志量记录每趟最后一次交换的位置
优化方式三：正反两个方向同时进行冒泡排序