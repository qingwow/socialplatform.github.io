$(window).load(function () { $(".loading").fadeOut() })
$(function () {
    showtopContent('1');
    $("#defaultTag").click();
    

    // echarts_31("44")
    // echarts_4("44");
    // echarts_5("44");
    
})





// index男女pie图，频次pie图
function echarts_31(key) {

    const data1 = {
        44: [
            { value: 450, name: '男' },
            { value: 562, name: '女' },
        ],
        21: [
            { value: 415, name: '男' },
            { value: 545, name: '女' },
        ],
        26: [
            { value: 307, name: '男' },
            { value: 427, name: '女' },
        ],
        25: [
            { value: 177, name: '男' },
            { value: 238, name: '女' },
        ],
        12: [
            { value: 170, name: '男' },
            { value: 249, name: '女' },
        ],
        3: [
            { value: 157, name: '男' },
            { value: 212, name: '女' },
        ],
        35: [
            { value: 162, name: '男' },
            { value: 208, name: '女' },
        ],
        33: [
            { value: 158, name: '男' },
            { value: 154, name: '女' },
        ],
        22: [
            { value: 96, name: '男' },
            { value: 115, name: '女' },
        ],
        28: [
            { value: 75, name: '男' },
            { value: 96, name: '女' },
        ],
        13: [
            { value: 72, name: '男' },
            { value: 87, name: '女' },
        ],
        18: [
            { value: 67, name: '男' },
            { value: 98, name: '女' },
        ],
        10: [
            { value: 22, name: '男' },
            { value: 38, name: '女' },
        ],
        23: [
            { value: 74, name: '男' },
            { value: 51, name: '女' },
        ]
    }
    const data2 = {
        44: [
            { value: 338, name: '低频用户' },
            { value: 722, name: '中频用户' },
            { value: 910, name: '高频用户' },
            { value: 326, name: '流失用户' },
        ],
        21: [
            { value: 298, name: '低频用户' },
            { value: 691, name: '中频用户' },
            { value: 1025, name: '高频用户' },
            { value: 259, name: '流失用户' },
        ],
        26: [
            { value: 194, name: '低频用户' },
            { value: 536, name: '中频用户' },
            { value: 791, name: '高频用户' },
            { value: 194, name: '流失用户' },
        ],
        25: [
            { value: 187, name: '低频用户' },
            { value: 276, name: '中频用户' },
            { value: 357, name: '高频用户' },
            { value: 227, name: '流失用户' },
        ],
        12: [
            { value: 128, name: '低频用户' },
            { value: 299, name: '中频用户' },
            { value: 401, name: '高频用户' },
            { value: 187, name: '流失用户' },
        ],
        3: [
            { value: 113, name: '低频用户' },
            { value: 285, name: '中频用户' },
            { value: 373, name: '高频用户' },
            { value: 100, name: '流失用户' },
        ],
        35: [
            { value: 116, name: '低频用户' },
            { value: 268, name: '中频用户' },
            { value: 353, name: '高频用户' },
            { value: 109, name: '流失用户' },
        ],
        33: [
            { value: 136, name: '低频用户' },
            { value: 205, name: '中频用户' },
            { value: 284, name: '高频用户' },
            { value: 201, name: '流失用户' },
        ],
        22: [
            { value: 88, name: '低频用户' },
            { value: 138, name: '中频用户' },
            { value: 209, name: '高频用户' },
            { value: 111, name: '流失用户' },
        ],
        28: [
            { value: 51, name: '低频用户' },
            { value: 98, name: '中频用户' },
            { value: 185, name: '高频用户' },
            { value: 84, name: '流失用户' },
        ],
        13: [
            { value: 74, name: '低频用户' },
            { value: 127, name: '中频用户' },
            { value: 137, name: '高频用户' },
            { value: 64, name: '流失用户' },
        ],
        18: [
            { value: 70, name: '低频用户' },
            { value: 92, name: '中频用户' },
            { value: 147, name: '高频用户' },
            { value: 92, name: '流失用户' },
        ],
        10: [
            { value: 10, name: '低频用户' },
            { value: 19, name: '中频用户' },
            { value: 127, name: '高频用户' },
            { value: 25, name: '流失用户' },
        ],
        23: [
            { value: 40, name: '低频用户' },
            { value: 76, name: '中频用户' },
            { value: 158, name: '高频用户' },
            { value: 57, name: '流失用户' },
        ],
    }
    // 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById('fb02'));
    var myChart3 = echarts.init(document.getElementById('fb03'));
    const newdata = data1[key]
    const newdataQST2 = data2[key]

    const data1Total = newdata.reduce((sum,item) => sum+item.value,0);
    let formattedData1;
    if (data1Total>=1000) {
        formattedData1 = data1Total.toString();
    } else {
        formattedData1 = ' ' + data1Total.toString();
    }

    const data2Total = newdataQST2.reduce((sum,item) => sum+item.value,0);
    let formattedData2;
    if (data2Total>=1000) {
        formattedData2 = data2Total.toString();
    } else {
        formattedData2 = ' ' + data2Total.toString();
    }

    option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            orient: 'vertical',
            top: '45%',
            right: '0%',
            itemWidth: 14,
            itemHeight: 14,
            data: [
                {name: '男', value: newdata[0]}, 
                {name: '女', value: newdata[1]}, 
            ],
            textStyle: {
                color: 'rgba(255,255,255)',
                fontSize: '15',
                
            }
        },
        series: [
            {
                name: '基础信息',
                type: 'pie',
                center: ['40%', '55%'],
                radius: ['50%', '60%'],
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                label: { 
                    show: true,
                    fontSize:16
                    // formatter: '{b}: {c} ({d}%)'
                },
                labelLine: { show: true },
                data: newdata
            }
        ],
        graphic: [
            {
                type: 'group',
                left: '29%',
                top: '50%',
                children: [
                    {
                        type: 'text', // 使用文本图形
                        left: 'center', // 水平居中
                        top: -40, // 垂直位置（根据需要调整）
                        z: 2, // z-index，设置在饼图之上
                        style: {
                            text: formattedData1, // 要显示的文本
                            fill: '#fff', // 文本颜色
                            font: 'bold 36px Arial' // 文本样式
                            
                        }
                    }
                ]
            }
        ],
    };
    option3 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            orient: 'vertical',
            top: '33%',
            right: '3%',
            itemWidth: 14,
            itemHeight: 14,
            data: ['低频用户', '中频用户', '高频用户', '流失用户'],
            textStyle: {
                color: 'rgba(255,255,255)',
                fontSize: '16',
            }
        },
        series: [
            {
                name: '频次分布',
                type: 'pie',
                center: ['35%', '55%'],
                radius: ['50%', '60%'],
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                label: { show: true },
                labelLine: { show: true ,fontSize:16},
                data: newdataQST2
            }
        ],
        graphic: [
            {
                type: 'group',
                left: '26%',
                top: '50%',
                children: [
                    {
                        type: 'text', // 使用文本图形
                        left: 'center', // 水平居中
                        top: -40, // 垂直位置（根据需要调整）
                        z: 2, // z-index，设置在饼图之上
                        style: {
                            text: formattedData2, // 要显示的文本
                            fill: '#fff', // 文本颜色
                            font: 'bold 36px Arial' // 文本样式
                        }
                    }
                ]
            }
        ],
    };



    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);
    myChart3.setOption(option3);

    window.addEventListener("resize", function () {
        myChart2.resize();
        myChart3.resize();

    })
}



// index2系列图
function echarts_4(key) {
    const data4 = {
        44: [70, 17,7, 5],
        21: [77, 14, 5, 3],
        26: [76, 13, 6, 4],
        25: [72, 17, 6, 5],
        12: [80, 12, 4, 3],
        3:  [73, 14, 9, 4],
        35: [57, 20, 11, 11],
        33: [69, 17, 8, 5],
        22: [72, 17, 6, 5],
        28: [69, 17, 7, 6],
        13: [74, 16, 4, 6],
        18: [75, 12, 7, 6],
        10: [90, 6 , 2, 1],
        23: [82, 12, 4, 2],
    }
    const data5 = {
        44: [25,42,32],
        21: [20,52,28],
        26: [30,37,32],
        25: [23,48,29],
        12: [26,41,33],
        3:  [21,45,34],
        35: [21,56,23],
        33: [18,57,24],
        22: [15,49,36],
        28: [18,57,25],
        13: [25,51,24],
        18: [27,53,20],
        10: [61,32,7],
        23: [12,76,13],
    }

    // 基于准备好的dom，初始化echarts实例
    var myChart4 = echarts.init(document.getElementById('echart4'));
    var myChart5 = echarts.init(document.getElementById('echart5'));
    const newdata4 = data4[key]
    const newdataQST5 = data5[key]
    option4 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['topic', 'total'],

            top: '-3%',
            // width:'1%',
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: '12',

            },
            itemWidth: 12,
            itemHeight: 12,
            //itemGap: 35
        },
        grid: {
            left: '0%',
            top: '30px',
            width: '250px',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1人食', '2人食', '3人食', '4人食'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.5)",
                    width: 1,

                },
            },

            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '12',

                },
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value} %',
                show: true,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    type: "dotted"
                }
            }
        }],
        series: [{
            name: 'topic',
            type: 'bar',
            data: newdata4,
            barWidth: '18%', //柱子宽度
            itemStyle: {
                normal: {
                    color: '#0033cc',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        },
        {
            name: 'total',
            type: 'bar',
            data: ['75', '14', '6', '4'],
            barWidth: '18%',
            itemStyle: {
                normal: {
                    color: '#B0F2FF',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        },
        ]
    };
    option5 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['topic', 'total'],

            top: '-3%',
            // width:'1%',
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: '12',

            },
            itemWidth: 12,
            itemHeight: 12,
            //itemGap: 35
        },
        grid: {
            left: '0%',
            top: '30px',
            width: '200px',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['外带', '堂食','外送'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,

                },
            },

            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '12',

                },
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value} %',
                show: true,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    type: "dotted"
                }
            }
        }],
        series: [{
            name: 'topic',
            type: 'bar',
            data: newdataQST5,
            barWidth: '18%', //柱子宽度
            // barGap:  1, //柱子之间间距
            itemStyle: {
                normal: {
                    color: '#0066ff',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        },
        {
            name: 'total',
            type: 'bar',
            data:  ['23', '50', '26'],
            barWidth: '18%',
            // barGap:  1, //柱子之间间距
            itemStyle: {
                normal: {
                    color: '#B0F2FF',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        },
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart4.setOption(option4);
    myChart5.setOption(option5);
    window.addEventListener("resize", function () {
        myChart4.resize();
        myChart5.resize();
    });
}



// index2逻辑函数  排行榜关联气泡
function showContent(id) {

    // 获取所有内容元素
    var contentElement1 = document.getElementsByClassName("tagcloud");
    // var contentElement1 = document.getElementsByClassName("tagcloud");
    var contentElement2 = document.getElementsByClassName("shuliang");
    var contentElement3 = document.getElementsByClassName("topic");
    
    const contentElementss = [contentElement1, contentElement2,contentElement3]
    // console.log(contentElement1);
    // console.log(contentElementss[1]);
    // console.log(typeof(contentElements));
    for (var j = 0; j < contentElementss.length; j++) {
        var contentElements = contentElementss[j]
        console.log(contentElements);

        // 隐藏所有内容元素
        for (var i = 0; i < contentElements.length; i++) {
            var contentElement = contentElements[i];

            // console.log(contentElement);
            if (contentElement.id === id) {
                console.log(contentElement.id);
                contentElement.style.display = 'block';
            } else {
                contentElement.style.display = 'none';

            }
        }
        // 显示指定的内容元素

        //     var selectedContent = document.getElementById(Id);

        //     // 隐藏所有内容元素
        //         if (selectedContent) {
        //             selectedContent.style.display = 'block';
        //         }

        echarts_31(id)
        echarts_4(id)
        // console.log('showContent:', id);
    }



}


// 气泡关联hot topic map1
function showtopContent(id) {
    // 获取所有内容元素
    var contentElement1 = document.getElementsByClassName("huatiPM");
    // var contentElement2 = document.getElementsByClassName("topic");
    const contentElementss = [contentElement1]
    // console.log(contentElement1);
    // console.log(contentElementss[1]);
    // console.log(typeof(contentElements));
    for (var j = 0; j < contentElementss.length; j++) {
        var contentElements = contentElementss[j]
        console.log(contentElements);

        // 隐藏所有内容元素
        for (var i = 0; i < contentElements.length; i++) {
            var contentElement = contentElements[i];

            // console.log(contentElement);
            if (contentElement.id === id) {
                console.log(contentElement.id);
                contentElement.style.display = 'block';
            } else {
                contentElement.style.display = 'none';

            }
        }
      
    }
}