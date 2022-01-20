// register load event handler
window.addEventListener('load', function () {
    // get element from DOM
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    console.log(canvas);
    console.log(context);

    // draw grid 50x50
    context.beginPath();
});
