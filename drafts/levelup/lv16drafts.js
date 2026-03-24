// form submit listener
// prevent default form submission behavior
// how to get value from input field

const form = document.getElementById('frm');
const name = document.getElementById('name');
const pasw = document.getElementById('pw');

form .addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted');
    console.log (name.value);
    console.log(pasw.value);

});