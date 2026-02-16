// innerHTML >> returns whole HTML structure of element
// textContent >> returns plain text only

const list = document.getElementById('lst');
const div = document.getElementById('drf08');
const itm = document.querySelector('.color3');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

// create an unordered list

const ul = document.createElement('ul');
ul.innerHTML = `<li class="color3">
                    list1
                </li>
                <li>
                    list2
                </li>
                <li>
                    list3
                </li>
                <li>
                    list4
                </li>`;

document.body.appendChild(ul);
