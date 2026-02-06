// querySelector('any css') : pass any css id/ class  returns single instance
// querySelectorAll('any css') : returns all instances
// returns Nodes- so need to transform to array
// can use forEach method

const mnLst = document.querySelector('#tstList');
//mnLst.style.backgroundColor = 'green';

const lst = document.querySelector('.rare');
const sec2 = (lst.nextElementSibling.style.color = 'pink');
console.log(lst);
const last = document.querySelector('#mo');
const last2 = (last.previousSibling.previousSibling.style.color = 'green');
console.log(last2);
// const sec = (lst.nextElementSibling.style.color = 'green');

// lst[0].style.color = 'red';
// lst.forEach(function (test) {
//     //can apply styles for all occurrence of class
//     test.style.color = 'red';
// });

// const lst2 = document.querySelector('li:last-child');
// lst2.style.color = 'yellow';

// child Nodes
// returns childNodes inc whitespace w/c is trated as text node

// children -> returns exact count of list
// firsChild ->returns text
// lastChild ->returns text

// const mnLst2 = document.querySelector('#tstList');
// const allChild = mnLst2.childNodes;
// console.log(allChild);
// const allChild2 = mnLst2.children;
// console.log(allChild2);
// console.log(mnLst2.firstChild);
// console.log(mnLst2.lastChild);
