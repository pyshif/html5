window.addEventListener('load', function () {
    const image = document.querySelector('#image');
    const rightbox = document.querySelector('#rightbox');

    // drag 相關事件：dragstart, drag, dragend, dragenter, dragover, drageleave, drop
    // start -> enter -> over -> drop -> end
    image.addEventListener('dragstart', function (e) {
        console.log('start');
        const data = `<img src="../images/Shinnosuke/Shinnosuke1.jpg">`;
        e.dataTransfer.setData('image/jpeg', data);
    });

    image.addEventListener('dragend', function () {
        console.log('end');
    });

    rightbox.addEventListener('dragenter', function (e) {
        e.preventDefault();
        console.log('enter');
    });

    rightbox.addEventListener('dragover', function (e) {
        e.preventDefault();
        console.log('over');
    });

    rightbox.addEventListener('drop', function (e) {
        e.preventDefault();
        console.log('drop');
        rightbox.innerHTML = e.dataTransfer.getData('image/jpeg');
    });
});
