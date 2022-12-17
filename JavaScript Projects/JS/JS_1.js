/*-----------Switch Function------------*/
function color_Function() {

    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";

    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Orange":
            Color_Output = "Orange" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Indigo":
            Color_Output = "Indigo" + Color_String;
        break;
        case "Violet":
            Color_Output = "Violet" + Color_String;
        break;
        default:
            Color_Output = "Please enter your choice as written above.";
        
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

/*----------getElementsByClassName----------*/
function class_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 75, 0);
grd.addColorStop(0, "red");
grd.addColorStop(0.5, "purple");
grd.addColorStop(1, "blue");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 75, 50);

/*--------Transparency--------*/
ctx.globalAlpha = 0.2;
ctx.fillStyle = "blue"; 
ctx.fillRect(50, 50, 75, 50); 
ctx.fillStyle = "green"; 
ctx.fillRect(80, 80, 75, 50);