const hd3 = document.querySelector('h3');
const btn11 = document.querySelector('#tst_btn11');

// document.body.addEventListener('click', function (e) {
//     if (e.target.matches('.btn11') || e.target.closest('.btn11')) {
//         console.log('Button clicked via delegation!');
//         // Your code here
//     }
// });
btn11.addEventListener('click', function () {
    console.log('CLICKED');
});
btn11.addEventListener('mousedown', function () {
    console.log('down');
});
btn11.addEventListener('mouseup', function () {
    console.log('up');
});

// mouse enter
// mouse leave

hd3.addEventListener('mouseenter', function () {
    hd3.classList.add('colors11');
});
hd3.addEventListener('mouseleave', function () {
    hd3.classList.remove('colors11');
});
