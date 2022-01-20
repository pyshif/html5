class Point {
    constructor(x, y) {
        this.xNum = Math.abs(x);
        this.yNum = Math.abs(y);
        this.xSign = (x < 0) ? -1 : 1;
        this.ySign = (y < 0) ? -1 : 1;

        this.swapXY = function () {
            const t = this.xNum;
            this.xNum = this.yNum;
            this.yNum = t;
        }
        this.swapXSign = function () {
            this.xSign *= -1;
        }
        this.swapYSign = function () {
            this.ySign *= -1;
        }
    }

    get x () {
        return this.xNum * this.xSign;
    }

    get y () {
        return this.yNum * this.ySign;
    }
}

let r = 100;

window.addEventListener('load', function () {
    drawOctagonal(r);
});
document.querySelector('#bigger').addEventListener('click', function () {
    drawOctagonal(r+=10);
});
document.querySelector('#smaller').addEventListener('click', function () {
    drawOctagonal(r-=10);
});
document.querySelector('#something-different').addEventListener('click', function () {
    window.addEventListener('mousemove', function (e) {
        drawOctagonal(r, new Point(e.pageX, e.pageY));
    })
})

function drawOctagonal(radius=100, start=new Point(0, 0)) {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    // step 1: 清除畫布
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // step 2: 指定坐標設為原點  
    context.translate(500, 400);

    // step 3: 三角函數計算座標點 (給定圓心、半徑)
    const coord = calcOctagonal(radius, start); 

    // step 4: 開始繪製
    context.beginPath();
    coord.forEach(function (p) {
        context.lineTo(p.x, p.y);
    })
    context.closePath();
    context.strokeStyle = 'rgba(0, 0, 0, 1)';
    context.stroke();

    // step 5: 回復原點
    context.translate(-500, -400);
}

function calcOctagonal(radius, start) {
    // 三角函數
    // 2 PI -> 圓
    const theta = (2 * Math.PI) * (22.5 / 360);
    const sin = Math.sin(theta);
    const cos = Math.cos(theta);

    // 座標陣列
    const p = new Array(16);
    const begin = new Point(start.x + -radius * sin, start.y + radius * cos);

    // 演算法
    for (let i = 0 ; i < p.length ; i++) {
        // 跳過奇數項（凹點）
        if (i % 2 === 1) continue;
        // 處理偶數項（凸點）    
        // (i / 2) 將項數修正回序列 (0, 2, 4, 6 ... -> 0, 1, 2, 3, ...)
        // %2 === 1 找出奇數項，x 和 y 座標對掉
        if ((i / 2) % 2 === 1)
            begin.swapXY();
        // %4 === 0 四個一循環變號
        if ((i / 2) % 4 === 0)
            begin.swapXSign();
        // +2 維修正項
        // %4 === 0 四個一循環變號
        if (((i / 2) + 2) % 4 === 0)
            begin.swapYSign();

        p[i] = new Point(begin.x, begin.y);
    }

    // console.table(p);

    for (let i = 0 ; i < p.length ; i++) {
        // 跳過偶數項（凸角）
        if (i % 2 === 0) continue;
        // 取得兩凸角
        const prev = i - 3 < 0 ? 16 + (i - 3) : i - 3;
        const next = i + 3 > 15 ? (i + 3) - 16 : i + 3;

        // 計算兩凸角連線中點（凹角）
        p[i] = new Point((p[prev].x + p[next].x) / 2, (p[prev].y + p[next].y) / 2);
    }

    // console.table(p);

    return p;
}
