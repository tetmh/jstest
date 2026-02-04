// conditional statements
// <,>,<=,>=, ==,===, !=.!==

// logical operators
// ||- OR &&-AND, !

// switch
// dice values: 1-6

// const val1 = 10;
// const val2 = 20;

// const res = val1 != val2; //checks only value
// const res2 = val1 !== val2; //checks value and type

// console.log(res);
// console.log(res2);
// if (val1 < 20 && val2 > 6) {
//     console.log('kampai');
// } else {
//     console.log('error');
// }

const dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
if (dice === 2) {
    console.log('perfect!');
}

switch (dice) {
    case 1:
        console.log('its 1');
        break;
    case 2:
        console.log('its 2');
        break;
    case 3:
        console.log('its 3');
        break;
    case 4:
        console.log('its 4');
        break;

    default:
        console.log('try again');
}
