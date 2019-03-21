var baseUrl = "https://github.com/uis-dat520-s2019/"

function Redirect() {
    var redirect = baseUrl + window.location.search.substr(1) + window.location.hash;

    document.body.innerHTML += "<br /><a href='"+redirect+"'>"+redirect+"</a>";
    window.location.replace(redirect);
}
