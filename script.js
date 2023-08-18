const timerElement = document.getElementById("timer");
const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer(){
    startTime = Date.now() - elapsedTime;
    
    timeInterval = setInterval( ()=>{
        elapsedTime = Date.now()-startTime;
        timerElement.textContent = formatTime(elapsedTime);
    }, 10); 
    startElement.disabled = true;
    stopElement.disabled = false;
    resetElement.disabled = false;

}

function formatTime(elapsedTime){
    const seconds = Math.floor((elapsedTime/1000) % 60);
    const minutes = Math.floor((elapsedTime/1000/60) % 60);
    const hours = Math.floor((elapsedTime/1000/60/60) % 60);
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")
        + ":"+
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
        + ":"+
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
        );
}


function stopTimer(){
    clearInterval(timeInterval)
    
    startElement.disabled = false;
    stopElement.disabled = true;
    resetElement.disabled = false;
}
function resetTimer(){
    clearInterval(timeInterval)
    elapsedTime = 0;
    timerElement.textContent = "00:00:00"
    startElement.disabled = false;
    stopElement.disabled = false;
    resetElement.disabled = false;
}


startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);