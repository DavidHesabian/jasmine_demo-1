function Thermostat(temperature) {
    this.currentTemperature = (typeof temperature !== 'undefined' ? temperature : parseInt(this.getDefaultTemperature()));
    this.energySavingMode = true;
    this.createOrUpdateThermostatCookie();
};

Thermostat.prototype.setTemperature = function (temperature) {
    this.currentTemperature = temperature;
    this.createOrUpdateThermostatCookie();
};

Thermostat.prototype.increaseTemperature = function (value) {
    if (this.currentTemperature < this.maximumTemperature()) {
        this.currentTemperature = (this.currentTemperature + value);
        this.createOrUpdateThermostatCookie();
    } else {
        throw new Error("can't do that");
    }
};

Thermostat.prototype.decreaseTemperature = function (value) {
    if (this.currentTemperature > this.minimumTemperature()) {
        this.currentTemperature = (this.currentTemperature - value);
        this.createOrUpdateThermostatCookie();
    }
    else {
        throw new Error("can't do that");
    }
};

Thermostat.prototype.maximumTemperature = function () {
    if (this.energySavingMode)
        return 25;
    return 32;
};

Thermostat.prototype.minimumTemperature = function () {
    return 10;
};

Thermostat.prototype.togglePowerSavingsMode = function (value) {
    this.energySavingMode = value;
    this.resetCurrentTemperature();
};

Thermostat.prototype.resetCurrentTemperature = function () {
    if (this.currentTemperature > this.maximumTemperature()){
        this.setTemperature(this.maximumTemperature());
    }

};

Thermostat.prototype.colorStatus = function () {
    if (this.currentTemperature < 18) {
        return "blue";
    }
    else if (this.currentTemperature <= 25) {
        return "orange";
    }
    else {
        return "red";
    }
};

Thermostat.prototype.createOrUpdateThermostatCookie = function () {
    saveValueInCookie('temperature', this.currentTemperature, 10)
};


Thermostat.prototype.getDefaultTemperature = function () {
    var temperature = getSavedValueFromCookie("temperature");
    if (temperature != "") {
        return temperature;
    } else {
        return 20;
    }
};

saveValueInCookie = function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
};

getSavedValueFromCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
};
