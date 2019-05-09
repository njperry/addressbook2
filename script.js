"use strict";
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        // this.contacts.push(info);
        this.contacts = [...this.contacts,  info];
       }
    deleteAt(index) {
        this.contacts = [...this.contacts.slice(0, index), ...this.contacts.slice(index + 1)];
    }
    display() {
        document.querySelector(".contact_list").innerHTML ="";
        let count = 0;
        for (let contact of this.contacts) {
            const newEntry = document.createElement("div");
            newEntry.setAttribute("index", count);
            newEntry.classList.add("contact_box");
            newEntry.innerHTML =`
            <p>Name: ${contact.name}</p>
            <p>Email: ${contact.email}</p>
            <p>Phone: ${contact.phone}</p>
            <p>Relation: ${contact.relation}</p>
            <i class="fas fa-trash" aria-hidden="true"></i>
            `;
            document.querySelector(".contact_list").append(newEntry);
            count++;
        }
    }
}

document.querySelector("form").addEventListener("submit", addContact);

function addContact(e) {
    e.preventDefault();
    let inputElements = document.querySelectorAll("input");
    const info = new Contact(inputElements[0].value, inputElements[1].value, inputElements[2].value, inputElements[3].value);
    book.add(info);
    for(let input of inputElements) {
        input.value = "";
    }
    book.display();
    console.dir(book);
}

document.querySelector("main").addEventListener("click", deleteContact);

function deleteContact(e) {
    if (e.target.classList.contains("fa-trash")) {
        const index = e.target.parentNode.getAttribute("index");
        book.deleteAt(index);
        book.display();
    }
}

const book = new AddressBook();
