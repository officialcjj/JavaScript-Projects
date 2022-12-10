window.alert(Math.round(Math.random() * 100));

function additionFunction() {
    var A = 2+2;
    A++;
    document.getElementById("add").innerHTML = "(2 + 2) + 1 = "+ A;
}

function subtractionFunction() {
    var B = 4-2;
    document.getElementById("subtract").innerHTML = "4 - 2 = "+ B;
}

function multiplicationFunction() {
    var C=5*5;
    document.getElementById("multiply").innerHTML = "5 * 5 = "+ C;
}

function divisionFunction() {
    var C=25/5;
    document.getElementById("divide").innerHTML = "25 / 5 = "+ C;
}

function all4Function() {
    var C=((4+4)*2)/4-4;
    document.getElementById("all4").innerHTML = "((4 + 4) * 2) / 4 - 4 = "+ C;
}

function remainderFunction() {
    var C = 25 % 6;
    C--;
    document.getElementById("remainder").innerHTML = "(% (25 / 6)) - 1 = "+ C;
}

function negationFunction() {
    var C = 25 % 6;
    document.getElementById("negativeremainder").innerHTML = "-% (25 / 6) = "+ -C;
}