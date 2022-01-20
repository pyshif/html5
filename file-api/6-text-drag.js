window.addEventListener('load', function () {
    // drag over, drop, dofirst
    const dropzone = document.querySelector('#dropzone');

    dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();

        const file = e.dataTransfer.files[0];
        const h2 = document.querySelector('#file-name');
        const textarea = document.querySelector('#file-content');
        const fReader = new FileReader();

        // 寫入 h2 標籤
        h2.innerText = file.name;
        // 異步讀檔
        fReader.readAsText(file);
        // 讀檔完成時
        fReader.addEventListener('load', function () {
            textarea.value = fReader.result;
        });
    });
});
