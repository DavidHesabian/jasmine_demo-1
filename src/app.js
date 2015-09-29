var thermostat = new Thermostat();

function updateThermostatDisplay() {
    $('#current').html(thermostat.currentTemperature);
    $('#current').css('color', thermostat.colorStatus());
    $('#message').empty();
}

function displayErrorMessage(e) {
    $('#message').html(e.message + '<br>')
}

$(document).ready(function () {
    updateThermostatDisplay();
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
        thermostat.energySavingMode = $(this).prop('checked');
    });
    $('#reset').click(function () {
        thermostat.setTemperature(20);
        updateThermostatDisplay();
    });
});