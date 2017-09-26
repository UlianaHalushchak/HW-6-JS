var andru = {
    firstName: "Andru",
    lastName: "Myhasj",
};

var marija = {
    firstName: "Marija",
    lastName: "Myhasj",
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

var add  = function(firstName, lastName,)
{
var contactSize = contacts.length;
var Person = new Object();
Person.firstName = firstName;
Person.lastName = lastName;
contacts[contactSize] = Person;

};

list();
search("Myhasj");
var response1 = prompt("First Name?");
var response2 = prompt("Last Name?");
add(response1, response2);
