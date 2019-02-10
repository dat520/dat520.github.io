var baseUrl = "https://github.com/uis-dat520-s2019/"

function Redirect() {
    redirect = baseUrl + window.location.search.substr(1);

    document.body.innerHTML += "<br /><a href='"+redirect+"'>"+redirect+"</a>";
    window.location.replace(redirect);
}