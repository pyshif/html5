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

    // 左上
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.fillText('arcTo', 100, 100);
    context.moveTo(150, 250);
    // x1, y1, x2, y2, r
    // context.arcTo(300, 100, 400, 300, 120);
    context.arcTo(300, 100, 400, 300, 250);
    context.stroke();

    // 輔助線
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'blue';
    context.moveTo(150, 250);
    context.lineTo(300, 100);
    context.lineTo(400, 300);
    context.stroke();

    // 右上 (貝茲二次曲線)
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.fillText('quadraticCurveTo', 600, 100);
    context.moveTo(650, 250);
    context.quadraticCurveTo(650, 650, 900, 300);
    context.stroke();
    // 輔助線
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'blue';
    context.moveTo(650, 250);
    context.lineTo(800, 100);
    context.lineTo(900, 300);
    context.stroke();

    // 左下 (貝茲曲線)
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.fillText('bezierCurveTo', 100, 450);
    context.moveTo(150, 650);
    context.bezierCurveTo(250, 500, 350, 475, 400, 700);
    context.stroke();

    // 輔助線
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'blue';
    context.moveTo(150, 650);
    context.lineTo(200, 350);
    context.lineTo(250, 750);
    context.lineTo(400, 700);
    context.stroke();
    // 右下
}
window.addEventListener('load', doFirst);
