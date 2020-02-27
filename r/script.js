var baseUrl = "https://github.com/dat520-2020/"

function Redirect() {
    var redirect = baseUrl + window.location.search.substr(1) + window.location.hash;

    document.body.innerHTML += "<br /><a href='" + redirect + "'>" + redirect + "</a>";
    window.location.replace(redirect);
}
