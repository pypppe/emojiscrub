(function () {
    function randomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    function generatePackage() {
        let parts = [];
        const count = Math.floor(Math.random() * 6) + 10;
        for (let i = 0; i < count; i++) {
            parts.push(randomString(Math.floor(Math.random() * 20) + 8));
        }
        return "ZANDOVOUK_PACKAGE366_" + parts.join("_");
    }

    function replaceQuery(queryString) {
        let currentUrl = window.location.href.split("?")[0];
        let newUrl = currentUrl + "?" + queryString;
        window.history.replaceState(null, "", newUrl);
        console.log("Query string changed to:", queryString);
    }

    replaceQuery("ZANDOVO_GITHUB");
    setTimeout(() => {
        replaceQuery("GITHUB");
    }, 300);
    setTimeout(() => {
        replaceQuery("PYPPPE_GITHUB_EMOJISCRUB_LOADSCRIPT");
    }, 400);
    setTimeout(() => {
        replaceQuery("ZANDOVO_TRUE_U4Do7QTFO7uhD9lke7T4h5MvuB3foy3d_UecA1Hj7I9QAwo2CczGnVQ6KXQeIJSyueH3tbuAVNONYjYK8TfrsctVSOcZoy36BKKae9VAD8SbS5SYqryLvFIpo857RXxj8y6aYulX8UFWsSREJdCkFIHPlqzPwQ7ayta2syt0Y42D6L4Ts9xbRI46qN0H54mT4_TUCxcAe11A2UTl6bsp9Z0tYMmOizjWvk");
    }, 500);
    setTimeout(() => {
        replaceQuery(generatePackage());
    }, 800);
})();
