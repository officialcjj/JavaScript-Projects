
/*----Counts to five----*/
function Count() {
    var Digit = "";
    let X = 1;
    while (X < 6) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("counting").innerHTML = Digit;
}

/*----------Lists instruments with strings----------*/
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute" ];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        if (Y === 1) { continue; }
        Content += Instruments[Y] + "<br>";
        if (Y === 4) { break; }
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

/*-------Displays a chosen element-------*/
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[4] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

/*-------This one's just a sentence-------*/
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    Musical_Instrument.discount = "10%";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price  +
    " with a " + Musical_Instrument.discount + " discount.";
}
