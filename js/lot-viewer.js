document.addEventListener("DOMContentLoaded", async function() {

    main.buildPage();
});

main = function() {

    async function buildPage() {

        let siteLink = getSiteLink();
        let urlParams = new URLSearchParams(siteLink);

        let lotData = await fetchAPI(`https://api.dramaso.org/userapi/lots/${urlParams.get(`lot-id`)}`);
        console.log(lotData);

        let cacheBust = Math.floor(Math.random() * 10000000);
        let imageSource = `https://api.dramaso.org/userapi/city/1/${lotData.location}.png?cachebust:${cacheBust}`;
        console.log("%cFetching Lot Image:\n\n", "color: black; background-color: lightgreen;", imageSource);

        let lotImage = document.getElementById("lot-viewer-image");
        lotImage.src = imageSource;

        // using url parameters:
        // change tab name
        // embed styling
    }

    function getSiteLink() {

        return window.location.search;
    }

    async function fetchAPI(apiLink) {

        let obj;
        const res = await fetch(apiLink);
        obj = await res.json();
    
        console.log("%cFetching Api Data:\n\n", "color: white; background-color: green;", apiLink);

        return obj;
    }

    return {
        buildPage: buildPage
    }
}();