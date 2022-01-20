function doFirst() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // 無襯線字(mac 預設)、有襯線字(windows 預設)
    // 操作 css
    context.font = '50px sans-serif';

    // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
    // context.textBaseline = "top";

    // 第一個字
    // context.fillText("Oh, my god!", 100, 100);
    context.strokeText('On, my god!', 100, 100);

    context.moveTo(100, 100);
    context.lineTo(350, 100);
    context.strokeStyle = 'red';
    context.stroke();

    // 第二個字 一般陰影
    // context.shadowColor = 'red';
    context.shadowColor = 'rgba(255, 0, 0, 0.3)';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 15;

    context.fillText('Oh, my god!', 100, 200);

    // 第三個字 四周擴散
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillStyle = '#fff';
    context.fillText('Oh, my god!', 100, 300);

    // 第四個字 多重陰影
    context.shadowBlur = 5;

    context.fillText('Oh, my god!', 100, 400);
}

window.addEventListener('load', doFirst);
