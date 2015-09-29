describe('ThermostatUI', function() {

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false); //Tansaku's solution. Not needed if we load jQuery from CDN
        // See: https://github.com/velesin/jasmine-jquery/issues/244
    });

    it('displays thermostat default temperature', function(){
        expect('#current').toContainText('20');
    });

});