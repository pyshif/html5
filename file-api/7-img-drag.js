window.addEventListener('load', function () {
    const dropzone = document.querySelector('#dropzone');

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();

        const f = e.dataTransfer.files[0];
        const h2 = document.querySelector('#file-name');
        const image = document.querySelector('#image');
        const fReader = new FileReader();

        h2.innerHTML = f.name;
        fReader.readAsDataURL(f);

        fReader.addEventListener('load', function () {
            image.src = fReader.result;
        });
    });
});
