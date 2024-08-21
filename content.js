// Create the timer element and add it to the body
let timerElement = document.createElement('div');
timerElement.id = 'website-time-tracker';
document.body.appendChild(timerElement);

// Initialize the starting time in milliseconds
let startTime = 0;

// Function to format time as HH:MM:SS
function formatTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  
  seconds %= 60;
  minutes %= 60;
  
  let timeString = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);
    
  return timeString;
}

// Function to start the timer
function startTimer() {
  setInterval(function() {
    startTime += 1000; // Increment startTime by 1000 milliseconds (1 second)
    
    if (startTime >= 10000) {
      startTime = 0; // Reset the timer every 10 seconds
    }
    
    timerElement.textContent = formatTime(startTime);
  }, 1000);
}

// Start the timer when the website finishes loading
window.onload = startTimer;
