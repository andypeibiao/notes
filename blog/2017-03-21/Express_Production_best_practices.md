# [译]Express生产环境最佳实践：性能，可用性([Production best practices: performance and reliability](http://expressjs.com/en/advanced/best-practice-performance.html))

## 概述
这篇文章讨论了Express应用在部署生产环境过程中性能和可用性的最佳实践

很明显，这个话题属于devops,包含开发与维护。因此，文章分为两部分：

- 编码部分
- 维护部分

## 编码

- 使用gzip压缩
- 不要使用同步函数
- 合理的日志处理
- 正确的处理异常

### 1.Use gzip compression

使用gzip压缩可以大大减小响应主体的大小，从而提升了客户端的响应速度，使用[compression](https://www.npmjs.com/package/compression)中间件来处理gzip的压缩。例如：
```
var compression = require('compression')
var express = require('express')
var app = express()
app.use(compression())
```

对于生产环境高并发的网站，最佳的方式是在反向代理层设置压缩方式。这样，我们编码时就不用compression中间件了，nginx会帮助我们完成此项工作，详细查看[ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)。

var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());
### 2.Don’t use synchronous functions

返回结果之前同步函数和方法会一直占用执行进程。对于同步函数的一个简单调用可能在几微秒或毫秒返回结果，然而在高并发的网站，这些调用增加了会降低网站的性能。所以要在生产环境尽量使用避免同步函数

虽然Node和许多模块在函数中提供了同步和异步两个版本，在生产环境还是要使用异步版本。同步只有在初始启动时使用才是可取的。

如果使用Node.js 4.0+ 或者 io.js 2.1.0+,可以使用参数 --trace-sync-io 去打印针对同步函数的警告和堆栈跟踪信息。[node command-line options documentation](https://nodejs.org/api/cli.html#cli_trace_sync_io)

### 3.Do logging correctly

一般，有两个原因要做日志处理，调试和跟踪应用运行记录。开发调试时使用```console.log()```和```console.error()```在终端打印信息。但是当目的地是终端或文件时这些函数是同步的，所以不适合在生产环境使用，除非你把日志输出到另一个程序中。


我们可以使用debug模块来实现输出，该模块将判断环境变量是否是开发环境，执行debug输出，保证你的程序的异步处理。

#### For debugging

If you’re logging for purposes of debugging, then instead of using console.log(), use a special debugging module like [debug](https://www.npmjs.com/package/debug). This module enables you to use the DEBUG environment variable to control what debug messages are sent to console.err(), if any. To keep your app purely asynchronous, you’d still want to pipe console.err() to another program. But then, you’re not really going to debug in production, are you?

#### For app activity

If you’re logging app activity (for example, tracking traffic or API calls), instead of using console.log(), use a logging library like [Winston](https://www.npmjs.com/package/winston)  or [Bunyan](https://www.npmjs.com/package/bunyan). For a detailed comparison of these two libraries, see the StrongLoop blog post [Comparing Winston and Bunyan Node.js Logging](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/?_ga=1.240102275.1822435717.1490015455).

When StrongLoop Process Manager (PM) runs an application, it automatically runs it in a cluster with a number of workers equal to the number of CPU cores on the system. You can manually change the number of worker processes in the cluster using the slc command line tool without stopping the app.

For example, assuming you've deployed your app to prod.foo.com and StrongLoop PM is listening on port 8701 (the default), then to set the cluster size to eight using slc:

```sh
$ slc ctl -C http://prod.foo.com:8701 set-size my-app 8
```

For more information on clustering with StrongLoop PM, see [Clustering](https://docs.strongloop.com/display/SLC/Clustering) in StrongLoop documentation.

### Cache request results

Another strategy to improve the performance in production is to cache the result of requests, so that your app does not repeat the operation to serve the same request repeatedly.

Use a caching server like [Varnish](https://www.varnish-cache.org/) or [Nginx](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) (see also [Nginx Caching](https://serversforhackers.com/nginx-caching/)) to greatly improve the speed and performance of your app.

### Use a load balancer

No matter how optimized an app is, a single instance can handle only a limited amount of load and traffic. One way to scale an app is to run multiple instances of it and distribute the traffic via a load balancer. Setting up a load balancer can improve your app's performance and speed, and enable it to scale more than is possible with a single instance.

A load balancer is usually a reverse proxy that orchestrates traffic to and from multiple application instances and servers. You can easily set up a load balancer for your app by using [Nginx](http://nginx.org/en/docs/http/load_balancing.html) or [HAProxy](https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts).

With load balancing, you might have to ensure that requests that are associated with a particular session ID connect to the process that originated them. This is known as _session affinity_, or _sticky sessions_, and may be addressed by the suggestion above to use a data store such as Redis for session data (depending on your application). For a discussion, see [Using multiple nodes](http://socket.io/docs/using-multiple-nodes/).

#### Using StrongLoop PM with an Nginx load balancer

[StrongLoop Process Manager](http://strong-pm.io/) integrates with an Nginx Controller, making it easy to configure multi-host production environment configurations. For more information, see [Scaling to multiple servers](https://docs.strongloop.com/display/SLC/Scaling+to+multiple+servers) (StrongLoop documentation).
<a name="proxy"></a>

### Use a reverse proxy

A reverse proxy sits in front of a web app and performs supporting operations on the requests, apart from directing requests to the app. It can handle error pages, compression, caching, serving files, and load balancing among other things.

Handing over tasks that do not require knowledge of application state to a reverse proxy frees up Express to perform specialized application tasks. For this reason, it is recommended to run Express behind a reverse proxy like [Nginx](https://www.nginx.com/) or [HAProxy](http://www.haproxy.org/) in production.
</div>
