const circle = document.querySelector('#circle');
const upgradeButton = document.querySelector('#upgrade');
const rainContainer = document.getElementById("rain-container");
let money = 0;
let moneyPerClick = 1;




const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const container = document.getElementById("container");

const upgrade = document.getElementById("upgrade");

const moneyCounter = document.getElementById("money-counter");

startButton.addEventListener("click", function() {
  startScreen.style.display = "none";
  container.style.display = "block";
  
  // Add the rest of the game logic here
});







document.getElementById("start-button").addEventListener("click", function() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("rain-container").style.display = "block";
  startGame();

  let timer = 200; // 5 minutes in seconds
let intervalId = setInterval(function() {
  timer--;
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  timerContainer.innerHTML = `${minutes}:${seconds}`;
  if (timer === 0) {
    clearInterval(intervalId);
    gameOver();
  }
}, 1000);
});



const timerContainer = document.getElementById("timer-container");
const gameOverScreen = document.getElementById("game-over");
const moneyScore = document.getElementById("money-score");
const restartButton = document.getElementById("restart-button");
const finalScore = document.getElementById("money-score");


// Game timer




function startGame() {
 const coin = document.querySelector("#coin1_container").classList.add("falling");
 const bomb = document.querySelector("#bomb_container").classList.add("falling");
  

  // Registrer click
  document.querySelector("#coin1_container").addEventListener("click", clickCoin);
  document.querySelector("#bomb_container").addEventListener("click", clickBomb);




  const coinContainers = document.querySelectorAll(".falling");

  function randomizePosition(element) {
    const startingPosition = Math.floor(Math.random() * window.innerWidth);
    element.style.left = `${startingPosition}px`;
    console.log("pos")
  }


  
  function randomizeDelay(element) {
    const delay = Math.floor(Math.random() * 4000);
    element.style.animationDelay = `-${delay}ms`;
    console.log("delay")
  }
  
  coinContainers.forEach((coinContainer) => {
    randomizePosition(coinContainer);
    randomizeDelay(coinContainer);
    console.log("con foreach")
  });
  
  window.addEventListener("resize", () => {
    coinContainers.forEach((coinContainer) => {
      randomizePosition(coinContainer);
      console.log("resize")
    });
  });
  



  
  setInterval(function () {

    if (document.querySelectorAll('.dollar').length >= 10) {
      return;
    }
  
    circle.innerHTML = `$${money}`;
    circle.style.transform = `rotate(${Math.random() * 360}deg)`;
    const dollarBill = document.createElement('div');
    dollarBill.classList.add('dollar');
    rainContainer.appendChild(dollarBill);
    addDollarBillClickListener(dollarBill);
    dollarBill.style.left = `${Math.random() * 1000}px`;
    dollarBill.style.right = `${Math.random() * 1000}px`;
    dollarBill.style.top = `0px`;
    document.body.appendChild(dollarBill);
  
    let intervalId = setInterval(function() {
      const top = parseInt(dollarBill.style.top);
      dollarBill.style.top = `${top + Math.floor(Math.random() * 10) + 1}px`;
      if (top + 50 >= window.innerHeight) {
        clearInterval(intervalId);
        dollarBill.remove();
        
      }
    }, 40/1);
  
  }, 6000/1);
  

  function clickCoin() {
    console.log("Click coin");
    // Forhindr gentagne clicks
    document.querySelector("#coin1_container").removeEventListener("click", clickCoin);
   
  
    
    // Stop coin container
    document.querySelector("#coin1_container").classList.add("paused");
  
    // sæt forsvind-animation på coin
    document.querySelector("#coin1_sprite").classList.add("zoom_out");
  
    // når forsvind-animation er færdig: coinGone
    document.querySelector("#coin1_container").addEventListener("animationend", coinGone);
    
  }
  
  function coinGone() {
    // fjern event der bringer os herind
    document.querySelector("#coin1_container").removeEventListener("animationend", coinGone);
  
    // fjern forsvind-animation
    document.querySelector("#coin1_sprite").classList.remove("zoom_out");
    
    // fjern pause
    document.querySelector("#coin1_container").classList.remove("paused");
  
    // genstart falling animation
    document.querySelector("#coin1_container").classList.remove("falling");
    document.querySelector("#coin1_container").offsetWidth;
    document.querySelector("#coin1_container").classList.add("falling");
  
    // gør det muligt at klikke på coin igen
    document.querySelector("#coin1_container").addEventListener("click", clickCoin);
  }




  function clickBomb() {
    console.log("Click bomb");
    // Forhindr gentagne clicks
    document.querySelector("#bomb_container").removeEventListener("click", clickBomb);
    
    // Stop coin container
    document.querySelector("#bomb_container").classList.add("paused");
  
    // sæt forsvind-animation på coin
    document.querySelector("#bomb_sprite").classList.add("zoom_in");
  
    // når forsvind-animation er færdig: coinGone
    document.querySelector("#bomb_container").addEventListener("animationend", bombGone);
    
  }
  
  function bombGone() {
    // fjern event der bringer os herind
    document.querySelector("#bomb_container").removeEventListener("animationend", bombGone);
  
    // fjern forsvind-animation
    document.querySelector("#bomb_sprite").classList.remove("zoom_in");
    
    // fjern pause
    document.querySelector("#bomb_container").classList.remove("paused");
  
    // genstart falling animation
    document.querySelector("#bomb_container").classList.remove("falling");
    document.querySelector("#bomb_container").offsetWidth;
    document.querySelector("#bomb_container").classList.add("falling");
  
    // gør det muligt at klikke på coin igen
    document.querySelector("#bomb_container").addEventListener("click", clickBomb);
  }
  



  setInterval(function () {

    if (document.querySelectorAll('.baddollar').length >= 10) {
      return;
    }
  
    circle.innerHTML = `$${money}`;
    circle.style.transform = `rotate(${Math.random() * 360}deg)`;
    const baddollarBill = document.createElement('div');

    baddollarBill.classList.add('baddollar');
    rainContainer.appendChild(baddollarBill);
    addBadDollarBillClickListener(baddollarBill)
    baddollarBill.style.left = `${Math.random() * 1000}px`;
    baddollarBill.style.right = `${Math.random() * 1000}px`;
    baddollarBill.style.top = `0px`;
    document.body.appendChild(baddollarBill);
 
    let intervalId = setInterval(function() {
      const top = parseInt(baddollarBill.style.top);
      baddollarBill.style.top = `${top + 10}px`;
      
  
      if (top + 50 >= window.innerHeight) {
        
        clearInterval(intervalId);
        baddollarBill.remove();
        
      }
    }, 80/1);
  
  }, 5000/1);
  
  const addBadDollarBillClickListener = function(baddollarBill) {
    baddollarBill.addEventListener("click", function() {

      baddollarBill.remove();
      money -= 10; 
      moneyCounter.innerHTML = money + "$";
    });
  };

  const addDollarBillClickListener = function(dollarBill) {
    dollarBill.addEventListener("click", function() {
      dollarBill.remove();
      money += 3 * moneyPerClick;
      moneyCounter.innerHTML = money + "$";
    });
  };

  



}








//setInterval(function () {

//  money += moneyPerClick;
//  circle.innerHTML = `$${money}`;
//  circle.style.transform = `rotate(${Math.random() * 360}deg)`;
//  const dollarBill = document.createElement('div');
//  dollarBill.classList.add('dollar');
//  rainContainer.appendChild(dollarBill);
//  addDollarBillClickListener(dollarBill);
//  dollarBill.style.left = `${Math.random() * window.innerWidth}px`;
//  dollarBill.style.top = `0px`;
//  document.body.appendChild(dollarBill);

//  let intervalId = setInterval(function() {
//    const top = parseInt(dollarBill.style.top);
//    dollarBill.style.top = `${top + 10}px`;
//    if (top + 50 >= window.innerHeight) {
//      clearInterval(intervalId);
//      dollarBill.remove();
//    }
//  }, 80);




//}, 1800);











  
upgradeButton.addEventListener('click', function() {
  if (money >= 40) {
    money -= 40;
    moneyPerClick *= 2;
    circle.innerHTML = `$${money}`;
  }
});



const upgradeAutoClick = document.getElementById("upgrade-auto-click");
let autoClickInterval;

upgradeAutoClick.addEventListener("click", function() {
  if (money >= 100000 && !autoClickInterval) {
    money -= 100000;
    moneyCounter.innerHTML = money + "$";
    autoClickInterval = setInterval(function() {
      circle.click();
    }, 5000/1);
  }
});