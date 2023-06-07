let text = "";
const years = [1999, 2000, 1900, 2024];
years.forEach(myFunction);

function myFunction(year) {
  if ( (year % 400) == 0 ) {
    text += year + " is a leap year" + "<br>";
  } else if ( (year % 100) == 0 ) {
    text += year + " is not a leap year" + "<br>";
  } else if ( (year % 4) == 0 ) {
    text += year + " is a leap year" + "<br>";
  } else {text += year + " is not a leap year" + "<br>";}
document.getElementById("leapyears").style.fontSize="22px";
document.getElementById("leapyears").style.color="blue";
document.getElementById("leapyears").innerHTML = text;
}