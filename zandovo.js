(function () {
    function replaceQuery(queryString) {
        let currentUrl = window.location.href.split("?")[0];
        let newUrl = currentUrl + "?" + queryString;
        window.history.replaceState(null, "", newUrl);
        console.log("Query string changed to:", queryString);
    }

    replaceQuery("ZANDOVO_TRUE_OLDCOMPANY_ASTRARUNE");

    setTimeout(() => {
        replaceQuery("ZANDOVO_TRUE");
    }, 300);

    setTimeout(() => {
        replaceQuery("ASTRARUNE_FALSE");
    }, 400);

    setTimeout(() => {
        replaceQuery("ZANDOVO_TRUE");
    }, 500);

    setTimeout(() => {
        replaceQuery("ZANDOVO_WEBGAME");
    }, 800);
})();
