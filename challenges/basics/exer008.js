// ## Strings #8

// 1. create function fullName
// 2. accept two parameters "firstName", "lastName"
// 3. add them together (concat) and return result in uppercase
// 4. invoke fullName and pass some values
// 5. log result
// 6. change the order of arguments
// 7. refactor to object parameter

function fullName(firstName, lastName) {
    let strX = `${firstName} ${lastName}`;
    return strX.toLocaleUpperCase();
}

let strN = 'Jan';
let strL = 'Reyes';

console.log(fullName(strN, strL));
console.log(fullName(strL, strN));
//console.log(xyz);

// refactor
function fullN({ firstN, lastN }) {
    let strY = `${firstN} ${lastN}`;
    return strY.toLocaleUpperCase();
}
console.log(fullN({ firstN: 'smith', lastN: 'dan' }));
console.log(fullN({ x: 'smith', lastN: 'dan' }));
//`${p1.firstN.toLocaleUpperCase()} ${p1.LastN.toUpperCase()}`
// refactoring to function object needs value pairs when passing
// value pairs should use exact parameter name as in object fuxn declaraion
