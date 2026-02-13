// events
// select Element
// addEventListener()
// what todo, which event

const btn2 = document.querySelector('.btn2');
const hd4 = document.querySelector('#h4tst');
//hd4.classList.add('color4');

// btn2.addEventListener('click', function () { // ref as a callback anonymous
//     //hd4.classList.add('color4');
//     //console.log('clicked');
//     hd4.classList.value = '';
// });
function changeClass() {
    console.log('testing function');
    hd4.classList.add('color4');
    //console.log('clicked');
    //hd4.classList.value = '';

    let k = hd4.classList.contains('color3');
    if (k) hd4.classList.remove('color3');
    else {
        hd4.classList.add('color3');
        console.log('class added');
    }
}

btn2.addEventListener('click', changeClass);
// function call ^^ref as a function, do not add ()

//console.log(btn2);
