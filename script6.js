var euro = document.getElementById("list1");
	var dollar = document.getElementById("list2");
	var euroDollar = document.getElementById("list3");

function myFunction1() {
    var euro = prompt("change euro")
    alert("your money" + euro * 30 + " UAH");
}

function myFunction2() {
    var dollar = prompt("change dollar")
    alert("your money " + dollar * 25 + "UAH");
}

function myFunction3() {
    var euroDollar = prompt("change euro per dollar")
    alert("your money " + euroDollar * 1.08 + "$");
}
