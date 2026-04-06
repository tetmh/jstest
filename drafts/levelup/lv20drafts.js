/*
scroll event on element or document

The scroll event is fired when the document view or an element has been scrolled. 
This event does not bubble and is not cancelable.
scrollY

only utilized if it is scrollable, otherwise you cant see any logs shown

Element.getBoundingClientRect()

The getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
*/

window.addEventListener('scroll', function() {
    //console.log('now');
    console.log(window.scrollY + 'px');
    console.log(window.scrollX + 'px');
    

});
console.log('height:'+ window.innerHeight );
console.log('width:'+ window.innerWidth );

const btn2 = document.querySelector('.btn2');
const box = document.querySelector('.box');

btn2.addEventListener('click', function() {
    const vals =box.getBoundingClientRect();
    console.log(vals);
});

window.addEventListener('resize', function() {
    console.log(window.innerHeight );
    console.log(window.innerWidth );
});