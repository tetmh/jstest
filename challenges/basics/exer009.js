const food = [30, 40, 50];
const gas = [8, 10, 13];

function calTotal(arr) {
    let total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
const foodTotal = calTotal(food);
const gasTotal = calTotal(gas);

console.log({
    gas: gasTotal,
    food: foodTotal,
});
