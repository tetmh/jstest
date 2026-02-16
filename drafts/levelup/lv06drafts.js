// createElement ('element')
// createTextNod('text content')
// element.appendChild (childElement)
// insertBefore(element,location)
// replaceChild ('new','old')

const res = document.querySelector('#dfr06');
const h1F = document.querySelector('.color2');

// create empty element
const emp = document.createElement('div');
// create text node
const txt = document.createTextNode('hello new div');
emp.appendChild(txt);
// res.appendChild(emp);
document.body.insertBefore(emp, res);
// document.body.appendChild(emp); // this will append to body and shown last after divs

const hd = document.createElement('h2');

const hdTxt = document.createTextNode('h2 from JS');
hd.appendChild(hdTxt);
hd.classList.add('color3');
res.insertBefore(hd, h1F);
//  res.appendChild(hd);

const smH = document.createElement('h4');
const smTxt = document.createTextNode('h4 from JS');
smH.classList.add('color3');
smH.append(smTxt);
document.body.replaceChild(smH, emp);

console.log(res.children);
