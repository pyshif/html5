window.addEventListener('load', function () {
    const file = document.querySelector('#the-file');

    file.addEventListener('change', function () {
        const f = file.files[0];
        console.log(f);
        let msg = '';
        // exprssion 表達式 ${} / statement 陳述式
        msg += `File name: ${f.name} \n`;
        msg += `File type: ${f.type} \n`;
        msg += `File size: ${f.size} \n`;
        msg += `Last modified : ${f.lastModifiedDate} \n`;

        // `value` use on input element
        document.querySelector('#file-info').value = msg;

        // method: readAsText, readAsDataURL
        // attribute: result, total, loaded
        const reader = new FileReader();
        reader.readAsText(f);
        reader.addEventListener('load', function () {
            document.querySelector('#file-content').value = reader.result;
        });
    });
});
