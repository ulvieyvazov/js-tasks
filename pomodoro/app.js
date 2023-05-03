const time = document.querySelector("#time")
const promodorTime = 24;
let promodorSeconds = promodorTime * 60;
const start = document.querySelector(".btn-start")
const pause = document.querySelector("#pause");
const br = document.querySelector(".break")
const next = document.querySelector(".next")
const count = document.querySelector(".count")
start.addEventListener("click", () => {
    time.style.display = "hiden"
    const Countdown = () => {
        time.innerHTML = promodorTime
        const min = Math.round(promodorSeconds / 60)
        const sec = promodorSeconds % 60
        promodorSeconds--
        if (promodorSeconds > -1) {
            time.innerHTML = `${min > 9 ? min : `0${min}`}:${sec > 9 ? sec : `0${sec}`}`
        }
        
        if (promodorSeconds <= -1) {
            time.innerHTML == "00:00"
        }
    }

    // start.innerHTML = pause.innerHTML
    start.style.display = "none"
    pause.style.display = "block"
    
    const myInterval = setInterval(Countdown, 1000);
    function myStop() {
        clearInterval(myInterval);
        start.style.display = "block"
        pause.style.display = "none"
        next.style.display = "none"
        
    }
    next.style.display = "block"
    next.addEventListener("click", () => {
        count.style.innerHTML = "1"
    })

    pause.addEventListener("click", myStop)

})
