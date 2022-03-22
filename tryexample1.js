

//  LENGTH
//    1 mtr = 3.28084; for an approximate result, multiply the length value by 3.281
//   1 feet = 0.3048; for an approximate result, divide the length value by 3.281 

// VOLUME
// 1 litre = 0.264172 gallon; for an approximate result, divide the volume value by 3.785
// 1 gallon = 3.78541 litres; for an approximate result, multiply the volume value by 3.785

// MASS
//  1 kilo = 2.20462 pounds; for an approximate result, multiply the mass value by 2.205
//  1 pound = 0.453592 kilos; for an approximate result, divide the mass value by 2.205

// 20 meters = 65.616 feet | 20 feet = 6.096 meters 
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters 
//  20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos 


function customvalue() 
{ 
let number2 = +prompt("enter a value");    
alert("The number entered is " + number2);
document.getElementById("number-entered").textContent = number2; 
let resultLengthFeet = number2*3.281; 
let resultLengthMeters = number2/3.281; 
let resultVolumeGallons = number2/3.785;
let resultVolumeLitres = number2*3.785;
let resultMassPounds = number2*2.205;
let resultMassKilos = number2/2.205;
document.getElementById("length-result").textContent =  number2 + " meters = " + resultLengthFeet + " feet " + " | " + number2 + " feet = " + resultLengthMeters + " meters";
document.getElementById("volume-result").textContent = number2 + " litres = " + resultVolumeGallons + " gallons " + " | " + number2 + " gallons = " + resultVolumeLitres + " litres "; 
document.getElementById("mass-result").textContent = number2 + " kilos = " + resultMassPounds + " pounds " + " | " + number2 + " pounds = " + resultMassKilos + " kilos "; 

}

function refresh () 
{
    document.getElementById("number-entered").textContent = 0;
    document.getElementById("length-result").textContent = " ";
    document.getElementById("volume-result").textContent = " ";
    document.getElementById("mass-result").textContent = " ";

}

//  redundant code 
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