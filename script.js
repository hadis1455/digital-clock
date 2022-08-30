const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")


// Clock system
function updateClock() {
    // Used computer clock
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    
    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    // Put zero next to numbers for example 05:05:01
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Make it change Element values
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    // Refresh the function every one second
    setTimeout(() => {
        updateClock()
    }, 1000)
}

// Run function
updateClock()