window.addEventListener('load', function () {
    // Map(area, options)
    const area = document.querySelector('#map');
    const pos = new google.maps.LatLng(24.985, 121.221);
    const options = {
        // 比例尺；數字越大區域就越大
        zoom: 14,
        // 地圖中心點
        center: pos,
        // 地圖形式
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // mapTypeId: google.maps.MapTypeId.SEATTLE,
        // mapTypeId: google.maps.MapTypeId.TERRAIN,
    };
    // Constructor 建構子 -> 用來初始化一個類的函數 方法
    // Destructor 解構子 -> 用來反初始化一個類的函數
    const map = new google.maps.Map(area, options);
    const marker = new google.maps.Marker({
        // es6 縮寫
        // map,
        map: map,
        position: pos,
        title: 'where is this ?',
        icon: '../images/foot.gif',
    });
    // 從外部改設定
    marker.setTitle('聖德基督學院');
    marker.setIcon('../images/smarrow.gif');

    // console.log(map);
});

// controls
// layers
// services
