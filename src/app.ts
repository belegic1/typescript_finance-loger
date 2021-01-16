

import { Invoce } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormater.js'


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!

const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoce(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
})

const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }

}
let docOne = addUID
    ({ name: 'yosh', age: 40 })

console.log(docOne.name);

enum ResourceType { Book, Author, Fim, Director, Person }

interface Resoure<T> {
    uid: number;
    resourceName: string;
    data: T;
}

let arr = ['ryu', 25, true]

arr[0] = false
arr[1] = 'Dragan'

arr = ['4']

let tup: [string, number, boolean] = ['ryu', 32, false]

tup[0] = 'ken'
tup[1] = 6