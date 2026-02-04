// ## Objects #6

// 1. create car object
// 2. add make, model, year, colors (array),
//    hybrid (boolean) keys
// 3. add two methods (drive and stop)
// 4. in the function body setup log with random text
// 5. log make
// 6. log first color
// 7. invoke both methods

const car = {
    make: 'Honda',
    model: 'CRV',
    year: 2024,
    colors: ['red', 'black'],
    hybrid: true,
    drive: function () {
        //first method to fxn
        console.log('GO!');
    },
    stop() {
        //another method to fxn
        console.log('STOP');
    },
};

console.log(car.make, car.colors[0]);
car.drive();
car.stop();
