// value vs reference

// let txt = null;
// if (txt) {
//     console.log('truthy');
// } else {
//     console.log('falsy');
// }
// // ternary operations
// txt ? console.log('yes') : console.log('no');

// // var lookup {} codeblock

// const globalN = 100;

// function sum(x, y) {
//     const globalN = 30;
//     console.log(`test ${x + y + globalN}`);
//     function mul() {
//         let res = globalN * y;
//         console.log(res);
//     }
//     mul();
// }

// let n1 = 5,
//     n2 = 5;

// sum(n1, n2);
function grAM(name) {
    return `good day ${name.toUpperCase()}`;
}

function grHello(name) {
    return `hello ${name.repeat(2)}!`;
}

function fxnGreet(name, cb) {
    const myN = 'belle';
    console.log(`${cb(name)} , my name is ${myN}`);
}
fxnGreet('jean ', grAM, grHello);
fxnGreet('lyn ', grHello);
