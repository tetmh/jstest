// classList and className

const first = document.getElementById('h1Test1');
const sec = document.getElementById('h1Test2');
const third = document.getElementById('h1Test3');

const clsFirst = first.className;
// console.log(clsFirst);

sec.className = 'colors';

// third.classList.add('text');
third.classList.add('colors', 'text');
third.classList.remove('colors');
const clsThd = third.classList;
console.log(clsThd);

let res = third.classList.contains('text');
res ? console.log('ok') : console.log('clear');
