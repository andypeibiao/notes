## Composer
> Composer is a tool for dependency management in PHP

> This idea is not new and Composer is strongly inspired by node's npm and ruby's bundler.

[Getting Started](https://getcomposer.org/doc/00-intro.md)

非全局安装：
```
 /home/pzy/composer/composer install
```

全局安装：
```
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

composer -V
```
修改Packagist 镜像
```
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```