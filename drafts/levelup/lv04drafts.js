// nodeValue
// textContent

const tst01 = document.getElementById('prio');
const val = tst01.nodeValue;
//console.log(tst01.childNodes[0].nodeValue);

const temp = tst01.textContent;
//console.log(temp);

const tstTest = document.querySelector('.itm01');
const classVal = tstTest.getAttribute('class');
const idVal = tstTest.getAttribute('id');
console.log(classVal);
console.log(idVal);

const lnk = document.getElementById('tstLnk');
const lnk2 = lnk.getAttribute('href');
console.log(lnk2);

const last = lnk.nextElementSibling;
last.setAttribute('id', 'tstLast');
last.textContent = 'modified val';
console.log(last);
