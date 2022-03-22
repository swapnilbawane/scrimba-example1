let number1 = 20; 

document.getElementById("number-entered").textContent = number1; 

//  LENGTH
//    1 mtr = 3.28084; for an approximate result, multiply the length value by 3.281
//   1 feet = 0.3048; for an approximate result, divide the length value by 3.281 

// VOLUME
// 1 litre = 0.264172 gallon; for an approximate result, divide the volume value by 3.785
// 1 gallon = 3.78541 litres; for an approximate result, multiply the volume value by 3.785



function lengthmtrFeet()
{  
let resultLengthFeet = number1*3.281; 
let resultLengthMeters = number1/3.281; 
let resultVolumeGallons = number1/3.785;
let resultVolumeLitres = number1*3.785;
let resultMassPounds = number1/2;
let resultMassKilos = number1*2;
document.getElementById("length-result").textContent =  number1 + " meters = " + resultLengthFeet + " feet " + " | " + number1 + " feet = " + resultLengthMeters + " meters";
document.getElementById("volume-result").textContent = number1 + " litres = " + resultVolumeGallons + " gallons " + " | " + number1 + " gallons = " + resultVolumeLitres + " litres "; 
document.getElementById("mass-result").textContent = number1 + " kilos = " + resultMassPounds + " pounds " + " | " + number1 + " pounds = " + resultMassKilos + " kilos "; 
}

// 20 meters = 65.616 feet | 20 feet = 6.096 meters 
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters 
//  20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos 


function customvalue() 
{ 
let number2 = +prompt("enter a value");    
alert("The number entered is " + number2);
alert(typeof(number2));
}

function massKg() 
{ 
}