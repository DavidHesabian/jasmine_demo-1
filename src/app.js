
var thermostat = new Thermostat();


function getWeather(location, callback) {
    var api_url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + "&units=metric";
    $.ajax({
        dataType: "jsonp",
        url: api_url,
        success: callback
    });
}

function getWeatherForSelectedCity(location) {
    getWeather(location, function (response) {
        $('#city').html(response.name);
        $('#city_temp').html(response.main.temp);
    });
}

// Can be called with
// getWeatherForSelectedCity($("#current_city").val());
// or
// getWeatherForSelectedCity('London');

function updateThermostatDisplay() {
    $('#current').html(thermostat.currentTemperature).css('color', thermostat.colorStatus());
    $('#message').empty();
    getWeatherForSelectedCity($("#current_city").val());

}

function displayErrorMessage(e) {
    $('#message').html(e.message + '<br>')
}



$(document).ready(function () {
    updateThermostatDisplay();


    $('#current_city').change(function () {
        getWeatherForSelectedCity($("#current_city").val());
    });


    $('#increase').click(function () {
        try {
            thermostat.increaseTemperature(1);
            updateThermostatDisplay();
        }
        catch (e) {
            displayErrorMessage(e);
        }
    });


    $('#decrease').click(function () {
        try {
            thermostat.decreaseTemperature(1);
            updateThermostatDisplay();
        }
        catch (e) {
            displayErrorMessage(e);
        }
    });
    $('#mode').on('change', function () {
        var state = $('#mode').prop('checked') ? true : false;
        thermostat.togglePowerSavingsMode(state);
        updateThermostatDisplay();
    });

    $('#reset').click(function () {
        thermostat.setTemperature(20);
        updateThermostatDisplay();
    });
});