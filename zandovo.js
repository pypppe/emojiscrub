(function() {
    let currentUrl = window.location.href;
  
    const queryString = "ZANDOVO_TRUE_OLDCOMPANY_ASTRARUNE";

    if (!currentUrl.includes(queryString)) {
        let newUrl;

        if (currentUrl.includes("?")) {
            newUrl = currentUrl + "&" + queryString;
        } else {
            newUrl = currentUrl + "?" + queryString;
        }

        window.history.replaceState(null, "", newUrl);
        console.log("Query string added:", queryString);
    } else {
        console.log("Query string already present.");
    }
})();
