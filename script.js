const circle = document.querySelector('#circle');
const upgradeButton = document.querySelector('#upgrade');
const rainContainer = document.getElementById("rain-container");
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const container = document.getElementById("container");
const upgrade = document.getElementById("upgrade");
const moneyCounter = document.getElementById("money-counter");
const timerContainer = document.getElementById("timer-container");
const gameOverScreen = document.getElementById("game-over");
const moneyScore = document.getElementById("money-score");
const restartButton = document.getElementById("restart-button");
const humanshipSprite2 = document.querySelector("#humanship_sprite2");
const scope = document.getElementById("scope");
const gameContainer = document.getElementById("game-container");
const upgradeAutoClick = document.getElementById("upgrade-auto-click");

let autoClickInterval;
let money = 0; // initial money
let damagePerClick = 1; // initial damage
let health2 = 3; // initial health

//Humanship image2
//https://www.pngwing.com/en/free-png-nidsi/download


//Parashoot
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fhand-painted-commercial-game-eat-chicken-airdrop-box-parachute-element-2_4029788.html&psig=AOvVaw1bjpK3Y1XRNuuD166VhkAr&ust=1678300787268000&source=images&cd=vfe&ved=0CBIQjhxqFwoTCPDo_-O7yv0CFQAAAAAdAAAAABAJ


//https://pixabay.com/music/search/genre/ambient/?movement=fast


const music = new Audio("SpaceRace.mp3");
const winmp3 = new Audio("win.mp3");
const clickSound = new Audio("beam.mp3");



document.addEventListener("mousedown", function() {
  // play audio when mouse button is clicked
  clickSound.play();
});



//shuffle between images 
let imageIndex = 1;
setInterval(() => {
  imageIndex = (imageIndex % 2) + 1;
  humanshipSprite2.src = `images/humanship${imageIndex}.png`;
}, 5000);


//timer
function renderTimer(timerSeconds, timerContainer, onTimerEnd) {
  let timer = timerSeconds;
  let intervalId = setInterval(function() {
    timer--;
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    timerContainer.innerHTML = `${minutes}:${seconds}`;
    //timer at 0 condition
    if (timer === 0) {
      clearInterval(intervalId);
      onTimerEnd();
    }
  }, 1000);

  return intervalId;
}



//mouse move rainContainer left and right effect 
document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  scope.style.left = x + "px";
  scope.style.top = y + "px";
  
  const halfScopeWidth = scope.offsetWidth / 2;
  const halfScopeHeight = scope.offsetHeight / 2;
  const scopeX = x - halfScopeWidth;
  const scopeY = y - halfScopeHeight;
  
  rainContainer.style.transform = `translate(${-scopeX}px, ${-scopeY}px)`;
  
});

//when restart button is clicked
document.getElementById("restart-button").addEventListener("click", function() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-over").style.display = "none";
  container.style.display = "block";
  damagePerClick = 1;
  document.getElementById("rain-container").style.display = "block";
  
});


//when restart button2 is clicked
document.getElementById("restart-button2").addEventListener("click", function() {
  document.getElementById("win_screen").style.display = "none";
  document.getElementById("game-over").style.display = "none";
  container.style.display = "block";
  document.getElementById("rain-container").style.display = "block";
  money = 0;
  moneyCounter.innerHTML = damagePerClick + "Damage";
  
  startGame(timer);
  
});



//when start button is clicked

document.getElementById("start-button").addEventListener("click", function(event) {

  

  startScreen.classList.add('fade-out');
  //added fadeout animation to startscreen and added transitionend function that will display none once the animation is done
  startScreen.addEventListener('transitionend', function() {
    startScreen.style.display = 'none';
  }, { once: true });

  event.preventDefault();
  
  document.getElementById("rain-container").style.display = "block";
  const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');
  let timer;

  //choose difficulty case that sets the timer to 5, 3 or 1 minut based on the input from difficultyRadios
  for (let i = 0; i < difficultyRadios.length; i++) {
    if (difficultyRadios[i].checked) {
      switch (difficultyRadios[i].value) {
        case "easy":
          timer = 300; // 5 minutes
          break;
        case "hard":
          timer = 180; // 3 minutes
          break;
        case "impossible":
          timer = 60; // 1 minute
          break;
      }
      break;
    }
  }
  //break and start the game with the chosen timer
  startGame(timer);
});




//The start game function with timer value inserted
function startGame(timer) {

  
  music.play();

  const timerContainer = document.querySelector("#timer");
  //set the timer and what to do when timer runs out. Show game-over screen
  const intervalId = renderTimer(timer, timerContainer, function() {
    
    clearInterval(intervalId);
    music.pause();
    music.currentTime = 0;
    
    document.getElementById("game-over").style.display = "block";
   
    
  });

//starting values
money = 0;
damagePerClick = 1;
 const coin = document.querySelector("#para_container").classList.add("falling");
 const humanship = document.querySelector("#humanship_container").classList.add("falling");
 const humanship2 = document.querySelector("#humanship_container2").classList.add("falling");

 moneyCounter.innerHTML = damagePerClick + "Damage";
  
 circle.innerHTML = `Money: ${money}`;
  // Registrer click
  document.querySelector("#para_container").addEventListener("click", clickPara);
  document.querySelector("#humanship_container").addEventListener("click", Clickhumanship);
  document.querySelector("#humanship_container2").addEventListener("click", Clickhumanship);
  document.querySelector("#space_container").addEventListener("click", clickSpace);

  const coinContainers = document.querySelectorAll(".falling");

  
 //setting the health of the alien ship
  let health = 80;
  const MAX_HEALTH = 80;
  
  function clickSpace() {
    console.log("Click coin");
   
    //Remove eventlistener to stop multiple clicks
    document.querySelector("#space_container").removeEventListener("click", clickSpace);
  
    // Subtract damagePerClick from health
    health -= 3 * damagePerClick;
    const healthBar = document.querySelector("#health_bar");
    const healthPercent = (health / MAX_HEALTH) * 100;
    healthBar.style.width = `${healthPercent}%`;
    
    // Check if health is depleted
    if (health <= 0) {
      SpaceGone();
      healthBar.classList.add("depleted");
      return;
    } else if (health <= MAX_HEALTH / 2) {
      healthBar.classList.add("low");
    }
    
    money += 2 * damagePerClick;
    moneyCounter.innerHTML = damagePerClick + "Damage";
  
    circle.innerHTML = `Money: ${money}`;
  
    //Stop space container
    document.querySelector("#space_container").classList.add("paused");
  
    //putting animation on class
    document.querySelector("#space_sprite").classList.add("zoom_out");
  
    //When animation is done
    document.querySelector("#space_container").addEventListener("animationend", SpaceGone);
  }
  
  function SpaceGone() {
    //Remove event
    document.querySelector("#space_container").removeEventListener("animationend", SpaceGone);
  
    //Remove animation
    document.querySelector("#space_sprite").classList.remove("zoom_out");
    console.log(health)



    //if the alien has 0 health then show winscreen and reset game
    if (health <= 0) {
      clearInterval(intervalId);
      music.pause();
      music.currentTime = 0;
      const remainingTime = document.querySelector("#remaining_time");
      remainingTime.innerHTML = timerContainer.innerHTML;
      const winScreen = document.querySelector("#win_screen");
      winmp3.play()
      winScreen.style.display = "block";
      const totalMoney = document.querySelector("#total_money");
      totalMoney.innerHTML = `${money} Money`;
      const restartButton = document.querySelector("#restart_button");
      restartButton.addEventListener("click", function() {
        winScreen.style.display = "none";



        const winScreenForm = document.querySelector("#win_screen form");
        winScreenForm.addEventListener("submit", function(event) {
          event.preventDefault();
          
          startGame(100);
        });
        

      });
    } 


    //Remove paused
    document.querySelector("#space_container").classList.remove("paused");
  
    //restart falling animation
    document.querySelector("#space_container").classList.remove("falling");
    document.querySelector("#space_container").offsetWidth;
    document.querySelector("#space_container").classList.add("falling");
  
    //click on space readded
  
    document.querySelector("#space_container").addEventListener("click", clickSpace);
  }


  function clickPara() {
    console.log("Click coin");
    // Forhindr gentagne clicks
    document.querySelector("#para_container").removeEventListener("click", clickPara);
   //gain money and show it 
    money += 3 * damagePerClick;
    moneyCounter.innerHTML = damagePerClick + "Damage";
   
    circle.innerHTML = `Money: ${money}`;
    
    //Stop para container
    document.querySelector("#para_container").classList.add("paused");
  
    //be gone animation on para
    document.querySelector("#para_sprite").classList.add("zoom_out");
  
    //when zoom animation is done
    document.querySelector("#para_container").addEventListener("animationend", paraGone);
    
  }
  
  function paraGone() {
    //fjern EventListener from clickpara 
    document.querySelector("#para_container").removeEventListener("animationend", paraGone);
  
    //remove be gone animation
    document.querySelector("#para_sprite").classList.remove("zoom_out");
    
    //remove paused
    document.querySelector("#para_container").classList.remove("paused");
  
    //restart falling animation
    document.querySelector("#para_container").classList.remove("falling");
    document.querySelector("#para_container").offsetWidth;
    document.querySelector("#para_container").classList.add("falling");
  
    //click the coin readded
    document.querySelector("#para_container").addEventListener("click", clickPara);
  }




  function Clickhumanship() {
    //remove player health hearts
    health2--;
    console.log("Clickhumanship");
    document.querySelector("#humanship_container").removeEventListener("click", Clickhumanship);
    document.querySelector("#humanship_container2").removeEventListener("click", Clickhumanship);
 
    document.querySelector("#humanship_container").classList.add("paused");
    document.querySelector("#humanship_container2").classList.add("paused");
  
    document.querySelector("#humanship_sprite").classList.add("explosion");
    document.querySelector("#humanship_sprite2").classList.add("explosion");
   
    document.querySelector("#humanship_container").addEventListener("animationend", humanshipGone);
    document.querySelector("#humanship_container2").addEventListener("animationend", humanshipGone);
    //player gets a damage penalty
    money -= damagePerClick *2;
    moneyCounter.innerHTML = damagePerClick + "Damage";
    
  }
  
  function humanshipGone() {

    // remove a heart
    let hearts = document.querySelectorAll('.heart');
    hearts[health2].style.display = 'none';

    document.querySelector("#humanship_container").removeEventListener("animationend", humanshipGone);
    document.querySelector("#humanship_container2").removeEventListener("animationend", humanshipGone);

    document.querySelector("#humanship_sprite").classList.remove("explosion");
    document.querySelector("#humanship_sprite2").classList.remove("explosion");

    document.querySelector("#humanship_container").classList.remove("paused");
    document.querySelector("#humanship_container2").classList.remove("paused");

    document.querySelector("#humanship_container").classList.remove("falling");
    document.querySelector("#humanship_container2").classList.remove("falling");

    document.querySelector("#humanship_container").offsetWidth;
    document.querySelector("#humanship_container2").offsetWidth;

    document.querySelector("#humanship_container").classList.add("falling");
    document.querySelector("#humanship_container2").classList.add("falling");
    
    document.querySelector("#humanship_container").addEventListener("click", Clickhumanship);
    document.querySelector("#humanship_container2").addEventListener("click", Clickhumanship);



   
//if player loses all their hearts then they lose and go to gameover screen
    if (health2 == 0) {
      clearInterval(intervalId);
      music.pause();
      music.currentTime = 0;
      const remainingTime2 = document.querySelector("#remaining_time2");
      remainingTime2.innerHTML = timerContainer.innerHTML;
      const gameoverscreen = document.getElementById("game-over");
      winmp3.play()
      gameoverscreen.style.display = "block";
      const totalMoney2 = document.querySelector("#total_money2");
      totalMoney2.innerHTML = `${money} Money`;
      const restartButton = document.querySelector("#restart_button");
      restartButton.addEventListener("click", function() {
        gameoverscreen.style.display = "none";

        const gameOverScreenForm = document.querySelector("#game-over form");
        gameOverScreenForm.addEventListener("submit", function(event) {
          event.preventDefault();
       
       
          startGame(100);
        });
        

      });
    } 
  }
  

//This code sets up a setInterval function with an interval of 3500 milliseconds, 
//which runs a function that randomly positions and delays a group of HTML elements with the class name "coinContainers"
  setInterval(function () {
 
    let helloworld = false;
  
    let intervalId = setInterval(function() {
      if (helloworld != true) {
        clearInterval(intervalId);
//the random position function sets startingPosition somewhere in the with of window times 1.5
        function randomizePosition(element) {
          const startingPosition = Math.floor(Math.random() * (window.innerWidth * 1.5));
         
          element.style.left = `${startingPosition}px`;
          //console.log(startingPosition)
        }
      
      
        //set an animation delay 0-4 seconds for the next element to show
        function randomizeDelay(element) {
          const delay = Math.floor(Math.random() * 4000);
          element.style.animationDelay = `-${delay}ms`;
          console.log("delay")
        }
        
        

        //The loop then calls randomizePosition and randomizeDelay for each HTML element with the class name "coinContainers". 
        //It also sets helloworld to true, so that the loop will not execute this block of code again until the setInterval function completes its 1160/1 millisecond interval.
        coinContainers.forEach((coinContainer) => {
          randomizePosition(coinContainer);
          randomizeDelay(coinContainer);
         
          helloworld = true;
        });
        //"resize" event on the window object, which re-randomizes the position of each HTML element with the class name "coinContainers" whenever the window is resized.
        window.addEventListener("resize", () => {
          coinContainers.forEach((coinContainer) => {
            randomizePosition(coinContainer);
            
          });
        });
      }
    }, 1360/1);
  
  }, 3700/1);

}


//upgrade button EventListener that cost 20 money and will upgrade and double damagePerClick value
upgradeButton.addEventListener('click', function() {
  if (money >= 20) {
    money -= 20;
    damagePerClick *= 2;
    circle.innerHTML = `$${money}`;
  }
});


//not in use yet but is intended to help collect an airdrop automatic every 5 seconds
//it works but i just set a crazy cost because im still not sure if this should be an implementation or not.
upgradeAutoClick.addEventListener("click", function() {
  if (money >= 100000 && !autoClickInterval) {
    money -= 100000;
    moneyCounter.innerHTML = damagePerClick + "Damage";
    autoClickInterval = setInterval(function() {
      clickPara()
    }, 5000/1);
  }
});