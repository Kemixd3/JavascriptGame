const circle = document.querySelector('#circle');
const upgradeButton = document.querySelector('#upgrade');
const rainContainer = document.getElementById("rain-container");
let money = 0; // initial money
let damagePerClick = 1; // initial damage
let health2 = 3; // initial health


//Parashoot
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fhand-painted-commercial-game-eat-chicken-airdrop-box-parachute-element-2_4029788.html&psig=AOvVaw1bjpK3Y1XRNuuD166VhkAr&ust=1678300787268000&source=images&cd=vfe&ved=0CBIQjhxqFwoTCPDo_-O7yv0CFQAAAAAdAAAAABAJ


//https://pixabay.com/music/search/genre/ambient/?movement=fast
const music = new Audio("SpaceRace.mp3");
const winmp3 = new Audio("win.mp3");
const clickSound = new Audio("beam.mp3");
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const container = document.getElementById("container");

const upgrade = document.getElementById("upgrade");

const moneyCounter = document.getElementById("money-counter");
const timerContainer = document.getElementById("timer-container");
const gameOverScreen = document.getElementById("game-over");
const moneyScore = document.getElementById("money-score");
const restartButton = document.getElementById("restart-button");


document.addEventListener("mousedown", function() {
  // play audio when mouse button is clicked
  clickSound.play();
});


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
    if (timer === 0) {
      clearInterval(intervalId);
      onTimerEnd();
    }
  }, 1000);

  return intervalId;
}


















startButton.addEventListener("click", function() {
  startScreen.style.display = "none";
  container.style.display = "block";
  
  // Add the rest of the game logic here
});


const scope = document.getElementById("scope");
const gameContainer = document.getElementById("game-container");

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


document.getElementById("restart-button").addEventListener("click", function() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-over").style.display = "none";
  container.style.display = "block";
  damagePerClick = 1;
  document.getElementById("rain-container").style.display = "block";
  
  
  


});


document.getElementById("restart-button2").addEventListener("click", function() {
  document.getElementById("win_screen").style.display = "none";
  document.getElementById("game-over").style.display = "none";
  container.style.display = "block";
  document.getElementById("rain-container").style.display = "block";
  money = 0;
  moneyCounter.innerHTML = damagePerClick + "Damage";
  
  startGame(timer);
  
});







document.getElementById("start-button").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("rain-container").style.display = "block";
  const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');
  let timer;
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
  startGame(timer);
});




// Game timer





function startGame(timer) {

  
  music.play();

  const timerContainer = document.querySelector("#timer");
  const intervalId = renderTimer(timer, timerContainer, function() {
    
    clearInterval(intervalId);
    music.pause();
    music.currentTime = 0;
    
    document.getElementById("game-over").style.display = "block";
   
    
  });


money = 0;
damagePerClick = 1;
 const coin = document.querySelector("#para_container").classList.add("falling");
 const humanship = document.querySelector("#humanship_container").classList.add("falling");
 const humanship2 = document.querySelector("#humanship_container2").classList.add("falling");

 moneyCounter.innerHTML = damagePerClick + "Damage";
  
 circle.innerHTML = `Money: ${money}`;
  // Registrer click
  document.querySelector("#para_container").addEventListener("click", clickPara);
  document.querySelector("#humanship_container").addEventListener("click", clickBomb);
  document.querySelector("#humanship_container2").addEventListener("click", clickBomb);
  document.querySelector("#space_container").addEventListener("click", clickSpace);



  const coinContainers = document.querySelectorAll(".falling");

  
  






  let health = 50;
  const MAX_HEALTH = 50;
  
  function clickSpace() {
    console.log("Click coin");
    // Forhindr gentagne clicks
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
  
    // Stop coin container
    document.querySelector("#space_container").classList.add("paused");
  
    // sæt forsvind-animation på coin
    document.querySelector("#space_sprite").classList.add("zoom_out");
  
    // når forsvind-animation er færdig: paraGone
    document.querySelector("#space_container").addEventListener("animationend", SpaceGone);
  }
  
  function SpaceGone() {
    // fjern event der bringer os herind
    document.querySelector("#space_container").removeEventListener("animationend", SpaceGone);
  
    // fjern forsvind-animation
    document.querySelector("#space_sprite").classList.remove("zoom_out");
    console.log(health)




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
          const difficultyRadios2 = document.querySelectorAll('input[name="difficulty2"]');
          let timer2;
          for (let i = 0; i < difficultyRadios2.length; i++) {
            if (difficultyRadios2[i].checked) {
              switch (difficultyRadios2[i].value) {
                case "easy":
                  timer2 = 300; // 5 minutes
                  break;
                case "hard":
                  timer2 = 180; // 3 minutes
                  break;
                case "impossible":
                  timer2 = 60; // 1 minute
                  break;
              }
              break;
            }
          }
          startGame(100);
        });
        

      });
    } 




    // fjern pause
    document.querySelector("#space_container").classList.remove("paused");
  
    // genstart falling animation
    document.querySelector("#space_container").classList.remove("falling");
    document.querySelector("#space_container").offsetWidth;
    document.querySelector("#space_container").classList.add("falling");
  
    // gør det muligt at klikke på coin igen
    // gør det muligt at klikke på coin igen
    document.querySelector("#space_container").addEventListener("click", clickSpace);
  }












  
  

  function clickPara() {
    console.log("Click coin");
    // Forhindr gentagne clicks
    document.querySelector("#para_container").removeEventListener("click", clickPara);
   
    money += 3 * damagePerClick;
    moneyCounter.innerHTML = damagePerClick + "Damage";
   
    circle.innerHTML = `Money: ${money}`;
    
    // Stop coin container
    document.querySelector("#para_container").classList.add("paused");
  
    // sæt forsvind-animation på coin
    document.querySelector("#para_sprite").classList.add("zoom_out");
  
    // når forsvind-animation er færdig: paraGone
    document.querySelector("#para_container").addEventListener("animationend", paraGone);
    
  }
  
  function paraGone() {
    // fjern event der bringer os herind
    document.querySelector("#para_container").removeEventListener("animationend", paraGone);
  
    // fjern forsvind-animation
    document.querySelector("#para_sprite").classList.remove("zoom_out");
    
    // fjern pause
    document.querySelector("#para_container").classList.remove("paused");
  
    // genstart falling animation
    document.querySelector("#para_container").classList.remove("falling");
    document.querySelector("#para_container").offsetWidth;
    document.querySelector("#para_container").classList.add("falling");
  
    // gør det muligt at klikke på coin igen
    document.querySelector("#para_container").addEventListener("click", clickPara);
  }




  function clickBomb() {

    health2--;
    
 

    console.log("Click humanship");
    // Forhindr gentagne clicks
    document.querySelector("#humanship_container").removeEventListener("click", clickBomb);
    document.querySelector("#humanship_container2").removeEventListener("click", clickBomb);
    // Stop coin container
    document.querySelector("#humanship_container").classList.add("paused");
    document.querySelector("#humanship_container2").classList.add("paused");
    // sæt forsvind-animation på coin
    document.querySelector("#humanship_sprite").classList.add("explosion");
    document.querySelector("#humanship_sprite2").classList.add("explosion");
    // når forsvind-animation er færdig: paraGone
    document.querySelector("#humanship_container").addEventListener("animationend", humanshipGone);
    document.querySelector("#humanship_container2").addEventListener("animationend", humanshipGone);
    money -= damagePerClick *2;
    moneyCounter.innerHTML = damagePerClick + "Damage";
  
    
  }
  
  function humanshipGone() {


  

    // remove a heart
    let hearts = document.querySelectorAll('.heart');
    hearts[health2].style.display = 'none';

    


    // fjern event der bringer os herind
    document.querySelector("#humanship_container").removeEventListener("animationend", humanshipGone);
    document.querySelector("#humanship_container2").removeEventListener("animationend", humanshipGone);
    // fjern forsvind-animation
    document.querySelector("#humanship_sprite").classList.remove("explosion");
    document.querySelector("#humanship_sprite2").classList.remove("explosion");
    // fjern pause
    document.querySelector("#humanship_container").classList.remove("paused");
    document.querySelector("#humanship_container2").classList.remove("paused");
    // genstart falling animation
    document.querySelector("#humanship_container").classList.remove("falling");
    document.querySelector("#humanship_container2").classList.remove("falling");

    document.querySelector("#humanship_container").offsetWidth;
    document.querySelector("#humanship_container2").offsetWidth;

    document.querySelector("#humanship_container").classList.add("falling");
    document.querySelector("#humanship_container2").classList.add("falling");

    // gør det muligt at klikke på coin igen
    document.querySelector("#humanship_container").addEventListener("click", clickBomb);
    document.querySelector("#humanship_container2").addEventListener("click", clickBomb);



   

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
  




  setInterval(function () {

 
    let helloworld = false;
  
    let intervalId = setInterval(function() {

      
  
      if (helloworld != true) {
        console.log(this.timer)
        clearInterval(intervalId);
        










        function randomizePosition(element) {
          const startingPosition = Math.floor(Math.random() * (window.innerWidth * 1.5));
          console.log(startingPosition)
          element.style.left = `${startingPosition}px`;
         
          //console.log(startingPosition)
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
          helloworld = true;
        });
        
        window.addEventListener("resize", () => {
          coinContainers.forEach((coinContainer) => {
            randomizePosition(coinContainer);
            console.log("resize")
          });
        });
      }
    }, 1160/1);
  
  }, 3500/1);


  



}





  
upgradeButton.addEventListener('click', function() {
  if (money >= 40) {
    money -= 40;
    damagePerClick *= 2;
    circle.innerHTML = `$${money}`;
  }
});



const upgradeAutoClick = document.getElementById("upgrade-auto-click");
let autoClickInterval;

upgradeAutoClick.addEventListener("click", function() {
  if (money >= 100000 && !autoClickInterval) {
    money -= 100000;
    moneyCounter.innerHTML = damagePerClick + "Damage";
    autoClickInterval = setInterval(function() {
      clickPara()
    }, 5000/1);
  }
});