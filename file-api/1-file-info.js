window.addEventListener('load', function () {
    const file = document.querySelector('#the-file');

    file.addEventListener('change', function () {
        const info = document.querySelector('#the-file').files[0];
        console.log(info);
        let msg = '';
        // exprssion 表達式 ${} / statement 陳述式
        msg += `File name: ${info.name} \n`;
        msg += `File type: ${info.type} \n`;
        msg += `File size: ${info.size} \n`;
        msg += `Last modified : ${info.lastModifiedDate} \n`;

        // `value` use on input element
        document.querySelector('#file-info').value = msg;
    });
});
