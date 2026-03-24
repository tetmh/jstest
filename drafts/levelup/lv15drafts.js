
const  container = document.querySelector('.cntnr2');
const  btn15 = document.querySelector('.btn15');
// const  hd15 = document.querySelector('.hd1');

function testfunc() {
    console.log('test h1');
}

btn15.addEventListener('click', function() {
    const newElement = document.createElement('h1');
    newElement.classList.add('hd1');
    newElement.textContent = 'New Heading inside container';

    container.appendChild(newElement);
});

container.addEventListener('click', function(e) {
    if(e.target.classList.contains('hd1')) {
        console.log('h1s');  
}   


// hd15.addEventListener('click', testfunc )