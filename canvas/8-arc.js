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

    // 1/4 線開始
    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);

    context.strokeStyle = 'rgba(0,0,0,0.7)';
    context.stroke();

    // 左上
    context.beginPath();
    // 將原點 (0, 0) 移動至 (250, 200)
    context.translate(250, 200);

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    // false : 順時針(預設值)
    // context.arc(250, 200, 150, 0, Math.PI, false);
    context.arc(0, 0, 150, 0, Math.PI, false);
    context.stroke();
    // 回復原點位移
    context.translate(-250, -200);

    // 右上
    context.beginPath();
    context.translate(750, 200);

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    // true : 逆時針
    context.arc(0, 0, 150, 0, Math.PI, true);
    context.stroke();

    context.translate(-750, -200);

    // 左下
    context.translate(250, 600);
    context.beginPath();
    context.arc(0, 0, 150, 0, 2 * Math.PI);
    context.stroke();
    context.translate(-250, -600);

    // 右下
    context.translate(750, 600);
    context.beginPath();
    context.arc(0, 0, 150, 0.3 * Math.PI, 1.7 * Math.PI);
    context.stroke();
    context.translate(-750, -600);
}
window.addEventListener('load', doFirst);
