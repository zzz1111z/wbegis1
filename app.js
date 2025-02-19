
// 常住人口数据 (2010-2020)
const populationData = {
  "广东省": { 2020: 12624, 2019: 12489, 2018: 12348, 2017: 12141, 2016: 11908, 2015: 11678, 2014: 11489, 2013: 11270, 2012: 11041, 2011: 10756, 2010: 10441 },
  "北京市": { 2020: 2189, 2019: 2190, 2018: 2192, 2017: 2194, 2016: 2195, 2015: 2188, 2014: 2171, 2013: 2125, 2012: 2078, 2011: 2024, 2010: 1962 },
  "上海市": { 2020: 2488, 2019: 2481, 2018: 2475, 2017: 2466, 2016: 2467, 2015: 2458, 2014: 2467, 2013: 2448, 2012: 2399, 2011: 2356, 2010: 2303 },
  "江苏省": { 2020: 8477, 2019: 8469, 2018: 8446, 2017: 8423, 2016: 8381, 2015: 8315, 2014: 8281, 2013: 8192, 2012: 8120, 2011: 8023, 2010: 7869 },
  "浙江省": { 2020: 6468, 2019: 6375, 2018: 6273, 2017: 6170, 2016: 6072, 2015: 5985, 2014: 5890, 2013: 5784, 2012: 5685, 2011: 5570, 2010: 5447 },
  "天津市": { 2020: 1387, 2019: 1385, 2018: 1383, 2017: 1410, 2016: 1443, 2015: 1439, 2014: 1429, 2013: 1410, 2012: 1378, 2011: 1341, 2010: 1299 },
  "河北省": { 2020: 7464, 2019: 7447, 2018: 7426, 2017: 7409, 2016: 7375, 2015: 7345, 2014: 7323, 2013: 7288, 2012: 7262, 2011: 7232, 2010: 7194 },
  "山西省": { 2020: 3490, 2019: 3497, 2018: 3502, 2017: 3510, 2016: 3514, 2015: 3519, 2014: 3528, 2013: 3535, 2012: 3548, 2011: 3562, 2010: 3574 },
  "内蒙古自治区": { 2020: 2403, 2019: 2415, 2018: 2422, 2017: 2433, 2016: 2436, 2015: 2440, 2014: 2449, 2013: 2455, 2012: 2464, 2011: 2470, 2010: 2472 },
  "辽宁省": { 2020: 4255, 2019: 4277, 2018: 4291, 2017: 4312, 2016: 4327, 2015: 4338, 2014: 4358, 2013: 4365, 2012: 4375, 2011: 4379, 2010: 4375 },
  "吉林省": { 2020: 2399, 2019: 2448, 2018: 2484, 2017: 2526, 2016: 2567, 2015: 2613, 2014: 2642, 2013: 2668, 2012: 2698, 2011: 2725, 2010: 2747 },
  "黑龙江省": { 2020: 3171, 2019: 3255, 2018: 3327, 2017: 3399, 2016: 3463, 2015: 3529, 2014: 3608, 2013: 3666, 2012: 3724, 2011: 3782, 2010: 3833 },
  "安徽省": { 2020: 6105, 2019: 6092, 2018: 6076, 2017: 6057, 2016: 6033, 2015: 6011, 2014: 5997, 2013: 5988, 2012: 5978, 2011: 5972, 2010: 5957 },
  "福建省": { 2020: 4161, 2019: 4137, 2018: 4104, 2017: 4065, 2016: 4016, 2015: 3984, 2014: 3945, 2013: 3885, 2012: 3841, 2011: 3784, 2010: 3693 },
  "江西省": { 2020: 4519, 2019: 4516, 2018: 4513, 2017: 4511, 2016: 4496, 2015: 4485, 2014: 4480, 2013: 4476, 2012: 4475, 2011: 4474, 2010: 4462 },
  "山东省": { 2020: 10165, 2019: 10106, 2018: 10077, 2017: 10033, 2016: 9973, 2015: 9866, 2014: 9808, 2013: 9746, 2012: 9708, 2011: 9665, 2010: 9588 },
  "河南省": { 2020: 9941, 2019: 9901, 2018: 9864, 2017: 9829, 2016: 9778, 2015: 9701, 2014: 9645, 2013: 9573, 2012: 9532, 2011: 9461, 2010: 9405 },
  "湖北省": { 2020: 5745, 2019: 5927, 2018: 5917, 2017: 5904, 2016: 5885, 2015: 5850, 2014: 5816, 2013: 5798, 2012: 5781, 2011: 5760, 2010: 5728 },
  "湖南省": { 2020: 6645, 2019: 6640, 2018: 6635, 2017: 6633, 2016: 6625, 2015: 6615, 2014: 6611, 2013: 6600, 2012: 6590, 2011: 6581, 2010: 6570 },
  "广西壮族自治区": { 2020: 5019, 2019: 4982, 2018: 4947, 2017: 4907, 2016: 4857, 2015: 4811, 2014: 4770, 2013: 4731, 2012: 4694, 2011: 4655, 2010: 4610 },
  "海南省": { 2020: 1012, 2019: 995, 2018: 982, 2017: 972, 2016: 957, 2015: 945, 2014: 936, 2013: 920, 2012: 910, 2011: 890, 2010: 869 },
  "重庆市": { 2020: 3209, 2019: 3188, 2018: 3163, 2017: 3144, 2016: 3110, 2015: 3070, 2014: 3043, 2013: 3011, 2012: 2975, 2011: 2944, 2010: 2885 },
  "四川省": { 2020: 8371, 2019: 8351, 2018: 8321, 2017: 8289, 2016: 8251, 2015: 8196, 2014: 8139, 2013: 8109, 2012: 8085, 2011: 8064, 2010: 8045 },
  "贵州省": { 2020: 3858, 2019: 3848, 2018: 3822, 2017: 3803, 2016: 3758, 2015: 3708, 2014: 3677, 2013: 3632, 2012: 3587, 2011: 3530, 2010: 3479 },
  "云南省": { 2020: 4722, 2019: 4714, 2018: 4703, 2017: 4693, 2016: 4677, 2015: 4663, 2014: 4653, 2013: 4641, 2012: 4631, 2011: 4620, 2010: 4602 },
  "西藏自治区": { 2020: 366, 2019: 361, 2018: 354, 2017: 349, 2016: 340, 2015: 330, 2014: 325, 2013: 317, 2012: 315, 2011: 309, 2010: 300 },
  "陕西省": { 2020: 3955, 2019: 3944, 2018: 3931, 2017: 3904, 2016: 3874, 2015: 3846, 2014: 3827, 2013: 3804, 2012: 3787, 2011: 3765, 2010: 3735 },
  "甘肃省": { 2020: 2501, 2019: 2509, 2018: 2515, 2017: 2522, 2016: 2520, 2015: 2523, 2014: 2531, 2013: 2537, 2012: 2550, 2011: 2552, 2010: 2560 },
  "青海省": { 2020: 593, 2019: 590, 2018: 587, 2017: 586, 2016: 582, 2015: 577, 2014: 576, 2013: 571, 2012: 571, 2011: 568, 2010: 563 },
  "宁夏回族自治区": { 2020: 721, 2019: 717, 2018: 710, 2017: 705, 2016: 695, 2015: 684, 2014: 678, 2013: 666, 2012: 659, 2011: 648, 2010: 633 },
  "新疆维吾尔自治区": { 2020: 2590, 2019: 2559, 2018: 2520, 2017: 2480, 2016: 2428, 2015: 2385, 2014: 2325, 2013: 2285, 2012: 2253, 2011: 2225, 2010: 2185 }
};

// 人均GDP数据 (2020-2021)
const gdpData = {
  "广东省": { 2020: 8.79, 2021: 9.87 },
  "北京市": { 2020: 16.42, 2021: 18.39 },
  "上海市": { 2020: 15.67, 2021: 17.38 },
  "江苏省": { 2020: 12.12, 2021: 13.73 },
  "浙江省": { 2020: 10.01, 2021: 11.39 },
  "天津市": { 2020: 10.1, 2021: 11.32 },
  "河北省": { 2020: 4.85, 2021: 5.41 },
  "山西省": { 2020: 5.11, 2021: 6.47 },
  "内蒙古自治区": { 2020: 7.22, 2021: 8.53 },
  "辽宁省": { 2020: 5.90, 2021: 6.48 },
  "吉林省": { 2020: 5.09, 2021: 5.5 },
  "黑龙江省": { 2020: 4.28, 2021: 4.67 },
  "安徽省": { 2020: 6.34, 2021: 7.04 },
  "福建省": { 2020: 10.5, 2021: 11.75 },
  "江西省": { 2020: 5.69, 2021: 6.55 },
  "山东省": { 2020: 7.20, 2021: 8.18 },
  "河南省": { 2020: 5.46, 2021: 5.93 },
  "湖北省": { 2020: 7.52, 2021: 8.66 },
  "湖南省": { 2020: 6.25, 2021: 6.93 },
  "广西壮族自治区": { 2020: 4.41, 2021: 4.94 },
  "海南省": { 2020: 5.52, 2021: 6.42 },
  "重庆市": { 2020: 7.81, 2021: 8.7 },
  "四川省": { 2020: 5.81, 2021: 6.44 },
  "贵州省": { 2020: 4.62, 2021: 5.08 },
  "云南省": { 2020: 5.19, 2021: 5.75 },
  "西藏自治区": { 2020: 5.22, 2021: 5.5 },
  "陕西省": { 2020: 6.62, 2021: 7.54 },
  "甘肃省": { 2020: 3.59, 2021: 4.09 },
  "青海省": { 2020: 5.08, 2021: 5.65 },
  "宁夏回族自治区": { 2020: 5.49, 2021: 5.28 },
  "新疆维吾尔自治区": { 2020: 5.34, 2021: 6.19 }
};

// 省份位置（用于定位到地图）
const provinceCoordinates = {
  "广东省": [113.2644, 23.1291],
  "北京市": [116.4074, 39.9042],
  "上海市": [121.4737, 31.2304],
  "江苏省": [118.8062, 32.0625],
  "浙江省": [120.1536, 30.2670],
  "天津市": [117.1902, 39.1256],
  "河北省": [114.5025, 38.0455],
  "山西省": [112.5356, 37.8698],
  "内蒙古自治区": [111.6708, 40.8183],
  "辽宁省": [123.4291, 41.7968],
  "吉林省": [125.3245, 43.8176],
  "黑龙江省": [126.6424, 45.7562],
  "安徽省": [117.2830, 31.8611],
  "福建省": [119.2965, 26.1007],
  "江西省": [115.8927, 28.6767],
  "山东省": [117.0009, 36.6758],
  "河南省": [113.6654, 34.7579],
  "湖北省": [114.2986, 30.5848],
  "湖南省": [112.9820, 28.1941],
  "广西壮族自治区": [108.3200, 22.8240],
  "海南省": [110.3312, 20.0315],
  "重庆市": [106.5516, 29.5630],
  "四川省": [104.0665, 30.6591],
  "贵州省": [106.7135, 26.5783],
  "云南省": [102.7123, 25.0408],
  "西藏自治区": [91.1175, 29.6507],
  "陕西省": [108.9542, 34.2655],
  "甘肃省": [103.8343, 36.0596],
  "青海省": [101.7789, 36.6233],
  "宁夏回族自治区": [106.2782, 38.4663],
  "新疆维吾尔自治区": [87.6177, 43.7928]
};
  
  // 初始化高德地图
  const map = new AMap.Map('map', {
    center: [104.1954, 35.8617], // 中国中心
    zoom: 4
  });

// 添加指北针控件
AMap.plugin('AMap.ControlBar', function() {
  const controlBar = new AMap.ControlBar({
      position: {
          top: '10px',  // 放置在顶部
          left: '10px'  // 放置在左侧
      }
  });
  map.addControl(controlBar);
});

// 添加地图类型控制插件（卫星图和普通图层切换）
AMap.plugin('AMap.MapType', function() {
  const mapType = new AMap.MapType({
      defaultType: AMap.MapType.NORMAL_MODE  // 默认地图模式
  });
  map.addControl(mapType);  // 添加到地图

  // 调整地图类型控制插件的位置，放置到右上角
  mapType.setPosition({
      top: '10px',  // 放置在顶部
      right: '10px'  // 放置在右侧
  });
});


  
  // 处理省份下拉框选择变化
  function onProvinceSelectChange() {
    const provinceName = document.getElementById('provinceSelect').value;
    onProvinceClick(provinceName);
  }
  
  // 点击省份时的处理函数
  function onProvinceClick(provinceName) {
    if (!provinceName) return;
    // 更新地图显示位置
    map.setCenter(provinceCoordinates[provinceName]);
    map.setZoom(6);
    
  
    // 展示该省的数据
    displayData(provinceName);
  }
  
  // 显示省份数据
function displayData(provinceName) {
  const population = populationData[provinceName];
  const gdp = gdpData[provinceName];

  if (!population || !gdp) {
    alert("没有找到该省份的数据！");
    return;
  }

  // 更新表格
  const table = document.getElementById('dataTable');
  table.innerHTML = '';
  const headerRow = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.textContent = '省份';
  const th2 = document.createElement('th');
  th2.textContent = '人口(百万) - 2010-2020';
  headerRow.appendChild(th1);
  headerRow.appendChild(th2);
  table.appendChild(headerRow);

  const dataRow = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.textContent = provinceName;
  const td2 = document.createElement('td');
  td2.textContent = `2010: ${population[2010]}, 2011: ${population[2011]}, 2012: ${population[2012]}, 2013: ${population[2013]}, 2014: ${population[2014]}, 2015: ${population[2015]}, 2016: ${population[2016]}, 2017: ${population[2017]}, 2018: ${population[2018]}, 2019: ${population[2019]}, 2020: ${population[2020]}`;
  dataRow.appendChild(td1);
  dataRow.appendChild(td2);
  table.appendChild(dataRow);

  // 生成柱状图
  generateChart([provinceName], Object.values(population).slice(0, 11), Object.values(gdp));

  // 显示侧边栏表格
  document.getElementById('sidebar').classList.add('show');
}  




  
  // 生成柱状图
  function generateChart(provinces, populationData, gdpData) {
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: '人口(百万)',
            data: populationData,
            backgroundColor: '#36A2EB',
            borderColor: '#36A2EB',
            borderWidth: 1
          },
          {
            label: '人均GDP(万元)',
            data: gdpData,
            backgroundColor: '#FF6384',
            borderColor: '#FF6384',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  // 关闭侧边栏
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('show');
}
  