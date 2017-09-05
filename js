/* variable for event */
window.onload = function () {
    alert ('Welcome')
}

/* variable for person name */

var andru = {
    firstName: "Andru",
    lastName: "Myhasj",

    phoneNumber: "(068) 777 - 7777",
    email: "andru.myhasj@example.com"
};

var marija = {
    firstName: "Marija",
    lastName: "Myhasj",



 phoneNumber: "(068) 888 - 8888",
    email: "marija.myhasj@example.com"
};

var contacts = [andru, marija];

function printPerson (person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactSize = contacts.length;
    for (i = 0; i < contactSize; i++) {
        printPerson(contacts[i]);
    }
}

var search = function(lastName) {
    var contactSize = contacts.length;
    for(i = 0; i < contactSize; i++){
     if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        }
    }
};

var add  = function(firstName, lastName, email, telephone)
{
var contactSize = contacts.length;
var Person = new Object();
Person.firstName = firstName;
Person.lastName = lastName;
Person.email = email;
Person.telephone = telephone;
contacts[contactSize] = Person;


};

list();
search("Myhasj");
var response1 = prompt("First Name?");
var response2 = prompt("Last Name?");
var response3 = prompt("Email?");
var response4 = prompt("Telephone No.?");
add(response1, response2, response3, response4);

/* variable for time in index.html  */

/* variable for place */

var url = 'https://inspired.com.ua/ideas/sites/10-sites-coding-online/checkout/cart/add/10 САЙТІВ ДЛЯ ТИХ, ХТО ХОЧЕ НАВЧИТИСЬ ПРОГРАМУВАННЮ ОНЛАЙН';
var array = url.split('add/');
alert(array[1]);








