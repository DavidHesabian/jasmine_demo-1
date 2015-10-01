var response;

function getWeatherData(location) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location, function (json) {
        response = json;
    });
    return response;
};


var api_response;

function get_data(location) {

    var data = $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location);
    api_response = date.responseJSON;
    return api_response;
}

var api_response;

function getWeatherData(location) {

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location, function (j) {
        api_response = j;
    });
}