// register event handler
window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // draw grid
    const grid = {
        start: 0,
        end: 0,
        width: canvas.width,
        height: canvas.height,
        interval: 50,
    };
});

function drawGrid(canvas, x, y, interval = 50) {
    const context = canvas.getContext('2d');
    const grid = {
        x: 0,
        y: 0,
        i: interval,
    };

    while (grid.x < canvas.width) {
        grid.x += grid.i;
    }
}
