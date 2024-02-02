let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function startStopwatch() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startBtn").innerText = "Start";
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById("startBtn").innerText = "Stop";
  }
  isRunning = !isRunning;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("startBtn").innerText = "Start";
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
