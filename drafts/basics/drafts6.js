// template literals ES6+
// literals using backtick

// lower samples covers method arrays
// forEach,map,filter

const name = 'tet!!';
const age = 21;
const val1 = `test hello ${name} and number ${age} and test compute ${
    6 * 5.6 + 3
}`;

// console.log(val1);

// array iterators
// forEach, map, filter, reduce- no loop required
// accept callback funxn as arg

const nums = [90, 12, 23, 67];
// show all numbers

// forEach -> does not return new Array

const p1 = [
    { name: 'test1', age: 24, stat: 'single', allowance: 500 },
    { name: 'test2', age: 19, stat: 'single', allowance: 600 },
    { name: 'test3', age: 30, stat: 'married', allowance: 300 },
    { name: 'test4', age: 20, stat: 'single', allowance: 400 },
];

// function showpip(parameter, idx) { //proper configured fxn call
//     console.log(idx, parameter.stat.toUpperCase());
// }
//p1.forEach(showpip);

// function showpip(parameter) {
//     console.log(parameter.stat.toUpperCase());
// }

// p1.forEach(function (item) {
//     //anonymous callback fxn
//     console.log(item.stat.toUpperCase());
// });

// map

// const num2 = p1.map(function (arr) {
//     console.log(arr);
//     // return 'test only';
//     return arr.age;
// });

// const arr2 = p1.map(function (arr) {
//     return {
//         firstN: arr.name.toUpperCase(),
//         age: arr.age + 3,
//     };
// });
// console.log(arr2);

// filter

const emp = p1.filter(function (arr) {
    // needs condition to filter
    return arr.age <= 25 && arr.stat === 'single';
});

//console.log(emp);

// find
// returns object - first match, single instance
// no match== undefined
// finds unique value

const findMethod = p1.find(function (arr) {
    return arr.age === 24;
});
console.log(findMethod);

// reduce
// iterates, callback fxn
// reduces to 1 value only- number, array, object
// 1 param ('acc)- total of all calculations
// 2 param('curr')- current iteration/value
// can replace map and filter methods
// more challenging since it is more powerful

const redMethod = p1.reduce(function (acc, currItem) {
    console.log(`total ${acc}`);
    console.log(`current val : ${currItem.allowance}`);
    acc += currItem.allowance;

    return acc; //return always the accumulator
}, 0);
console.log(redMethod);
