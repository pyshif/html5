window.addEventListener('load', function () {
    // drag over, drop, dofirst
    const dropzone = document.querySelector('#dropzone');

    dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();

        const fs = Array.from(e.dataTransfer.files);
        const fReader = new FileReader();

        fs.forEach((f) => {
            fReader.readAsDataURL(f);
            fReader.addEventListener('load', function () {
                // 動態生成 DOM(create -> append -> modify)
                const img = document.createElement('img');
                img.src = fReader.result;
                // append to parent node
                // dropzone.appendChild(img);
                dropzone.insertBefore(img, dropzone.firstChild);
                // modify
            });
        });
    });
});
