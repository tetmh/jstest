document.body.style.backgroundColor = 'orange';
document.body.style.color = 'blue';

document.getElementById('tst_btn').style.color = 'red';
const testElbtn = document.getElementById('tst_btn');

testElbtn.style.color = 'red';
testElbtn.style.fontSize = '25px';
testElbtn.style.fontWeight = '570';

const nme = testElbtn.nodeName;
const css = testElbtn.style;
console.log(testElbtn); //returns entire element property
console.log(nme); // returns the type of element
console.log(css); // returns the styles applied + other properties that can be applied

console.dir(document); // returns the properties we can work with all elements
