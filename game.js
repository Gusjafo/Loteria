let rndmArray = [];
document.querySelector("body").addEventListener("click", pushRndInArray);
document.querySelector("body").addEventListener("keypress", pushRndInArray);

function pushRndInArray() {
  let rndmNumber = Math.floor(Math.random() * 90);
  rndmArray.push(rndmNumber);
  let logArray = rndmArray.length;
  document.querySelector(".oldNumber").innerHTML = rndmArray;
  document.querySelector(".newNumber").innerHTML = rndmArray[logArray - 1];
  if((rndmNumber%10) === 0){
    document.querySelector("p").innerHTML = "Fuerza SOFI !!!"
  }
  if((rndmNumber%3) === 0){
    document.querySelector("p").innerHTML = " "
  }

}
