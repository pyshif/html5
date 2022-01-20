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

    // line cap : 線條兩端點增加延伸形狀
    context.lineWidth = 20;
    context.strokeStyle = 'maroon';

    context.beginPath();
    context.lineCap = 'butt';
    context.moveTo(100, 100);
    context.lineTo(250, 100);
    context.stroke();

    context.beginPath();
    context.lineCap = 'round';
    context.moveTo(100, 150);
    context.lineTo(250, 150);
    context.stroke();

    context.beginPath();
    context.lineCap = 'square';
    context.moveTo(100, 200);
    context.lineTo(250, 200);
    context.stroke();

    // line join
    context.lineJoin = 'miter';
    context.strokeRect(100, 300, 100, 150);

    context.lineJoin = 'bevel'; // 斜切
    context.strokeRect(250, 300, 100, 150);

    context.lineJoin = 'round'; // 圓角
    context.strokeRect(400, 300, 100, 150);
}
window.addEventListener('load', doFirst);
