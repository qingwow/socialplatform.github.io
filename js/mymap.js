/*大屏*/
var geoCoordMap = {
    '新疆玛纳斯基地': [86.22, 44.30],
    '九江': [116.00, 29.70],
    '新乡': [116.402217, 35.311657],
    ' ': [79.92, 37.12],
    '  ': [86.85, 47.70],
    '若羌县': [88.17, 39.02],
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
};

var BJData = {
    44: [
        [{ name: '北京' }, { name: '北京', value: 94 }],
        [{ name: '重庆' }, { name: '重庆', value: 92 }],
        [{ name: '成都' }, { name: '成都', value: 69 }],
        [{ name: '上海' }, { name: '上海', value: 36 }],
        [{ name: '杭州' }, { name: '杭州', value: 35 }],
        [{ name: '西安' }, { name: '西安', value: 31 }],
        [{ name: '贵阳' }, { name: '贵阳', value: 27 }],
        [{ name: '深圳' }, { name: '深圳', value: 27 }],
        [{ name: '大连' }, { name: '大连', value: 26 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 26 }],
        [{ name: '广州' }, { name: '广州', value: 25 }],
        [{ name: '南京' }, { name: '南京', value: 21 }],
    ],

    21: [
        [{ name: '北京' }, { name: '北京', value: 106 }],
        [{ name: '上海' }, { name: '上海', value: 45 }],
        [{ name: '广州' }, { name: '广州', value: 42 }],
        [{ name: '西安' }, { name: '西安', value: 25 }],
        [{ name: '成都' }, { name: '成都', value: 38 }],
        [{ name: '杭州' }, { name: '杭州', value: 38 }],
        [{ name: '大连' }, { name: '大连', value: 31 }],
        [{ name: '宁波' }, { name: '宁波', value: 31 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 31 }],
        [{ name: '深圳' }, { name: '深圳', value: 30 }],
        [{ name: '合肥' }, { name: '合肥', value: 29 }],
        [{ name: '哈尔滨' }, { name: '哈尔滨', value: 25 }],
    ],
    26: [
        [{ name: '北京' }, { name: '北京', value: 40 }],
        [{ name: '上海' }, { name: '上海', value: 30 }],
        [{ name: '大连' }, { name: '大连', value: 29 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 26 }],
        [{ name: '成都' }, { name: '成都', value: 17 }],
        [{ name: '广州' }, { name: '广州', value: 23 }],
        [{ name: '杭州' }, { name: '杭州', value: 23 }],
        [{ name: '扬州' }, { name: '扬州', value: 20 }],
        [{ name: '宁波' }, { name: '宁波', value: 19 }],
        [{ name: '盐城' }, { name: '盐城', value: 19 }],
        [{ name: '合肥' }, { name: '合肥', value: 18 }],
        [{ name: '南京' }, { name: '南京', value: 18 }],
    ],
    25: [
        [{ name: '北京' }, { name: '北京', value: 35 }],
        [{ name: '上海' }, { name: '上海', value: 31 }],
        [{ name: '广州' }, { name: '广州', value: 26 }],
        [{ name: '杭州' }, { name: '杭州', value: 19 }],
        [{ name: '武汉' }, { name: '武汉', value: 19 }],
        [{ name: '成都' }, { name: '成都', value: 18 }],
        [{ name: '南京' }, { name: '南京', value: 17 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 11 }],
        [{ name: '长沙' }, { name: '长沙', value: 14 }],
        [{ name: '佛山' }, { name: '佛山', value: 13 }],
        [{ name: '宁波' }, { name: '宁波', value: 13 }],
        [{ name: '苏州' }, { name: '苏州', value: 12 }],
    ],
    12: [
        [{ name: '北京' }, { name: '北京', value: 27 }],
        [{ name: '广州' }, { name: '广州', value: 20 }],
        [{ name: '上海' }, { name: '上海', value: 19 }],
        [{ name: '宁波' }, { name: '宁波', value: 17 }],
        [{ name: '杭州' }, { name: '杭州', value: 15 }],
        [{ name: '苏州' }, { name: '苏州', value: 15 }],
        [{ name: '重庆' }, { name: '重庆', value: 14 }],
        [{ name: '成都' }, { name: '成都', value: 13 }],
        [{ name: '南京' }, { name: '南京', value: 13 }],
        [{ name: '大连' }, { name: '大连', value: 11 }],
        [{ name: '合肥' }, { name: '合肥', value: 11 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 10 }],
    ],
    3:  [
        [{ name: '北京' }, { name: '北京', value: 24 }],
        [{ name: '重庆' }, { name: '重庆', value: 21 }],
        [{ name: '杭州' }, { name: '杭州', value: 19 }],
        [{ name: '成都' }, { name: '成都', value: 16 }],
        [{ name: '西安' }, { name: '西安', value: 12 }],
        [{ name: '广州' }, { name: '广州', value: 11 }],
        [{ name: '嘉兴' }, { name: '嘉兴', value: 11 }],
        [{ name: '东莞' }, { name: '东莞', value: 10 }],
        [{ name: '济南' }, { name: '济南', value: 10 }],
        [{ name: '上海' }, { name: '上海', value: 10 }],
        [{ name: '温州' }, { name: '温州', value: 10 }],
        [{ name: '南京' }, { name: '南京', value: 9 }],
    ],
    35: [
        [{ name: '北京' }, { name: '北京', value: 27 }],
        [{ name: '广州' }, { name: '广州', value: 16 }],
        [{ name: '深圳' }, { name: '深圳', value: 16 }],
        [{ name: '成都' }, { name: '成都', value: 15 }],
        [{ name: '东莞' }, { name: '东莞', value: 12 }],
        [{ name: '杭州' }, { name: '杭州', value: 12 }],
        [{ name: '合肥' }, { name: '合肥', value: 11 }],
        [{ name: '南京' }, { name: '南京', value: 11 }],
        [{ name: '苏州' }, { name: '苏州', value: 11 }],
        [{ name: '西安' }, { name: '西安', value: 11 }],
        [{ name: '长沙' }, { name: '长沙', value: 11 }],
        [{ name: '南宁' }, { name: '南宁', value: 10 }],
    ],
    33: [
        [{ name: '北京' }, { name: '北京', value: 61 }],
        [{ name: '广州' }, { name: '广州', value: 16 }],
        [{ name: '宁波' }, { name: '宁波', value: 16 }],
        [{ name: '上海' }, { name: '上海', value: 16 }],
        [{ name: '南京' }, { name: '南京', value: 14 }],
        [{ name: '深圳' }, { name: '深圳', value: 12 }],
        [{ name: '哈尔滨' }, { name: '哈尔滨', value: 10 }],
        [{ name: '成都' }, { name: '成都', value: 9 }],
        [{ name: '重庆' }, { name: '重庆', value: 9 }],
        [{ name: '大连' }, { name: '大连', value: 8 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 8 }],
        [{ name: '太原' }, { name: '太原', value: 8 }],
    ],
    22: [
        [{ name: '北京' }, { name: '北京', value: 26 }],
        [{ name: '常德' }, { name: '常德', value: 1 }],
        [{ name: '常州' }, { name: '常州', value: 2 }],
        [{ name: '成都' }, { name: '成都', value: 3 }],
        [{ name: '大连' }, { name: '大连', value: 1 }],
        [{ name: '东莞' }, { name: '东莞', value: 7 }],
        [{ name: '佛山' }, { name: '佛山', value: 6 }],
        [{ name: '福州' }, { name: '福州', value: 2 }],
        [{ name: '抚州' }, { name: '抚州', value: 1 }],
        [{ name: '阜阳' }, { name: '阜阳', value: 1 }],
        [{ name: '广州' }, { name: '广州', value: 8 }],
        [{ name: '贵阳' }, { name: '贵阳', value: 3 }],
    ],
    28: [
        [{ name: '北京' }, { name: '北京', value: 21 }],
        [{ name: '深圳' }, { name: '深圳', value: 12 }],
        [{ name: '成都' }, { name: '成都', value: 9 }],
        [{ name: '广州' }, { name: '广州', value: 8 }],
        [{ name: '南京' }, { name: '南京', value: 5 }],
        [{ name: '宁波' }, { name: '宁波', value: 5 }],
        [{ name: '苏州' }, { name: '苏州', value: 5 }],
        [{ name: '东莞' }, { name: '东莞', value: 4 }],
        [{ name: '哈尔滨' }, { name: '哈尔滨', value: 4 }],
        [{ name: '杭州' }, { name: '杭州', value: 4 }],
        [{ name: '南宁' }, { name: '南宁', value: 4 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 4 }],
    ],
    13: [
        [{ name: '北京' }, { name: '北京', value: 12 }],
        [{ name: '杭州' }, { name: '杭州', value: 12 }],
        [{ name: '上海' }, { name: '上海', value: 7 }],
        [{ name: '重庆' }, { name: '重庆', value: 7 }],
        [{ name: '成都' }, { name: '成都', value: 5 }],
        [{ name: '东莞' }, { name: '东莞', value: 5 }],
        [{ name: '广州' }, { name: '广州', value: 5 }],
        [{ name: '合肥' }, { name: '合肥', value: 5 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 5 }],
        [{ name: '太原' }, { name: '太原', value: 5 }],
        [{ name: '佛山' }, { name: '佛山', value: 4 }],
        [{ name: '济南' }, { name: '济南', value: 4 }],
    ],
    18: [
        [{ name: '北京' }, { name: '北京', value: 11 }],
        [{ name: '广州' }, { name: '广州', value: 9 }],
        [{ name: '深圳' }, { name: '深圳', value: 9 }],
        [{ name: '成都' }, { name: '成都', value: 7 }],
        [{ name: '杭州' }, { name: '杭州', value: 6 }],
        [{ name: '南京' }, { name: '南京', value: 6 }],
        [{ name: '太原' }, { name: '太原', value: 6 }],
        [{ name: '东莞' }, { name: '东莞', value: 5 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 5 }],
        [{ name: '天津' }, { name: '天津', value: 5 }],
        [{ name: '大连' }, { name: '大连', value: 4 }],
        [{ name: '上海' }, { name: '上海', value: 4 }],
    ],
    10: [
        [{ name: '呼伦贝尔' }, { name: '呼伦贝尔', value: 16 }],
        [{ name: '郑州' }, { name: '郑州', value: 15 }],
        [{ name: '西安' }, { name: '西安', value: 7 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 5 }],
        [{ name: '鞍山' }, { name: '鞍山', value: 3 }],
        [{ name: '北京' }, { name: '北京', value: 3 }],
        [{ name: '杭州' }, { name: '杭州', value: 3 }],
        [{ name: '东莞' }, { name: '东莞', value: 2 }],
        [{ name: '南京' }, { name: '南京', value: 2 }],
        [{ name: '上海' }, { name: '上海', value: 2 }],
        [{ name: '成都' }, { name: '成都', value: 1 }],
        [{ name: '大连' }, { name: '大连', value: 1 }],
    ],
    23: [
        [{ name: '北京' }, { name: '北京', value: 9 }],
        [{ name: '成都' }, { name: '成都', value: 7 }],
        [{ name: '上海' }, { name: '上海', value: 7 }],
        [{ name: '广州' }, { name: '广州', value: 5 }],
        [{ name: '杭州' }, { name: '杭州', value: 5 }],
        [{ name: '合肥' }, { name: '合肥', value: 5 }],
        [{ name: '南京' }, { name: '南京', value: 5 }],
        [{ name: '天津' }, { name: '天津', value: 5 }],
        [{ name: '重庆' }, { name: '重庆', value: 5 }],
        [{ name: '大连' }, { name: '大连', value: 4 }],
        [{ name: '沈阳' }, { name: '沈阳', value: 4 }],
        [{ name: '苏州' }, { name: '苏州', value: 4 }],
    ],
};


var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = BJData[dataItem[0].name];
        var toCoord = BJData[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};

var color = ['#3ed4ff', '#ffa022', '#a6c84c'];

function showmap(key){
    var series = [];
    var myecharts = echarts.init($('.map .geo')[0]);
    [
        ['', BJData[key]],
        // ['九江', SHData],
        // ['新疆', GZData]
    ].forEach(function (item, i) {
        series.push(
        {
            name: item[0] ,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    fontSize: 16
                },
            },
            symbolSize: function (val) {
                return val[2] / 3;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        }
        );
    });
    
    option = {
        
        
        backgroundColor: '#080a20',
        title: {
            left: 'left',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
          
            formatter:(pam)=>{
                return `<h4> &nbsp&nbsp${pam.data.name} &nbsp&nbsp</h4><br />
                <h4> &nbsp&nbsp ${pam.data.value[2]} &nbsp&nbsp</h4>
                `;
            },
            pam:BJData[key],
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['北京 ', '上海 ', '广州 '],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#142957',
                    borderColor: '#0692a4'
                },
                emphasis: {
                    areaColor: '#0b1c2d'
                }
            }
        },
        series: series,
       
    };
    
    myecharts.setOption(option)

}

