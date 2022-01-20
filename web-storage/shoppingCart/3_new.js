// let s = sessionStorage;
const s = localStorage;
// function doFirst() {}
// window.addEventListener('load', doFirst);

window.addEventListener('load', function () {
    // filter situation
    if (s['addItemList'] == null) {
        s['addItemList'] = '';
    }

    // add handler to each button of add cart
    const btns = Array.from(document.querySelectorAll('.addButton'));
    // console.log(btns);
    btns.forEach(function (b) {
        b.addEventListener('click', function (e) {
            const teddy = document.querySelector(`#${e.target.id} input`);
            addItem(e.target.id, teddy.value);
        });
    });

    function addItem(id, value) {
        const img = document.createElement('img');
        img.src = 'imgs/' + value;
        const title = document.createElement('span');
        title.innerText = value.split('|')[1];
        const price = document.createElement('span');
        price.innerText = parseInt(value.split('|')[2]);
        // 顯示新物件
        // newItem.appendChild(img);
        // newItem.appendChild(title);
        // newItem.appendChild(price);

        if (s[id]) {
            alert('You have checked.');
        } else {
            s['addItemList'] += `${id}, `;
            s.setItem(id, value);
        }

        // 小計（數量、金額）
        // 數量
        const items = s.getItem('addItemList');
        const itemArr = items.substring(0, items.length - 2).split(', ');
        // console.log(itemArr);
        document.querySelector('#itemCount').innerText = itemArr.length;
        document.querySelector('#subtotal').innerText = subTotal;
        // 金額
        itemArr.forEach(function (item) {
            // 取得 item 於 web storage 中存儲的 value
            const info = s.getItem(item);
            subTotal += parseInt(info.split('|')[2]);
        });
    }
});
