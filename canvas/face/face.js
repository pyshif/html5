// 1.
window.addEventListener('load', function () {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    // 微笑
    const smile = new Point(250, 200);
    // face
    smile.start(context).circle(150).draw();
    // eyes
    smile.move(-60, -40).circle(50).draw();
    smile.moveX(60).circle(50).draw();
    // eyes ball
    smile.move(-35, -15).circle(15).draw(false);
    smile.moveX(35).circle(15).draw(false);
    // mouth
    smile.move(0, 45).circle(60, 0, Math.PI).draw();
    // close
    smile.end();
});
// 2.
window.addEventListener('load', function () {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    // 猙獰
    const sick = new Point(750, 200);
    // face
    sick.start(context).circle(150).draw();
    // eyes
    sick.move(-100, -50).lineSlope(-20, -0.3).draw();
    sick.moveX(20).lineSlope(100, 0.3).draw();
    sick.move(-80, 20).lineSlope(-20, 0.4).draw();
    sick.moveX(20).lineSlope(80, -0.4).draw();
    // mouth
    sick.move(-70, 90).curve2(0, 80, -0.6).draw();
    sick.move(0, 80).curve2(70, 70, 0.6).draw();
    // close
    sick.end();
});
// 3.
window.addEventListener('load', function () {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    // 哭泣
    const sad = new Point(250, 600);
    // face
    sad.start(context).circle(150).draw();
    // eyes
    sad.move(-60, -40).circle(50).draw();
    sad.moveX(60).circle(50).draw();
    // eyes ball
    sad.move(-65, -70).circle(20).draw(false);
    sad.move(65, -10).circle(20).draw(false);
    // tear y:10
    sad.move(80, 15).circle(3).draw();
    sad.move(86, 25).circle(4).draw();
    sad.move(90, 38).circle(5).draw();
    // mouth
    sad.move(0, 90)
        .circle(60, Math.PI, 2 * Math.PI)
        .draw();
    // close
    sad.end();
});
// 4.
window.addEventListener('load', function () {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    // 奸笑
    const giggle = new Point(750, 600);
    // face
    giggle.start(context).circle(150).draw();
    // eyes
    giggle.move(-60, -40).circle(50).draw();
    giggle.moveX(60).circle(50).draw();
    // eyes ball
    giggle.move(-60, -70).circle(20).draw(false);
    giggle.moveX(60).circle(20).draw(false);
    // mouth
    giggle.move(60, 60).curve2(-60, 60, -0.65).draw();
    giggle.move(60, 60).line(-60, 60).draw();
    giggle.move(0, 60).line(0, 100).draw();
    giggle.move(-30, 60).line(-30, 90).draw();
    giggle.move(30, 60).line(30, 90).draw();
    // close
    giggle.end();
});

// 座標建構子
function Point(x, y) {
    this.x = x;
    this.y = y;
}
// 獲取 context 並歸零座標
Point.prototype.start = function (context) {
    const restore = { x: -this.x, y: -this.y };
    this.c = context;
    this.c.translate(this.x, this.y);
    this.x = this.y = 0;
    this.end = function () {
        this.c.translate(restore.x, restore.y);
        // console.log(this.c);
    };
    this.c.beginPath();
    return this;
};
// 移動 x, y
Point.prototype.move = function (x, y) {
    this.c.moveTo(x, y);
    this.x = x;
    this.y = y;
    this.c.beginPath();
    return this;
};
// 移動 x
Point.prototype.moveX = function (x) {
    this.c.moveTo(x, this.y);
    this.x = x;
    this.c.beginPath();
    return this;
};
// 移動 y
Point.prototype.moveY = function (y) {
    this.c.moveTo(this.x, y);
    this.y = y;
    this.c.beginPath();
    return this;
};
// 圓
Point.prototype.circle = function (r, as = 0, ae = 2 * Math.PI) {
    this.c.arc(this.x, this.y, r, as, ae, false);
    this.c.x;
    return this;
};
// 線
Point.prototype.line = function (x, y) {
    this.c.beginPath();
    this.c.moveTo(this.x, this.y);
    this.c.lineTo(x, y);
    this.x = x;
    this.y = y;
    return this;
};
// 橫線
Point.prototype.lineX = function (x) {
    this.c.beginPath();
    this.c.moveTo(this.x, this.y);
    this.c.lineTo(x, this.y);
    this.x = x;
    return this;
};
// 直線
Point.prototype.lineY = function (y) {
    this.c.beginPath();
    this.c.moveTo(this.x, this.y);
    this.c.lineTo(this.x, y);
    this.y = y;
    return this;
};
// 斜線 (-1 <= slope <= 1)
Point.prototype.lineSlope = function (x, slope) {
    this.c.beginPath();
    this.c.moveTo(this.x, this.y);
    const dx = Math.abs(x - this.x);
    const dy = -(dx * slope); // 由於 canvas y軸上是負下是正，所以加上一個負號轉換
    this.x = x;
    this.y += dy;
    // console.log(this.x, this.y);
    this.c.lineTo(this.x, this.y);
    return this;
};
// 二次貝賽爾曲線 (cvs 曲度)
Point.prototype.curve2 = function (x, y, cvs) {
    const third = {
        x: (this.x + x) / 2 + (this.y - y) * cvs,
        y: (this.y + y) / 2 + (x - this.x) * cvs,
    };
    // console.log(third.x, third.y);
    this.c.beginPath();
    this.c.moveTo(this.x, this.y);
    this.c.quadraticCurveTo(third.x, third.y, x, y);
    return this;
};

// 繪製（線條 or 填充）
Point.prototype.draw = function (stroke = true) {
    if (stroke) {
        this.c.lineWidth = 2;
        this.c.strokeStyle = 'black';
        this.c.stroke();
    } else {
        this.c.lineWidth = 2;
        this.c.fillStyle = 'black';
        this.c.fill();
    }
    return this;
};
