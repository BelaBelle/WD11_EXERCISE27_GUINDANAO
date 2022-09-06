
 let three = document.getElementById("three").checked;
 three.checked = true;

function changeColor(){
  let colorValue = document.getElementById("colorValue");
  let backgroundColors = document.getElementById("backgroundColor");
 
  let x = Math.floor(Math.random() * 255);
  let y = Math.floor(Math.random() * 255);
  let z = Math.floor(Math.random() * 255);
  let colors = "rgb(" + x + "," + y + "," + z + ")";
  backgroundColors.style.backgroundColor = colors;

  colorValue.innerHTML = `${x} ,${y} , ${z} `;

}

function changeColors(){
 
  let countdown = document.getElementById("countdown");
  let timeInterval = Number(document.getElementById("timeInterval").value)*1000;
  intervalId = setInterval(changeColor,timeInterval);

  let ten = document.getElementById("ten").checked;
  let fifteen = document.getElementById("fifteen").checked;
  let five = document.getElementById("five").checked;
 
  let timeLeft;


   


  if (ten == true) {
      timeLeft = 10;
      countdown.innerHTML = "10 Seconds";
      
    } else if (fifteen == true){
      timeLeft = 15;
      countdown.innerHTML = "15 Seconds";
    } 
    else if (five == true){
      timeLeft = 5;
      countdown.innerHTML = "5 Seconds";
    } 
    else{
      timeLeft = 3;
    }
  
    let timer = setInterval(function(){
      if (timeLeft<=0){
        clearInterval(timer);
        clearInterval(intervalId);
      }

      countdown.innerHTML = `${timeLeft} Seconds`;
      timeLeft --;
    },1000);


}


function refresh(){
window.location.reload();
}

let timerInput = document.getElementById("timeInterval");
let btn = document.getElementById("changeColorBtn");
btn.disabled = true;
timerInput.addEventListener("change", stateHandle);

function stateHandle() {
    if(document.getElementById("timeInterval").value === "") {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
}










