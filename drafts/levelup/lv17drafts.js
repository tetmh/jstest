// local storage
// web storage API that allows us to store data in the browser
// local storage is persistent, data is stored until explicitly deleted
// session storage is temporary, data is cleared when the page session ends

// setItem, getItem, removeItem, clear, key, length

localStorage.setItem('name', 'john_doe'); // store data
localStorage.setItem('gender', 'male'); // store data    
localStorage.setItem('age', '30');




const name = localStorage.getItem('name');
console.log(name);
localStorage.removeItem('age'); // remove specific item

const age2= localStorage.getItem('age');
console.log(age2); // null, since age was removed

localStorage.clear(); // clear all items in local storage

sessionStorage.setItem('session_id', 'abc123'); // store data in session storage

// multiple items in session storage

const friends = ['Alice', 'Bob', 'Charlie'];

localStorage.setItem('friends', JSON.stringify(friends)); // store array as string

const storedFriends = JSON.parse(localStorage.getItem('friends')); // retrieve and parse array
console.log(storedFriends[1]); // ['Alice', 'Bob', 'Charlie']

let fruits;
if (localStorage.getItem('fruits')) { //finding/checking if fruits exist in local storage
    fruits = JSON.parse(localStorage.getItem('fruits'));
}
else {    
    fruits=[]
}
console.log(fruits);
fruits.push('apple');
fruits.push('banana');
localStorage.setItem('fruits', JSON.stringify(fruits)); // store updated array in local storage