//describe('Javabuzz', function () {
//    var javabuzz;
//
//    beforeEach(function () {
//        javabuzz = new Javabuzz();
//    });
//
//    describe('knows when a number is', function () {
//
//        it('is divisable by 3', function () {
//            expect(javabuzz.isDivisibleByThree(3)).toBe(true)
//        });
//
//        it('is not divisable by 3', function () {
//            expect(javabuzz.isDivisibleByThree(5)).toBe(false)
//        });
//
//        it('is divisable by 5', function () {
//            expect(javabuzz.isDivisibleByFive(5)).toBe(true)
//        });
//
//        it('is not divisable by 5', function () {
//            expect(javabuzz.isDivisibleByFive(6)).toBe(false)
//        });
//
//        it('is divisable by 15', function () {
//            expect(javabuzz.isDivisibleByFifteen(15)).toBe(true)
//        });
//
//        it('is not divisable by 15', function () {
//            expect(javabuzz.isDivisibleByFifteen(16)).toBe(false)
//        });
//
//    });
//    describe('When playing it returns', function () {
//        it('"Java" when number is divisible by 3', function () {
//            expect(javabuzz.says(3)).toEqual("Java");
//        });
//
//        it('"Buzz" when number is divisible by 5', function () {
//            expect(javabuzz.says(5)).toEqual("Buzz");
//        });
//
//        it('"JavaBuzz" when number is divisible by 15', function () {
//            expect(javabuzz.says(15)).toEqual("JavaBuzz");
//        });
//
//        it('Returns number when no conditions are met', function() {
//           expect(javabuzz.says(1)).toEqual(1)
//        });
//    });
//
//});