// const s = sessionStorage;
const s = localStorage;
// console.log(Array.isArray(s));
console.log(s);

window.addEventListener('load', function () {
    const itemString = s.getItem('addItemList');
    const items = itemString.substring(0, itemString.length - 2).split(', ');

    // 新建元素
    const newDiv = document.createElement('div');
    const newTable = this.document.createElement('table');
    // 綁定元素
    newDiv.appendChild(newTable);
    this.document.querySelector('#cartList').appendChild(newDiv);

    items.forEach(function (itm) {
        const info = s.getItem(itm);
        createCartList(itm, info);
    });

    // 自定義函數
    function createCarList(item, value) {
        // alert(`${item}: ${value}`);
        const title = value.split('|')[0];
        const img = 'imgs/' + value.split('|')[1];
        const price = parseInt(value.split('|')[2]);
        // 品項的清單
        const trItemList = document.createElement('tr');
        trItemList.className = 'item';
        newTable.appendChild(trItemList);

        // 商品圖片
        const tdImage = document.createElement('td');
        tdImage.style.width = '200px';

        const image = document.createElement('img');
        image.src = img;
        image.width = 80;

        tdImage.appendChild(image);
        trItemList.appendChild(tdImage);

        // 名稱、刪除按鈕
        const tdTitle = document.createElement('td');
        tdTitle.style.width = '280px';
        tdTitle.id = itemId;
        ...

        // 價格

        // 數量
    }
});

// browser 會幫我們把 web storage 的東西存到 localStorage , sessionStorage 這兩個物件？陣列？讓我們可以直接用
