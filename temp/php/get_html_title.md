[参考： PHP获取网页标题的代码 ](http://blog.csdn.net/langyu1021/article/details/49275961)
```
<?php
$url = "http://bbs.csdn.net/topics/390516454";
$lines_array = file($url);
$lines_string = implode('', $lines_array);
eregi("<title>(.*)</title>", $lines_string, $title);
echo $title[1];
?>
```

```
<?php
$content=file_get_contents("http://www.jbxue.com/");
$pos = strpos($content,'utf-8');
if($pos===false){$content = iconv("gbk","utf-8",$content);}
$postb=strpos($content,'<title>')+7;
$poste=strpos($content,'</title>');
$length=$poste-$postb;
echo substr($content,$postb,$length);
?>
```
