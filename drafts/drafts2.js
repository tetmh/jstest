// //arrays and functions and objects
// //arrays index base=0

// const arr1 = ['test1', 'test2', 'test3', 900, null, undefined];

// console.log(arr1);
// arr1[6] = 123;
// console.log(arr1[5]);
// console.log(typeof arr1);

//functions- declare, invoke, reduce redundancy
//params- when declare/define
//placeholders
// arguments- when invoked/call/run
// use vars/values, multiple params, undefined
// return
// default undefined, shortcuts, ignores after

// function testCall(varx) {
//     //logic
//     // console.log('hello ' + varx);
// } //declare

// testCall((varx = 'jude')); //invoke

// let name;
// name = 'kim';
// testCall(name);

// name = 'lily';
// testCall(name);

// function testCall2(var_arr) {
//     //logic
//     // console.log(var_arr);
//     return var_arr[0];
// } //declare

// let arrName = ['anne', 'june', 'luis'];
// let y = testCall2(arrName);
// // console.log(y);

// const varD = 90;
// function cal_x(val) {
//     //console.log('Measure is ' + valN + ' cm');
//     return val * 2.5;
// }

// const width = cal_x(100);
// const height = cal_x(varD);

// const dims = [width, height];
// console.log(dims);

// function expressions

const varD = 90;
function cal_x(val1, val2) {
    return val1 + val2;
} //func exp1

const width = cal_x(100, 3);
const height = cal_x(varD, 5);

const varfunc = function (val1, val2) {
    return val1 * val2;
}; // function exp2
const var3 = varfunc(7, 9);
const dims = [width, height, var3];

console.log(dims);
