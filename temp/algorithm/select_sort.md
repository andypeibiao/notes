[http://c.biancheng.net/cpp/html/2442.html](http://c.biancheng.net/cpp/html/2442.html)

在要排序的一组数中，选出最小（或者最大）的一个数与第1个位置的数交换；然后在剩下的数当中再找最小（或者最大）的与第2个位置的数交换，依次类推，直到第n-1个元素（倒数第二个数）和第n个元素（最后一个数）比较为止。

__JS实现简单选择排序__

```
var arr=[5,2,66,81,3,64,12,32];
Array.prototype.sorting=function(){
	var len=this.length;
	for(var i=0;i<len-1;i++){
		var min=i;
		for(var j=i+1;j<len;j++){
			if(arr[j]<arr[min]){
				min=j;
			}
		}
		if(i!=min){
			var temp=arr[i];
			arr[i]=arr[min];
			arr[min]=temp;
		}
	}
	return this;
}
console.log(arr.sorting());
```

```
function select_sort(a){
    
    var n = a.length;

    for(var i = 0; i < n -1; i++){

        var min_index = i;

        for(var j = i+1; j < n; j++){
            if(a[j] < a[min_index]){
                min_index = j;
            }
        }

        if(i!=min_index){
            var temp = a[i];
            a[i] = a[min_index];
            a[min_index] = temp;
        }
    }
}
var arr = [89, 38, 11, 78, 96, 44, 19, 25];

select_sort(arr);

console.log(arr);

```
__JS实现简单选择排序的改进--二元选择排序__

一次比较选出最大最小值；冒泡也有同样优化方法
```
function select_sort2(a) {
    var n = a.length;
    for (var i = 0; i <= (n / 2) - 1; i++) {//for (var i = 0; i < n / 2; i++)  这么写奇数个数会多比较一次
        var min_index = i;
        var max_index = i;
        for (var j = i + 1; j < (n - i); j++) {
            if (a[j] < a[min_index]) {
                min_index = j;
                continue;
            }
            if (a[j] > a[max_index]) {
                max_index = j;
            }
        }
        var temp = a[i];
        a[i] = a[min_index];
        a[min_index] = temp;

        var temp = a[n - i - 1];
        a[n - i - 1] = a[max_index];
        a[max_index] = temp;
        
        console.log(arr);
    }
}
var arr = [89, 38, 11, 78, 96, 44, 19, 25, 22];
select_sort2(arr);

```




__PHP实现简单选择排序__

```
function select_sort(&$arr)
{
    $length = count($arr);

    for ($i = 0; $i < $length - 1; $i++) {

        $min_index = $i;

        for ($j = $i + 1; $j < $length; $j++) {
            if ($arr[$min_index] > $arr[$j]) {
                $min_index = $j;
            }
        }

        if ($i != $min_index) {
            $temp = $arr[$i];
            $arr[$i] = $arr[$min_index];
            $arr[$min_index] = $temp;
        }

    }
   
}

$arr = [5, 2, 66, 81, 3, 64, 12, 32];


select_sort($arr);

print_r($arr);
```