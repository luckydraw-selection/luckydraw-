var fileRead =  false;
var namesArray = []
var removeWinnerChecked = document.querySelector(".switch-container input").checked;

// Popper Animation Start **********************************************************************
var maxParticleCount = 50; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately
var stopAnimationTimer; // call to stop the animation timer
(function() {
  startConfetti = startConfettiInner;
  stopConfetti = stopConfettiInner;
  toggleConfetti = toggleConfettiInner;
  removeConfetti = removeConfettiInner;
  var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
  var streamingConfetti = false;
  var animationTimer = null;
  var particles = [];
  var waveAngle = 0;
  
  function resetParticle(particle, width, height) {
    particle.color = colors[(Math.random() * colors.length) | 0];
    particle.x = Math.random() * width;
    particle.y = Math.random() * height - height;
    particle.diameter = Math.random() * 10 + 5;
    particle.tilt = Math.random() * 10 - 10;
    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
    particle.tiltAngle = 0;
    return particle;
  }
  function startConfettiInner() {
    //var width = window.innerWidth;
    //var height = window.innerHeight;
	var width = 300;
	var height = 200;
	//alert (width + "h-" height);
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          return window.setTimeout(callback, 16.6666667);
        };
    })();
	var canvas = document.getElementById("confetti-canvas");
    if (canvas === null) {
      canvas = document.createElement("canvas");
      canvas.setAttribute("id", "confetti-canvas");
      canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none");
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, true);
    }
    var context = canvas.getContext("2d");
    while (particles.length < maxParticleCount)
      particles.push(resetParticle({}, width, height));
    streamingConfetti = true;
    if (animationTimer === null) {
      (function runAnimation() {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        if (particles.length === 0)
          animationTimer = null;
        else {
          updateParticles();
          drawParticles(context);
          animationTimer = requestAnimFrame(runAnimation);
        }
      })(); 
}
	// Add a timer to stop the animation after 10 seconds (adjust the time as needed)
		stopAnimationTimer = setTimeout(function () {
			stopConfettiInner();
			}, 3000);
  }
  function stopConfettiInner() {
    clearTimeout(stopAnimationTimer); // Clear the stop animation timer
    streamingConfetti = false;
  }
  function removeConfettiInner() {
    stopConfetti();
    particles = [];
  }
  function toggleConfettiInner() {
    if (streamingConfetti)
      stopConfettiInner();
    else
      startConfettiInner();
  }
  function drawParticles(context) {
    var particle;
    var x;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      context.beginPath();
      context.lineWidth = particle.diameter;
      context.strokeStyle = particle.color;
      x = particle.x + particle.tilt;
      context.moveTo(x + particle.diameter / 2, particle.y);
      context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
      context.stroke();
    }
  }
  function updateParticles() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var particle;
    waveAngle += 0.01;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      if (!streamingConfetti && particle.y < -15)
        particle.y = height + 100;
      else {
        particle.tiltAngle += particle.tiltAngleIncrement;
        particle.x += Math.sin(waveAngle);
        particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
        particle.tilt = Math.sin(particle.tiltAngle) * 15;
      }
      if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
        if (streamingConfetti && particles.length <= maxParticleCount)
          resetParticle(particle, width, height);
        else {
          particles.splice(i, 1);
          i--;
        }
      }
    }
  }
})();


// Popper Animation****************************************************************************************



// Function to append results to the textarea
        function appendResultToTextarea(luckyName) {
            const textarea = document.getElementById('resultsTextarea');
            textarea.value += luckyName + '\n';
        }

function removeWinner(luckyName, namesArray) {
  var index = namesArray.indexOf(luckyName);
  if (index > -1) {
    namesArray.splice(index, 1);
  }
 return namesArray;
}

function scrollNames(namesArray, resultBox) {
    var currentIndex = 0;
    var speed = 100;
    var accelerationTime = 1000;


function confettiPopper() {
  const canvas = document.getElementById('canvas'); // Replace 'canvas' with the ID of your canvas element
  const ctx = canvas.getContext('2d');
  
  const colors = ['#FF0000', '#00FF00', '#0000FF', 'purple', 'yellow', 'blue']; // Add more colors if desired
  
  function createConfetti(x, y) {
    const size = Math.random() * 10 + 5; //for number of confetti in one frame
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    //ctx.fillStyle = color;
  //ctx.fillRect(x, y, 6, 4);
  ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
  
  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 1; i++) {  //to control speed of confetti
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      createConfetti(x, y);
    }
    
    requestAnimationFrame(animateConfetti);
  }
  animateConfetti();
  
}

    function scroll() {
        var currentNames = namesArray.slice(currentIndex, currentIndex + 3).join("<br>");
        resultBox.innerHTML = currentNames;
	
        currentIndex += 3;
        if (currentIndex >= namesArray.length) {
            currentIndex = 0;
        }

        if (speed > 50 && Date.now() - startTime < accelerationTime) {
            speed -= 10;
        } else if (speed < 100) {
            speed += 5;
        }
    }

    var animationInterval = setInterval(scroll, speed);
    var startTime = Date.now();


    setTimeout(function () {
        clearInterval(animationInterval);
	var len = namesArray.length;
	for(var i=0; i<len; i++){
		namesArray[i] && namesArray.push(namesArray[i]);}
	namesArray.splice(0, len);
	if(len >0){
		var luckyName = namesArray[Math.floor(Math.random() * namesArray.length)];
        	resultBox.innerHTML =luckyName;
		appendResultToTextarea(luckyName);
		startConfetti();
}
	else{resultBox.innerHTML = "no more name to select";}
     
//namesArray = removeWinner(luckyName, namesArray);

if (removeWinnerChecked) {
console.log("if is working");
            namesArray = removeWinner(luckyName, namesArray);
        }
	

    }, 3000);
}


function readFileAndDraw() {
    var fileInput = document.getElementById("fileInput");
    var resultBox = document.getElementById("resultBox");
    
    console.log(fileRead)
    
    var file = fileInput.files[0];
    	
    if (file && (fileRead === false)) {
        var reader = new FileReader();
	
        reader.onload = function (e) {
            var content = e.target.result;
            namesArray = content.split("\n");
            namesArray = namesArray.map(name => name.trim());
	
	
	
	scrollNames(namesArray, resultBox);
    	removeWinnerChecked = document.querySelector(".switch-container input").checked;
        //startConfetti();
	 console.log(namesArray);
	 console.log("reading file");
	fileRead =  true;
        };

        reader.readAsText(file);
    } else {
        resultBox.innerHTML = "Please select a file.";
    }
  if(fileRead === true){
    scrollNames(namesArray, resultBox);
    removeWinnerChecked = document.querySelector(".switch-container input").checked;
	  }
}

