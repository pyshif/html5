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

    // draw rectangle
    context.fillStyle = 'yellow';
    context.fillRect(100, 100, 500, 400);

    // fill gradient color
    // create gradient (start point, end point) 決定漸層方向
    // gradient (0: start point, 1: end point) 設定起始點開始漸層區塊
    const gradient = context.createLinearGradient(100, 100, 600, 500);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    gradient.addColorStop(0.5, 'yellow');

    context.fillStyle = gradient;
    context.fillRect(100, 100, 500, 400);
}
window.addEventListener('load', doFirst);
