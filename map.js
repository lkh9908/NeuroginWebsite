var map = new AMap.Map('map');
map.setZoom(50);              //setzoom 指定缩放级别
map.setCenter([104.067102,30.574947]);  //指定地图中心

marker = new AMap.Marker({
    position: [104.067102,30.574947],  //标记的地图坐标 
    map: map
});

AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.MapType'], function() {
    toolBar = new AMap.ToolBar();  //工具条
    scale = new AMap.Scale();    //比例尺
    mapType = new AMap.MapType();   //地图种类
    map.addControl(toolBar);
    map.addControl(scale);
    map.addControl(mapType);
    })