const circle = document.querySelector('#circle');
const upgradeButton = document.querySelector('#upgrade');
const rainContainer = document.getElementById("rain-container");
let money = 0;
let moneyPerClick = 1;



<<<<<<< Updated upstream
const timerContainer = document.getElementById("timer-container");
const gameOverScreen = document.getElementById("game-over");
const moneyScore = document.getElementById("money-score");
const restartButton = document.getElementById("restart-button");
const finalScore = document.getElementById("money-score");


// Game timer
let timer = 20; // 5 minutes in seconds
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
=======

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
});





function startGame() {


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
      dollarBill.style.top = `${top + 10}px`;
      if (top + 50 >= window.innerHeight) {
        clearInterval(intervalId);
        dollarBill.remove();
        
      }
    }, 70);
  
  }, 2000);
  
  


  



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
    }, 80);
  
  }, 2000);
  
  const addBadDollarBillClickListener = function(baddollarBill) {
    baddollarBill.addEventListener("click", function() {
      baddollarBill.remove();
      money -= 10; 
      moneyCounter.innerHTML = money + "$";
    });
  };
>>>>>>> Stashed changes

  const addDollarBillClickListener = function(dollarBill) {
    dollarBill.addEventListener("click", function() {
      dollarBill.remove();
      money += 3 * moneyPerClick;
      moneyCounter.innerHTML = money + "$";
    });
  };

<<<<<<< Updated upstream
setInterval(function () {
=======
  



}

>>>>>>> Stashed changes


<<<<<<< Updated upstream
  let intervalId = setInterval(function() {
    const top = parseInt(dollarBill.style.top);
    dollarBill.style.top = `${top + 10}px`;
    if (top + 50 >= window.innerHeight) {
      clearInterval(intervalId);
      dollarBill.remove();
      console.log(dollarBill)
    }
  }, 80);
=======
>>>>>>> Stashed changes




<<<<<<< Updated upstream
}, 2000);
=======
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
  
  circle.innerHTML = `$${money}`;
  circle.style.transform = `rotate(${Math.random() * 360}deg)`;
  const baddollarBill = document.createElement('div');
  baddollarBill.classList.add('baddollar');
  rainContainer.appendChild(baddollarBill);
  addBadDollarBillClickListener(baddollarBill);
  baddollarBill.style.left = `${Math.random() * window.innerWidth}px`;
  baddollarBill.style.top = `0px`;
  document.body.appendChild(baddollarBill);

  let intervalId = setInterval(function() {
    const top = parseInt(baddollarBill.style.top);
    baddollarBill.style.top = `${top + 10}px`;
    if (top + 50 >= window.innerHeight) {
      clearInterval(intervalId);
      baddollarBill.remove();
      
    }
  }, 80);
=======
>>>>>>> Stashed changes



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
    moneyScore.innerHTML = money + "$";
    autoClickInterval = setInterval(function() {
      circle.click();
    }, 5000);
  }
});

<<<<<<< Updated upstream
const addDollarBillClickListener = function(dollarBill) {
    dollarBill.addEventListener("click", function() {
      dollarBill.remove();
      money += 3 * moneyPerClick;
      console.log("hey1")
      moneyScore.innerHTML = money + "$";
    });
  };



  const addBadDollarBillClickListener = function(baddollarBill) {
    baddollarBill.addEventListener("click", function() {
      baddollarBill.remove();
      money -= 3 * moneyPerClick;
      moneyScore.innerHTML = money + "$";
    });
  };
=======
>>>>>>> Stashed changes



  
  //... rest of the code
  
  if (gameOver) {
    clearInterval(autoClickInterval);
    moneyScore.innerHTML = `Your money score is $${money}`;
    gameOverScreen.style.display = "block";
  }
  



