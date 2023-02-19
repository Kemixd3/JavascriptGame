const circle = document.querySelector('#circle');
const upgradeButton = document.querySelector('#upgrade');
const rainContainer = document.getElementById("rain-container");
let money = 0;
let moneyPerClick = 1;



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


setInterval(function () {

  money += moneyPerClick;
  circle.innerHTML = `$${money}`;
  circle.style.transform = `rotate(${Math.random() * 360}deg)`;
  const dollarBill = document.createElement('div');
  dollarBill.classList.add('dollar');
  rainContainer.appendChild(dollarBill);
  addDollarBillClickListener(dollarBill);
  dollarBill.style.left = `${Math.random() * window.innerWidth}px`;
  dollarBill.style.top = `0px`;
  document.body.appendChild(dollarBill);

  let intervalId = setInterval(function() {
    const top = parseInt(dollarBill.style.top);
    dollarBill.style.top = `${top + 10}px`;
    if (top + 50 >= window.innerHeight) {
      clearInterval(intervalId);
      dollarBill.remove();
      console.log(dollarBill)
    }
  }, 80);




}, 2000);



setInterval(function () {

  
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




}, 2000);



  
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



  
  //... rest of the code
  
  if (gameOver) {
    clearInterval(autoClickInterval);
    moneyScore.innerHTML = `Your money score is $${money}`;
    gameOverScreen.style.display = "block";
  }
  



