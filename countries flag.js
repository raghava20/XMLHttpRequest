const countriesFlags = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://restcountries.eu/rest/v2/all");

    xhr.responseType = "json";

    xhr.send();

    xhr.onload = () => {
        var data = xhr.response;
        data = data.forEach((element) => {
            console.log(element.flag)
        })
    }

}
countriesFlags();