describe('Thermostat', function () {
    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });
    describe('Thermostat temperature', function () {

        it('is set to default temerature to 20', function () {
            expect(thermostat.currentTemperature).toEqual(20);
        });

        it('is set to desired value wit setTemperature', function () {
            thermostat.setTemperature(21);
            expect(thermostat.currentTemperature).toEqual(21);
        });

        it('can be increased by 1', function () {
            thermostat.increaseTemperature(1);
            expect(thermostat.currentTemperature).toEqual(21)
        });

        it('can be increased to 25 if power savings mode is on', function () {
            thermostat.energySavingMode = true
            thermostat.setTemperature(24);
            expect(function () {
                    thermostat.increaseTemperature(1);
                }
            ).toBeTruthy();
        });

        it('can not be increased above 25 if power savings mode is on', function () {
            thermostat.energySavingMode = true
            thermostat.setTemperature(25);
            expect(function () {
                    thermostat.increaseTemperature(1);
                }
            ).toThrowError("can't do that");
        });

        it('can not be decreased above 32 if power savings mode is off', function () {
            thermostat.energySavingMode = false
            thermostat.setTemperature(32);
            expect(function () {
                    thermostat.increaseTemperature(1);
                }
            ).toThrowError("can't do that");
        });

        it('can be increased to 32 if power savings mode is on', function () {
            thermostat.energySavingMode = false
            thermostat.setTemperature(32);
            expect(function () {
                    thermostat.increaseTemperature(1);
                }
            ).toBeTruthy();
        });

        it('can be decreased by 1', function () {
            thermostat.setTemperature(20);

            thermostat.decreaseTemperature(1);
            expect(thermostat.currentTemperature).toEqual(19)
        });

        it('can not be decreased below 10', function () {
            thermostat.setTemperature(10);
            expect(function () {
                    thermostat.decreaseTemperature(1);
                }
            ).toThrowError("can't do that");
        });
    });
    describe('Energy savings mode', function () {

        it('is on by default', function (){
            expect(thermostat.energySavingMode).toEqual(true);
        });

        it('can be switched off', function () {
            thermostat.togglePowerSavingsMode(false);
            expect(thermostat.energySavingMode).toEqual(false)
        });

        it('can be switched on', function () {
            thermostat.togglePowerSavingsMode(true);
            expect(thermostat.energySavingMode).toEqual(true)
        });
    });

    describe('maximumTemperature is set to', function() {

        it('25 degrees if Energy Savings mode is on', function() {
            thermostat.togglePowerSavingsMode(true);
            expect(thermostat.maximumTemperature()).toEqual(25)
        });

        it('32 degrees if Energy Savings mode is off', function() {
            thermostat.togglePowerSavingsMode(false);
            expect(thermostat.maximumTemperature()).toEqual(32)
        });
    });

    describe('minimumTemperature is set to', function() {

        it('10 degrees', function() {
           expect(thermostat.minimumTemperature()).toEqual(10)
        });

    });

    describe('Colour status', function() {

        it('shows blue if less than 18', function() {
            thermostat.currentTemperature = 15;
            expect(thermostat.colorStatus()).toEqual("blue");
        });

        it('shows orange if less than 25', function () {
            thermostat.currentTemperature = 23;
            expect(thermostat.colorStatus()).toEqual("orange");
        });

        it('shows red if anything else', function() {
            thermostat.currentTemperature = 33;
            expect(thermostat.colorStatus()).toEqual("red");
        });

    });

});