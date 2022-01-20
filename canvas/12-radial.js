function doFirst() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // 水平線
    // context.moveTo(0, 50);
    // context.lineTo(1000, 50);

    // context.moveTo(0, 100);
    // context.lineTo(1000, 100);

    for (let i = 0; i < 100; i++) {
        // 水平線
        const interval = i * 50;
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);

        // 水平文字
        context.fillText(interval, 0, interval);

        // 垂直文字
        context.fillText(interval, interval, 10);
    }

    context.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    context.stroke();

    // 1/4 線開始 (視覺座標軸)
    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);

    context.strokeStyle = 'rgba(0,0,0,0.7)';
    context.stroke();

    context.font = '20px sans-serif';

    // fill gradient color
    // create gradient (start circle, end circle) 決定內圓往外圓擴散的方向
    // gradient (0: start point, 1: end point) 設定起始點開始漸層區塊
    // !!! 注意 !!! 內圓一定要在外圓裡面
    const gradient = context.createRadialGradient(300, 250, 80, 250, 250, 150);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    // gradient.addColorStop(0.5, 'yellow');

    context.fillStyle = gradient;
    context.fillRect(50, 50, 500, 400);

    // 右下角
    // 將原點移動到 800 650

    const radius = 150;
    // 內圓一定在外圓裡面
    const gradientCircle = context.createRadialGradient(
        0,
        0,
        radius * 0.95,
        0,
        0,
        radius * 1.05
    );
    gradientCircle.addColorStop(0, '#666');
    gradientCircle.addColorStop(0.5, '#fff');
    gradientCircle.addColorStop(1, '#666');

    context.translate(800, 650);
    context.lineWidth = 20;
    context.beginPath();
    context.arc(0, 0, 120, 0, 2 * Math.PI);
    context.stroke();

    // context.fillStyle = gradientCircle;
    // context.fillRect();
}
window.addEventListener('load', doFirst);
