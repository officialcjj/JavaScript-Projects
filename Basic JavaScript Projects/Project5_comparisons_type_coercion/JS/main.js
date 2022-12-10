document.write("10" + 5);
document.write(typeof 105);
document.write(3E333);
document.write(-3E333);
document.write(2>1);
document.write(1>2);
document.write(10==10);
document.write(10==1);
A = 02;
B = 02;
C = "02";
D = "String";
E = "String2";
document.write(A===B);
document.write(A===D);
document.write(A===C);
document.write(D===E);
document.write(5 > 2 && 4 > 10);
document.write(5 > 2 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 4 > 10);


function myFunction() {
    document.getElementById("Test").innerHTML = 0/0;
}


function myFunction2() {
    document.getElementById("Test2").innerHTML = isNaN(0/0);
}


function myFunction3() {
    document.getElementById("Test3").innerHTML = isNaN(0);
}

function myFunction4() {
    document.getElementById("Test4").innerHTML = !(20>10);
}

function myFunction5() {
    document.getElementById("Test5").innerHTML = !(10>20);
}