var baseUrl = "https://github.com/uis-dat520-s2019/"

function GetUrlParameter(parameter, decode) {
    if (window.location.search.indexOf("?") > -1) {
        var parArr = window.location.search.split("?")[1].split("&");
        for (var i = 0; i < parArr.length; ++i) {
            var parr = parArr[i].split("=");
            if (parr[0] === parameter) {
                return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            }
        }
    }

    return false;
}

function Redirect() {
    var redirect = GetUrlParameter("r", false);
    if (!redirect)
        return;
    redirect = baseUrl + redirect;

    document.body.innerHTML += "<br /><a href='"+redirect+"'>"+redirect+"</a>";
    window.location = baseUrl + redirect;
}