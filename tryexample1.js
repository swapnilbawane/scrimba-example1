function customvalue() 
{ 

// Get input and convert it into a number
let customValueEntered = +(document.getElementById("input-area").value);

// Update value in the upper part 
document.getElementById("number-entered").textContent = customValueEntered; 

// Calculate unit conversions 
let resultLengthFeet = customValueEntered*3.28084;
let rndFeet = resultLengthFeet.toFixed(3);

let resultLengthMeters = customValueEntered*0.3048;
let rndMeters = resultLengthMeters.toFixed(3);

let resultVolumeGallons = customValueEntered*0.264172;
let rndGallons = resultVolumeGallons.toFixed(3);

let resultVolumeLitres = customValueEntered*3.785411784;
let rndLitres = resultVolumeLitres.toFixed(3);

let resultMassPounds = customValueEntered*2.20462;
let rndPounds = resultMassPounds.toFixed(3);

let resultMassKilos = customValueEntered*0.453592;
let rndKilos = resultMassKilos.toFixed(3);

// Display it on screen 
document.getElementById("length-result").textContent =  customValueEntered + " meters = " + rndFeet + " feet " + " | " + customValueEntered + " feet = " + rndMeters + " meters";
document.getElementById("volume-result").textContent = customValueEntered + " litres = " + rndGallons + " gallons " + " | " + customValueEntered + " gallons = " + rndLitres + " litres "; 
document.getElementById("mass-result").textContent = customValueEntered + " kilos = " + rndPounds + " pounds " + " | " + customValueEntered + " pounds = " + rndKilos + " kilos "; 

}

function refresh () 
{
    // Update the top area with 0
    document.getElementById("number-entered").textContent = 0;

    // Use .value for input type to reinitialize it to 0. 
    document.getElementById("input-area").value = 0;
    document.getElementById("length-result").textContent = " ";
    document.getElementById("volume-result").textContent = " ";
    document.getElementById("mass-result").textContent = " ";

}



// CALCULATIONS:: 

// --------------------------------------------------------------
// as per Google. but its inaccurate 
//  LENGTH
//    1 mtr = 3.28084; for an approximate result, multiply the length value by 3.281
//   1 feet = 0.3048; for an approximate result, divide the length value by 3.281 

// VOLUME
// 1 litre = 0.264172 gallon; for an approximate result, divide the volume value by 3.785
// 1 gallon = 3.78541 litres; for an approximate result, multiply the volume value by 3.785

// MASS
//  1 kilo = 2.20462 pounds; for an approximate result, multiply the mass value by 2.205
//  1 pound = 0.453592 kilos; for an approximate result, divide the mass value by 2.205

// --------------------------------------------------------------

// FINAL RESULTS SHOULD LOOK LIKE

// 20 meters = 65.616 feet | 20 feet = 6.096 meters 
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters 
//  20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos 

// --------------------------------------------------------------

//  REDUNDANT CODE

// function checkround()
// {
//    // 20 meters = 65.616 feet | 20 feet = 6.096 meters

//    var x= 20;
//    alert(x);
//    var y = x*3.28084
//    alert(y);
//    var yround = y.toFixed(3);
//    alert(yround);
   
// }


// function massKg() { }
// alert(typeof(number2));

// function lengthmtrFeet()
// {  
// let resultLengthFeet = number1*3.281; 
// let resultLengthMeters = number1/3.281; 
// let resultVolumeGallons = number1/3.785;
// let resultVolumeLitres = number1*3.785;
// let resultMassPounds = number1*2.205;
// let resultMassKilos = number1/2.205;
// document.getElementById("length-result").textContent =  number1 + " meters = " + resultLengthFeet + " feet " + " | " + number1 + " feet = " + resultLengthMeters + " meters";
// document.getElementById("volume-result").textContent = number1 + " litres = " + resultVolumeGallons + " gallons " + " | " + number1 + " gallons = " + resultVolumeLitres + " litres "; 
// document.getElementById("mass-result").textContent = number1 + " kilos = " + resultMassPounds + " pounds " + " | " + number1 + " pounds = " + resultMassKilos + " kilos "; 
// }

// let number1 = 20; 

// document.getElementById("number-entered").textContent = number1; 

// let number2 = +prompt("enter a value");    
// alert("Txhe number entered is " + number2);
// alert(typeof(number4));
// alert("enter number is " + customValueEntered);