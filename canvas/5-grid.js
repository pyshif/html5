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
}
window.addEventListener('load', doFirst);
