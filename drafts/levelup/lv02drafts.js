// getElementById

const h1 = document.getElementById('h1Test');
h1.style.color = 'green';

const btnEl = document.getElementById('tst_btn');
btnEl.style.backgroundColor = 'purple';
btnEl.style.color = 'black';

// getElementsbyTag
const h2tsts = document.getElementsByTagName('h2');

h2tsts[0].style.color = 'brown';

console.log(h2tsts);

const lst = document.getElementsByTagName('li');
// lst.forEach((element) => {}); cannot use for each
lst[2].style.color = 'brown';
const lst2 = [...lst]; // transform to array
lst2.forEach(function (lst) {
    // use forEach to navigate/apply per itm
    console.log(lst);
});
console.log(lst2);

// getElementbyClass

const classLst = document.getElementsByClassName('rare');
classLst[0].style.color = 'green'; // cannot apply to the class as a whole, apply individually
console.log(classLst);

const h2Lvl = document.querySelector('h2');
// console.log(h2Lvl.parentElement);
const parent = h2Lvl.parentElement;
parent.style.color = 'black';
