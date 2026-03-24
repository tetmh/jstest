// set timeout = runs function after a specified number of milliseconds

/*
- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0
- returns timeout ID (number) that can be used to cancel timeout with clearTimeout
- clearTimeout(timeoutID) cancels the timeout
- on window object, so can be called as window.setTimeout or just setTimeout
*/

/*
setInterval = runs function repeatedly at specified intervals (in ms) until cleared with clearInterval(timeoutID)
- pass function reference
- duration in ms
- default 0
- returns interval ID (number) that can be used to cancel interval with clearInterval
- clearInterval(intervalID) cancels the interval


*/


function greet() {
    console.log('Hello, world!');
}
// does not work as expected, since greet() is called immediately and its return value (undefined) is passed to setTimeout
//setTimeout(greet(), 2000); // calls greet after 2 seconds

// alternative way using ES6 arrow function, which creates an anonymous function that calls greet after 2 seconds
// setTimeout(() => {
//     greet();
// }, 2000);

//setInterval(greet, 3000)

function showScore(name, score) {
    console.log(`${name} scored ${score} points!`);
}
// setTimeout(showScore, 3000, 'Alice', 95); // calls showScore after 3 seconds with arguments 'Alice' and 95

const firstID=setTimeout(showScore, 3000, 'Davis', 89);
const secID=setTimeout(showScore, 4000, 'Alfred', 92);
const thirdID=setInterval(showScore, 5000, 'Brian', 90);

setInterval(showScore, 5000, 'Charlie', 90); // calls showScore every 5 seconds with arguments 'Charlie' and 88

console.log(firstID);
console.log(secID);


clearTimeout(firstID); // cancels the first timeout, so 'Davis scored 89 points!' will not be logged after 3 seconds
clearInterval(thirdID); // cancels the interval, so 'Brian scored 90 points!' will not be logged every 5 seconds

