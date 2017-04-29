```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <script src="//cdn.bootcss.com/echarts/3.3.1/echarts.min.js"></script>

    <!-- 新 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">

    <!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
    <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>

    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="//cdn.bootcss.com/select2/4.0.3/css/select2.min.css">

    <script src="//cdn.bootcss.com/select2/4.0.3/js/select2.min.js"></script>

    <style>
        body {
            margin: 0;
            padding: 0;
            font-weight: bold;
            font-size: 20px;
        }

        div {
            text-align: center;
            line-height: 50px
        }

        #main {
            width: 1400px;
            height: 900px;
        }

        .main {
            width: 100%;
            margin: 0 auto
        }

        .left {
            width: 80%;
            float: left
        }

        .right {
            width: 20%;
            margin-top: 200px;
            float: right
        }

        .right select {
            width: 90%;
        }
    </style>
</head>
<body>

<div class="main">
    <div class="left">
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
        <div id="main"></div>
    </div>
    <div class="right">
        <select>
            <option value="35658">我的淘气公主</option>
        </select>
        <button id="show-article-chart" type="button" class="btn btn-info btn-lg">查看小说信息</button>
        <button id="show-chapter-chart" type="button" class="btn btn-info btn-lg">查看章节信息</button>

    </div>
</div>

<script type="text/javascript">

    var __CONST = window.__CONST || {};
    __CONST.dataToRender = {{ articles|raw }};

    $(function () {

        //default
        renderChart(__CONST.dataToRender);

        //article
        $('#show-article-chart').click(function () {
            var id = $("select option:selected").val();
            if (!id) {
                return;
            }
            $.get("/saleinfo/article/info/?articleid=" + id, function (result) {
                __CONST.dataToRender = result;
                console.log(result);
                renderChart(__CONST.dataToRender);
            });
        });

        //chapter
        $('#show-chapter-chart').click(function () {
            var id = $("select option:selected").val();
            if (!id) {
                return;
            }
            window.open("/saleinfo/chapter_show/?articleid=" + id);
        });

        //select2
        $('select').select2({
            placeholder: '请选择：',
            delay: 250,
            ajax: {
                url: function (params) {
                    if (!params.term) {
                        return;
                    }
                    return '/saleinfo/article/search/?key=' + params.term;
                },
                processResults: function (data) {
                    return {
                        results: data
                    };
                },
                cache: true
            }
        });

        //echart
        function renderChart(datas) {
            if (myChart) {
                echarts.dispose(myChart);
            }

            var articleNames = [];//图例显示
            var xAxisShow = [];//x轴
            var seriesDatas = [];
            var showName = '';

            datas.forEach(function (article) {
                var series = {};
                var seriesData = [];
                var markPoint = {};
                var markPointData = [];

                showName = article.name;
                articleNames.push(article.name);

                //求和
//                articleNames.push("趋势");

                article.data.forEach(function (info, index) {
                    xAxisShow.push(info.time);
                    seriesData.push(parseInt(info.num));

                    //markPoint
                    var markPointDataObj = {};
                    markPointDataObj.name = "";
                    markPointDataObj.value = info.num;
                    markPointDataObj.xAxis = index;
                    markPointDataObj.yAxis = info.num;
                    markPointData.push(markPointDataObj);
                });
                markPoint.data = markPointData;

                series.name = article.name;
                series.type = 'line';
                series.data = seriesData;
                series.markPoint = markPoint;

                seriesDatas.push(series);
            });

//            var sumData = returnSumArray(seriesDatas[0].data);
//
//            //累计求和
//            var series = {
//                "name": "趋势",
//                "type": 'line',
//                "data": sumData
//            };
//            seriesDatas.push(series);

            // 始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            option = {
                title: {
                    text: '小说订阅趋势图',
                    subtext: showName
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: articleNames
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                dataZoom: {
                    show: true,
                    realtime: true,
                    start: 20,
                    end: 80
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxisShow
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} '
                        }
                    }
                ],
                series: seriesDatas
            };

            myChart.setOption(option);
        }

        //数据累计求和
        function returnSumArray(arr) {
            console.log(arr);
            var _arr = arr.slice();
            for (i = 0; i < _arr.length - 1; i++) {

                _arr[i + 1] += _arr[i];
                console.log(_arr[i + 1]);
            }
            return _arr;
        }
    })

</script>
</body>
</html>


```