window.addEventListener('load', function () {
    const file = document.querySelector('#the-file');

    file.addEventListener('change', function () {
        const fs = Array.from(file.files);
        let msg = '';

        fs.forEach((f, i) => {
            msg += `${i + 1}. file name: ${f.name} \n`;
            msg += `${i + 1}. file type: ${f.type} \n`;
            msg += `${i + 1}. file size: ${f.size} byte(s) \n`;
            msg += `${i + 1}. last modified: ${f.lastModifiedDate} \n`;
            msg += `---------- ---------- ---------- \n`;
        });

        const textarea = document.querySelector('#file-info');
        textarea.value = msg;
    });
});
