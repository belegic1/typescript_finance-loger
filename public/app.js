import { Invoce } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoce(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yosh', age: 40 });
console.log(docOne.name);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["Fim"] = 2] = "Fim";
    ResourceType[ResourceType["Director"] = 3] = "Director";
    ResourceType[ResourceType["Person"] = 4] = "Person";
})(ResourceType || (ResourceType = {}));
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'Dragan';
arr = ['4'];
let tup = ['ryu', 32, false];
tup[0] = 'ken';
tup[1] = 6;
