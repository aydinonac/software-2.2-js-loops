let res3 = "";
let res4 = "";
let res12 = "";
let resnot = "";

for (let i=1; i<=100; i++) {
  if     ((i % 12) == 0) {res12 += i + ", ";}
  else if ((i % 3) == 0) {res3 += i +  ", ";}
  else if ((i % 4) == 0) {res4 += i +  ", ";}
  else {resnot += i +  ", ";}
}

document.getElementById("div12").style.color="blue";
document.getElementById("div12").innerHTML = "{ " + res12 + "} are divisible by 3 and 4";

document.getElementById("div3").style.color="blue";
document.getElementById("div3").innerHTML = "{ " + res3 + "} are divisible by 3";

document.getElementById("div4").style.color="blue";
document.getElementById("div4").innerHTML = "{ " + res4 + "} are divisible by 4";

document.getElementById("divnot").style.color="red";
document.getElementById("divnot").innerHTML = "{ " + resnot + "} are not divisible by 3 or 4";