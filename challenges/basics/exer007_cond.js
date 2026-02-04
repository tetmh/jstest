// ## Conditional Statements #7

// 1. create two objects "person1", "person2"
// 2. setup name,age (15-25),
//    status ('resident', 'tourist') keys

// 3. setup if else, condition where
//    age must be bigger than 18 and status must be
//    equal to 'resident'
// 4. test with both objects

const person1 = {
    name: 'kim',
    age: 17,
    status: 'tourist',
};

const person2 = {
    name: 'jean',
    age: 22,
    status: 'resident',
};

if (
    (person1.age || person2.age) >= 18 &&
    person1.status === 'resident' &&
    person2.status === 'resident'
) {
    console.log('can vote');
} else {
    console.log('go home');
}
