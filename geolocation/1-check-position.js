window.addEventListener('load', function () {
    // getCurrentPosition(success callback, failed callback, settings)
    navigator.geolocation.getCurrentPosition(
        function (e) {
            const latitude = e.coords.latitude;
            const longitude = e.coords.longitude;
            const accuracy = e.coords.accuracy;

            const pos = document.querySelector('#position');
            pos.innerHTML =
                accuracy <= 1500.0
                    ? `latitude: ${latitude} <br>
                   longitude: ${longitude} <br>
                   accuracy: ${accuracy} meter <br>`
                    : '超過偵測範圍';
        },
        function (e) {
            const pos = document.querySelector('#position');
            pos.innerHTML = `error code: ${e.code} <br>
                             error msg: ${e.message} <br>`;
        }
        // {
        //     enableHighAccuracy: false,
        //     timeout: 100,
        //     maximumAge: 0,
        // }
    );
    // settings:
    //      enableHighAccuracy: false by default 高精準功能
    //      timeout: 0 by default 逾時時間
    //      maximumAge: 0 by default 可接受多久前資料
});
