//Title//
var X = "Hello, World!";

window.alert(X);

//Variables//
var A = "\"This\" is a string" + "... It\'s a pun",
B = " (Lame)...", C = 3*3;

var Sent1 = " This is the beginning of the string.",
Sent2 = " This is the end of the string.";


//Text//
document.write(A+"..."+B+C);

document.write(Sent1 + Sent2)

//Button Function and Text//
function My_First_Function() {
    var str = "This is the top button text!";
    document.getElementById("Button_Text") .innerHTML = str;
}

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }