// DOM 2
// DOM 0

function doFirst() {
  const canvas = document.getElementById("canvas");
  // console.log(canvas);
  const context = canvas.getContext("2d");

  context.strokeStyle = "green";
  context.fillStyle = "red";
  // canvas 中長度不需要加單位
  context.lineWidth = 10;

  context.fillRect(100, 100, 300, 200);
  // context.strokeRect(100, 100, 300, 200);
  context.clearRect(150, 150, 50, 50);

  // fillRect 分步驟寫法
  context.rect(700, 600, 300, 200);
  context.fill();

  // 橡皮擦
  // context.clearRect(0, 0, canvas.width, canvas.height);

  // lineTo(x, y)
  // moveTo(x, y)
}

window.addEventListener("load", doFirst);
