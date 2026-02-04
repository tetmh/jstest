// arr props and methods
const arrFruits = ['apple', 'orange', 'grapes'];

let var1 = arrFruits[0];

// length
let n = arrFruits.length;
arrFruits[n - 1] = 'pear';
console.log(n);
console.log(var1, arrFruits);

// concat
const cnt = [10, 5, 4];
const allFruits = arrFruits.concat(cnt);
console.log(allFruits);
console.log(allFruits.reverse());

arrFruits.unshift('pie');
console.log(arrFruits);

arrFruits.shift();
console.log(arrFruits);

arrFruits.push('lemon');
console.log(arrFruits);

arrFruits.pop();
console.log(arrFruits);

// splice- mutates original array

const frt = arrFruits.splice(2, 1);
console.log(frt);
console.log(arrFruits);
