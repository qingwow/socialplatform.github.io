$(window).load(function () { $(".loading").fadeOut() })
$(function () {
    $("#defaultTag0").click();
    // showtopContent('44');

    echarts_1("44")
})

function echarts_1(key) {
    const data = {
        44: [
            { value: 847, name: '正面%' },
            { value: 153, name: '负面%' },
        ],
        21: [
            { value: 343, name: '正面%' },
            { value: 420, name: '负面%' },
        ],
        26: [
            { value: 909, name: '正面%' },
            { value: 163, name: '负面%' },
        ],
        25: [
            { value: 443, name: '正面%' },
            { value: 71, name: '负面%' },
        ],
        12: [
            { value: 252, name: '正面%' },
            { value: 137, name: '负面%' },
        ],
        3: [
            { value: 200, name: '正面%' },
            { value: 194, name: '负面%' },
        ],
        35: [
            { value: 423, name: '正面%' },
            { value: 54, name: '负面%' },
        ],
        33: [
            { value: 368, name: '正面%' },
            { value: 75, name: '负面%' },
        ],
        22: [
            { value: 191, name: '正面%' },
            { value: 172, name: '负面%' },
        ],
        28: [
            { value: 202, name: '正面%' },
            { value: 82, name: '负面%' },
        ],
        13: [
            { value: 198, name: '正面%' },
            { value: 96, name: '负面%' },
        ],
        18: [
            { value: 176, name: '正面%' },
            { value: 94, name: '负面%' },
        ],
        10: [
            { value: 344, name: '正面%' },
            { value: 16, name: '负面%' },
        ],
        23: [
            { value: 152, name: '正面%' },
            { value: 52, name: '负面%' },
        ],  
    }


    const dataQST = {
        44: [62,
            70,
            49,
            39,
            42,
            47,
            51,
            75,
            70,
            62,
            74,
            63,
            49,
            108,
            87,
            132,
            207,
            83,
            77,
            79,
            121,
            137,
            97,
            90,
            88,
            78,
            86,
            76,
            79,
            79,
            65,

        ],
        21: [
            58,
            86,
            54,
            53,
            35,
            50,
            49,
            36,
            59,
            55,
            64,
            53,
            37,
            123,
            81,
            96,
            202,
            79,
            68,
            70,
            128,
            151,
            141,
            70,
            99,
            84,
            87,
            79,
            101,
            88,
            64,
        ],
        26: [
            38,
            67,
            27,
            33,
            29,
            34,
            30,
            19,
            71,
            33,
            22,
            22,
            32,
            59,
            26,
            68,
            90,
            38,
            43,
            31,
            116,
            168,
            117,
            97,
            112,
            94,
            100,
            70,
            112,
            96,
            78,

        ],
        25: [
            217,
            125,
            64,
            63,
            58,
            47,
            35,
            26,
            26,
            26,
            28,
            17,
            23,
            22,
            29,
            33,
            25,
            16,
            22,
            25,
            33,
            45,
            15,
            15,
            23,
            20,
            35,
            24,
            13,
            18,
            19,
        ],
        12: [
            35,
            32,
            20,
            27,
            29,
            18,
            15,
            28,
            42,
            28,
            24,
            25,
            22,
            21,
            32,
            33,
            47,
            41,
            33,
            22,
            55,
            106,
            50,
            38,
            38,
            57,
            48,
            38,
            29,
            53,
            42,
        ],
        3: [
            31,
            16,
            27,
            13,
            18,
            26,
            14,
            14,
            32,
            10,
            29,
            24,
            17,
            22,
            17,
            40,
            50,
            31,
            18,
            23,
            68,
            50,
            37,
            43,
            44,
            36,
            41,
            44,
            35,
            36,
            30,
        ],
        35: [
            24,
            23,
            12,
            28,
            16,
            12,
            13,
            10,
            25,
            16,
            17,
            13,
            18,
            16,
            15,
            23,
            32,
            22,
            21,
            26,
            35,
            143,
            44,
            54,
            41,
            50,
            29,
            30,
            38,
            34,
            36,
        ],
        33: [
            20,
            27,
            25,
            14,
            20,
            13,
            21,
            20,
            20,
            19,
            25,
            16,
            24,
            31,
            17,
            34,
            42,
            17,
            18,
            28,
            55,
            56,
            55,
            47,
            38,
            30,
            32,
            33,
            35,
            29,
            34,
        ],
        22: [
            23,
            28,
            21,
            25,
            13,
            13,
            18,
            28,
            13,
            16,
            20,
            10,
            24,
            26,
            24,
            28,
            23,
            27,
            14,
            15,
            28,
            21,
            19,
            26,
            23,
            17,
            12,
            23,
            19,
            21,
            18,
        ],
        28: [
            13,
            16,
            16,
            14,
            12,
            3,
            11,
            8,
            13,
            15,
            9,
            11,
            8,
            19,
            9,
            25,
            16,
            13,
            17,
            9,
            18,
            23,
            22,
            18,
            21,
            17,
            16,
            15,
            21,
            18,
            15,
        ],
        13: [
            23,
            33,
            19,
            18,
            13,
            7,
            8,
            5,
            23,
            7,
            6,
            10,
            8,
            7,
            4,
            23,
            19,
            8,
            14,
            7,
            17,
            20,
            20,
            19,
            25,
            23,
            10,
            10,
            10,
            15,
            21,
        ],
        18: [
            11,
            15,
            10,
            14,
            7,
            12,
            14,
            15,
            15,
            9,
            5,
            9,
            11,
            20,
            24,
            13,
            26,
            25,
            7,
            11,
            23,
            18,
            21,
            10,
            18,
            17,
            9,
            15,
            14,
            13,
            18,
        ],
        10: [
            18,
            17,
            10,
            17,
            9,
            3,
            13,
            6,
            14,
            6,
            12,
            13,
            10,
            14,
            19,
            15,
            17,
            13,
            8,
            11,
            12,
            17,
            11,
            19,
            14,
            9,
            5,
            15,
            11,
            11,
            17,
        ],
        23: [
            14,
            16,
            14,
            10,
            13,
            10,
            8,
            10,
            9,
            7,
            11,
            9,
            10,
            21,
            12,
            21,
            31,
            10,
            11,
            9,
            19,
            9,
            8,
            9,
            9,
            9,
            6,
            8,
            9,
            3,
            9,
        ],
    }
    var myChart = echarts.init(document.getElementById('fb01'));

    var myChart7 = echarts.init(document.getElementById('sysx'));
    const newdata = data[key]
    const newdataTotal =newdata.reduce((sum,item) => sum+item.value,0);
    const newdataQST = dataQST[key]

    let formattedData;
    if (newdataTotal>=1000) {
        formattedData = newdataTotal.toString();
    } else {
        formattedData = ' ' + newdataTotal.toString();
    }

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            orient: 'vertical',
            top: '37%',
            right: 0,
            itemWidth: 15,
            itemHeight: 15,
            // data:['20-29岁','30-39岁','40-49岁','50岁以上'],
            data: ['正面%', '负面%'],
            textStyle: {
                color: 'rgba(255,255,255,.9)',
                fontSize: '17',

            }
        },
        series: [
            {
                name: '正负面语句比例',
                type: 'pie',
                center: ['35%', '50%'],
                radius: ['40%', '50%'],
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                label: { show: true,fontSize:16},
            
                labelLine: { show: true },
                data: newdata
            }
        ],
     
    };
    option1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            orient: 'vertical',
            top: '25%',
            right: '8%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['博士', '硕士', '本科', '专科'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
            }
        },
        series: [
            {
                name: '学历构成',
                type: 'pie',
                center: ['40%', '50%'],
                radius: ['40%', '50%'],
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                label: { show: false },
                labelLine: { show: false },
                data: [
                    { value: 10, name: '博士' },
                    { value: 20, name: '硕士' },
                    { value: 30, name: '本科' },
                    { value: 40, name: '专科' },

                ]
            }
        ]
    };



    option7 = {
        //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '0',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
            // data: ['2023/8/1', '2023/8/2', '2023/8/3', '2023/8/4', '2023/8/5', '2023/8/6'],
            // data:data.slice(0, 5),
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.5)",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 5,
                textStyle: {
                    color: "rgba(255,255,255)",
                    fontSize: '12',
                },
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                //formatter: '{value} %'
                show: true,
                textStyle: {
                    color: "rgba(255,255,255)",
                    fontSize: '10',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.5)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255)",
                }
            }
        }],
        series: [{
            name: '2023年8月',
            type: 'line',
            data: newdataQST,
            //smooth: true,


            itemStyle: {
                normal: {
                    color: '#2f89cf',
                    opacity: 1,

                    barBorderRadius: 5,
                }
            }
        }
        ]
    };

    myChart.setOption(option);
    myChart7.setOption(option7);
    window.addEventListener("resize", function () {
        myChart.resize();
        myChart7.resize();


    });
}


function showContent(id) {
    // 获取所有内容元素
    var contentElement1 = document.getElementsByClassName("XS");
    var contentElement2 = document.getElementsByClassName("topic");
    const contentElementss = [contentElement1, contentElement2]
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

        echarts_1(id)
        // console.log('showContent:', id);
    }



}