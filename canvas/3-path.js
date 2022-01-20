function doFirst() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  context.moveTo(100, 100);
  context.lineTo(250, 250);
  context.lineTo(400, 50);
  context.lineTo(50, 200);
  context.closePath();

  context.stroke();
}

window.addEventListener("load", doFirst);
