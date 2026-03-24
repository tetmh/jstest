// bubling -event propagation 
// bubbling happens by default.
// event capturing- fires at the root and fires until reaches the target element.

const container = document.querySelector('.container');
const itm = document.querySelector('.itm');

function showBubbling(e) {
console.log('current target: ', e.currentTarget);
// console.log('target: ', e.Target);
//     if(e.target.classList.contains('lnk')) {
//         console.log('link clicked');
            
//     }
}

function stpPropagation(e) {   
    console.log('list clicked');
    e.stopPropagation();

}

itm.addEventListener('click', showBubbling,{capture: true});
// itm.addEventListener('click', stpPropagation);
container.addEventListener('click', showBubbling,{capture: true})
window.addEventListener('click', showBubbling,{capture: true})