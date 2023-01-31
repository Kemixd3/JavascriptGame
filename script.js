const circle = document.querySelector('#circle');
const upgradeButton = document.querySelector('#upgrade');
const rainContainer = document.getElementById("rain-container");
let money = 0;
let moneyPerClick = 1;

circle.addEventListener('click', function() {
  money += moneyPerClick;
  circle.innerHTML = `$${money}`;
  circle.style.transform = `rotate(${Math.random() * 360}deg)`;

  // Rain dollar bills
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
    }
  }, 40);
});

  
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
    }, 5000);
  }
});

const addDollarBillClickListener = function(dollarBill) {
    dollarBill.addEventListener("click", function() {
      dollarBill.remove();
      money += 3 * moneyPerClick;
      moneyCounter.innerHTML = money + "$";
    });
  };




