function CtoF(){
    var celsius = document.getElementById("celsius").value;
    var fahrenheit=(celsius*9/5)+32;
    document.getElementById("fahrenheit").value=fahrenheit
}

function weight(){
    var kilo = document.getElementById("kilo").value;
    var Pounds=kilo*2.2;
    document.getElementById("pounds").value=Pounds;
}

function distance(){
    var kms = document.getElementById("km").value;
    var miles=kms*0.62137;
    document.getElementById("miles").value=miles;
}