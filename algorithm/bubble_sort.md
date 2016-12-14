[http://c.biancheng.net/cpp/html/2443.html](http://c.biancheng.net/cpp/html/2443.html)
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