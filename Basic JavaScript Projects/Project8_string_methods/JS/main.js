function full_Sentence() {
    var a = "I have ";
    var b = "made this ";
    var c = "into a complete ";
    var d = "sentence. "
    var whole_sentence = a.concat(b,c,d);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "I'm late! I'm late! I'm Late! For a very important date!"
    var Section = Sentence.slice(19,29);
    document.getElementById("Slice").innerHTML = Section.toUpperCase();
    let position = Sentence.search("Late");
    document.getElementById("Late").innerHTML = position;
}

function string_Method() {
    var X = 676;
    document.getElementById("string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 2.71828;
    var Y = X.toFixed(2);
    var Z = X.valueOf();
    document.getElementById("Precision").innerHTML = X.toPrecision(4);
    document.getElementById("toFixed").innerHTML = Y;
    document.getElementById("valueOf").innerHTML = Z;
}

