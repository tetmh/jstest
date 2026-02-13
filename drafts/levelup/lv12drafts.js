const tstInput = document.getElementById('txtInput');

tstInput.addEventListener('keypress', function () {
    // console.log('press');
});

// tstInput.addEventListener('keydown', function () {
//     console.log('down');
// });

tstInput.addEventListener('keyup', function () {
    console.log(tstInput.value);
    // console.dir(tstInput);
    // know where/what  value is stored
});

// tstInput.addEventListener('click', function () {
//     console.log('click');
// });
