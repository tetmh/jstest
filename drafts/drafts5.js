// loops

// while, do while- while true

let val1 = Math.floor(Math.random() * 18) + 1;
console.log(val1);
let val2;
while (val1 < 16 && val1 > 2) {
    console.log(val1 + ' will loop');
    val1 = Math.floor(Math.random() * 18) + 1;
    console.log(val1);
}

do {
    val2 = Math.floor(Math.random() * 20) + 1;
    console.log(val2);
} while (val2 < 20 && val2 > 2);
{
    console.log(val2 + ' will loop for val2');
    val2 = Math.floor(Math.random() * 20) + 1;
    console.log(val2);
}

let n;

for (n = 0; n < 8; n++) {
    n = n + 1;
    console.log('continue ' + n);
    n--;
}
