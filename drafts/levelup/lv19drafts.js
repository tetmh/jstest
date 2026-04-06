/*

The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, 
without waiting for stylesheets, images, and subframes to finish loading. 

The load event is fired when the whole page has loaded, 
including all dependent resources such as stylesheets and images.

2ways: via window and document objects
window.addEventListener('DOMContentLoaded', function() {
-- code --
 }
);

document.addEventListener('DOMContentLoaded', function() {
-- code --
 
}
);

scroll event on element or document

The scroll event is fired when the document view or an element has been scrolled. 
This event does not bubble and is not cancelable.
*/

// html script should be at the beginning of the body for DOM contents to take effect
window.addEventListener('DOMContentLoaded', function() {
    const  hdtest= document.querySelector('h3');
    hdtest.style.color='green'
    console.log(hdtest);
    console.log(getComputedStyle(hdtest).color); 
});

window.addEventListener('load', function() {
    const imgtest = document.querySelector('img');
    console.log(imgtest);
    console.log(imgtest.width);
});

