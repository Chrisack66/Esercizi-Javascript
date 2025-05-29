const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const age = document.getElementById('age').value;

const person = {
firstName: firstName,
lastName: lastName,
age: Number(age)
};

const form = document.querySelector('form');

form.setAttribute('data-person', JSON.stringify(person));