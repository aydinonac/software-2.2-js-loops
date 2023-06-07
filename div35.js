let text35 = "";
const testnums = [25, 26, 27, 28, 29, 30];
testnums.forEach(myFunction35);

function myFunction35(n) {
  if ( (n % 15) == 0 ) {
    text35 += n + " is divisible by both 3 and 5" + "<br>";
  } else if ( (n % 3) == 0 ) {
    text35 += n + " is divisible by 3" + "<br>";
  } else if ( (n % 5) == 0 ) {
    text35 += n + " is divisible by 5" + "<br>";
  } else {text35 += n + " is not divisible by 3 or 5" + "<br>";}

document.getElementById("div35").style.fontSize="22px";
document.getElementById("div35").style.color="blue";
document.getElementById("div35").innerHTML = text35;
}