let number1 = 20; 

document.getElementById("number-entered").textContent = number1; 

//  LENGTH
//    1 mtr = 3.28084; for an approximate result, multiply the length value by 3.281
//   1 feet = 0.3048; for an approximate result, divide the length value by 3.281 
function lengthmtrFeet()
{  
let resultLengthFeet = number1*3.281; 
let resultLengthMeters = number1/3.281; 

document.getElementById("length-result").textContent =  number1 + " meters = " + resultLengthFeet + " feet " + " | " + number1 + " feet = " + resultLengthMeters + " meters"
}

// VOLUME
// 1 litre = 0.264172 gallon; for an approximate result, divide the volume value by 3.785
// 1 gallon = 3.78541 litres; for an approximate result, multiply the volume value by 3.785

function volumeltrGallon() 
{
let resultVolumeGallons = number1/3.785;
let resultVolumeLitres = number*3.785; 
  
document.getElementById("volume-result").textContent = number1 + " litres = " + resultVolumeGallons + " gallons " + " | " + number1 + " gallons = " + resultVolumeLitres + " litres "  
}

function massKg() 
{
let resultMassPounds;
let resultMassKilos;
  
number1 + " kilos = " + resultMassPounds + " pounds " + " | " + number1 + " pounds = " + resultMassKilos + " kilos "   
}