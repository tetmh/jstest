const name = ['anne', 'julie', 'helga'];
const last = ' andrews';

let newName = [];

for (let y = 0; y < name.length; y++) {
    console.log(name[y]);
    newName.push(`${name[y]} ${last}`);

    // newName[y] = name[y] + last;

    // console.log(newName);
}
console.log(newName);
