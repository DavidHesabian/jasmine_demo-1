

function Thermostat(temperature) {
    this.currentTemperature = (typeof temperature !== 'undefined' ? temperature : 20);
    this.energySavingMode = true;
};

Thermostat.prototype.setTemperature = function (temperature) {
    this.currentTemperature = temperature;
};

Thermostat.prototype.increaseTemperature = function (value) {
    if (this.currentTemperature < this.maximumTemperature()) {
        this.currentTemperature = (this.currentTemperature + value);
    } else {
        throw new Error("can't do that");
    }

};

Thermostat.prototype.decreaseTemperature = function (value) {
    if (this.currentTemperature > this.minimumTemperature()) {
        this.currentTemperature = (this.currentTemperature - value);
    }
    else {
        throw new Error("can't do that");
    }
};

Thermostat.prototype.maximumTemperature = function() {
    if (this.energySavingMode)
        return 25;
    return 32;
}

Thermostat.prototype.minimumTemperature = function() {
    return 10;
}

Thermostat.prototype.togglePowerSavingsMode = function (value) {
    this.energySavingMode = value;
};

Thermostat.prototype.colorStatus = function() {
    if(this.currentTemperature < 18) {
        return "blue";
    }
    else if(this.currentTemperature <= 25) {
        return "orange";
    }
    else {
        return "red";
    }
};