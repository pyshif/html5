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

    const img1 = new Image();
    img1.src = '../images/cityscape.jpg';
    // 外部內容嵌入時會觸發 load 事件
    // img1.addEventListener('load', function () {
    //     context.drawImage(img1, 100, 100, canvas.width, canvas.height);
    // });
    img1.addEventListener('load', drawImage);

    const img2 = new Image();
    img2.src = '../images/Shinnosuke/Shinnosuke9.png';
    // img2.addEventListener('load', function () {
    //     context.drawImage(img2, 700, 500, 300, 300);
    // });
    img2.addEventListener('load', drawImage);

    function drawImage() {
        // 套用透明到全部物件
        context.globalAlpha = 0.5;
        context.drawImage(img1, 0, 0, canvas.width, canvas.height);

        context.globalAlpha = 1;
        context.drawImage(img1, 700, 500, 300, 300);
    }
}
window.addEventListener('load', doFirst);

// JavaScript 物件
// Number, String, Boolean(new Boolean(true)), Array, Math, Date, RegExp
