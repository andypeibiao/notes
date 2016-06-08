<?php
//同时引用,不加命名空间会报错，类名冲突
require_once("A.class.php");
require_once("B.class.php");

//全局类
require_once("C.class.php");

use A\Apple;
use B\Apple as BApple;

//直接根据命名空间
$a = new A\Apple();
$a->get_info();

//通过use
$a1 = new Apple();
$a1->get_info();

//通过use as 
$b = new BApple();
$b->get_info();

//调用全局类
$c = new \Apple();
$c->get_info();
?>