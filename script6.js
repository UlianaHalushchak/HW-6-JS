var euro = document.getElementById("list1");
	var dollar = document.getElementById("list2");
	var euroDollar = document.getElementById("list3");

function change1() {
    var euro = prompt("change euro")
    alert("your money" + euro * 30 + " UAH");
}

function change2() {
    var dollar = prompt("change dollar")
    alert("your money " + dollar * 26 + "UAH");
}

function change3() {
    var euroDollar = prompt("change euro per dollar")
    alert("your money " + euroDollar * 1.08 + "$");
}
