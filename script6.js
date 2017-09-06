var euro = document.getElementById("txt");
	var dollar = document.getElementByClass("myList2");
	var euroDollar = document.getElementByClass("myList3");

function myFunction1() {
    var euro = prompt("How much whould you like to change?")
    alert("You will have " + euro * 30 + " UAH");
}

function myFunction2() {
    var dollar = prompt("How much whould you like to change?")
    alert("You will have " + dollar * 25 + "UAH");
}

function myFunction3() {
    var euroDollar = prompt("How much whould you like to change?")
    alert("You will have " + euroDollar * 1.08 + "$");
}
