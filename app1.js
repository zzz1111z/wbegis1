// 创建地图实例
const map = new AMap.Map('container', {
    zoom: 10,
    center: [116.397428, 39.90923], // 默认中心点: 北京天安门
});

// 初始化测量工具实例
const mouseTool = new AMap.MouseTool(map);
let measureActive = false;

// 开始测量按钮点击事件
document.getElementById('measure_button_start').onclick = function () {
    if (!measureActive) {
        measureActive = true;
        // 开启直线距离测量
        mouseTool.measure('line'); // 'line' 表示线段测量
        alert('测量工具已开启，开始测量直线距离');
        document.getElementById('measure_button_start').disabled = true;  // 禁用开始按钮
        document.getElementById('measure_button_stop').disabled = false;  // 启用停止按钮
    } else {
        alert('测量工具已在运行');
    }
};

// 结束测量按钮点击事件
document.getElementById('measure_button_stop').onclick = function () {
    if (measureActive) {
        mouseTool.close(); // 关闭测量工具
        measureActive = false;
        alert('测量工具已结束');
        document.getElementById('measure_button_start').disabled = false;  // 启用开始按钮
        document.getElementById('measure_button_stop').disabled = true;  // 禁用停止按钮
    } else {
        alert('测量工具未运行');
    }
};

// 监听测量结果，获取并存储测量结果
map.on('draw', function (e) {
    const distance = AMap.GeometryUtil.length(e.obj.getPath()); // 计算线段长度
    document.getElementById('distance_result').textContent = `测量结果：${distance.toFixed(2)} 米`;
});
