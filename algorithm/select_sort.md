__JS实现选择排序__

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
__PHP实现选择排序__

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