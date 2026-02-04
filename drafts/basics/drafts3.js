// objects
// object- key/value pairs methods
// arrays,fxn,obj

const person = {
    lstName: 'cool', // comma is a must for next property
    fstName: 'john', // it wont save by itself to add comma automatically
    age: 50,
    status: 'single',
    testCall: function () {
        console.log('hello objects');
    },
};
//console.log(person.testCall); // should not use console.log anymore
person.testCall();
console.log(person.status);
