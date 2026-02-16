// event object arg e,evt
// info on triggered event
// event.type
// event.currentTarget
// 'this' keyboard
// preventDefault()

const hd3 = document.querySelector('h3');
const btn13a = document.querySelector('#tst_btn13a');
// const btn13b = document.querySelector('#tst_btn13b');
// const btn13c = document.querySelector('#tst_btn13c');
const btns = document.querySelectorAll('.btn2');
const lnk = document.getElementById('link');

hd3.addEventListener('click', function (event) {
    hd3.classList.add('color3');
    console.log(event.currentTarget);
    // console.log(event);
});

function fxnLnk(e) {
    e.preventDefault();
}
lnk.addEventListener('click', fxnLnk);
// currentTarget vs Target
// currentTarget -> always refers to the element to which the current handler has been attached to
// target - identifies the element on which the event occured

btn13a.addEventListener('click', function (event) {
    // event.classList.add('colors4');
    event.currentTarget.classList.add('btn2');
    console.log(event.type);
    console.log(event.currentTarget);
});

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // console.log(e.currentTarget);
        // e.currentTarget.style.color = 'purple';
        console.log('target', e.target);
        e.target.style.color = 'gold';
    });
});
// addEventListener('click');
