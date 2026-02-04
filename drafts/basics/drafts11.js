// math objects
const num = 99;
const res = Math.sqrt(num);

const res2 = Math.floor(Math.random() * 9) + 1;

console.log(res);

console.log(res2);

//date objects

const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const days = [];
const date = new Date();
console.log(date);

const mn = date.getMonth();
console.log(month[mn]);

const dy = date.getDay();
console.log(day[dy]);

console.log(date.getDate()); // returns cal day number
console.log(date.getFullYear()); // returns current year

const today = `${day[dy]}, ${date.getDate()}, ${
    month[mn]
}, ${date.getFullYear()}`;

console.log(today);

document.body.innerHTML = today;
