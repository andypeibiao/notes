window.sort = {
    bubbleSort: function(a) {
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
        console.log(a);
    },
    insertSort: function(arr) {
        var i, j;
        for (i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) { //若第i个元素大于i-1元素，直接插入。小于的话，移动有序表后插入  
                var temp = arr[i]; //复制为哨兵，即存储待排序元素  
                j = i - 1;
                arr[i] = arr[i - 1]; //先后移一个元素  
                while (temp < arr[j]) { //查找在有序表的插入位置  
                    arr[j + 1] = arr[j];
                    j--; //元素后移  
                }
                arr[j + 1] = temp; //插入到正确位置  
            }
        }
        console.log(arr);
    },
    selectSort: function(a) {

        var n = a.length;

        for (var i = 0; i < n - 1; i++) {

            var min_index = i;

            for (var j = i + 1; j < n; j++) {
                if (a[j] < a[min_index]) {
                    min_index = j;
                }
            }

            if (i != min_index) {
                var temp = a[i];
                a[i] = a[min_index];
                a[min_index] = temp;
            }
        }
        console.log(a);
    },
    selectSort2: function(a) {
        var n = a.length;
        for (var i = 0; i <= (n / 2) - 1; i++) { //for (var i = 0; i < n / 2; i++)  这么写奇数个数会多比较一次
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
        }
        console.log(a);
    }
}