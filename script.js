var running = false
var isReset = true
const timerEL = document.getElementById("timer")
class Timer {
    constructor(timerEl){
        this.startTime = new Date().getTime()
        this.endTime = new Date().getTime()
        this.timer = timerEl
    }

    startTimer(){
        this.startTime = new Date().getTime()
        this.intervalId = setInterval(() => {
            this.updateTimerDisplay()
        },10)
    }

    endTimer(){
        clearInterval(this.intervalId)
        this.endTime = new Date().getTime()
    }

    calculateElapsedTime() {
        const currentTime = new Date().getTime();
        const elapsedTime = (currentTime - this.startTime) / 1000;
        return elapsedTime.toFixed(2);
    }

    updateTimerDisplay(){
        this.timer.textContent = this.calculateElapsedTime()
    }   
}

const timer = new Timer(timerEL)

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space' && !running) {
        if(isReset){
            timer.startTimer()
            running = true
            isReset = false
        } else {
            isReset = true
            timerEL.textContent = "00"
        }
    } else if(event.code === 'Space' && running){
        timer.endTimer()
        running = false
    }
});

const containerEl = document.getElementById("super-container")
containerEl.addEventListener('click', function () {
    if (!running) {
        if(isReset){
            timer.startTimer()
            running = true
            isReset = false
        } else {
            isReset = true
            timerEL.textContent = "00"
        }
    } else {
        timer.endTimer()
        running = false
    }
});