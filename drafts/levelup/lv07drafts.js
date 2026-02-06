// prepend
// innterText

const hd = document.createElement('h3');

hd.innerText = `test JS h3`;

document.body.prepend(hd);

// remove
// removeChild

const res = document.querySelector('#dfr06');

const hdTxt = res.querySelector('h4');
res.removeChild(hdTxt);
console.log(hdTxt);
// res.remove();
// console.log(hd);
