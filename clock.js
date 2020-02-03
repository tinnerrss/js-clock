let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let hourTick = 0;
let minuteTick = 0;
let secondTick = 0;


let workingClock = function() {
    let hourDegrees = 0;
    let minDegrees = 0;
    let secDegrees = 0;
    hourTick = setInterval(function() {
        hourDegrees = hourDegrees + 30;
        hour.style.transform = "rotate("+ hourDegrees + "deg)";
    }, 3.6e6)
    minuteTick = setInterval(function() {
        minDegrees = minDegrees + 6;
        minute.style.transform = "rotate("+ minDegrees + "deg";
    }, 60000)
    secondTick = setInterval(function() {
        secDegrees = secDegrees + 6;
        second.style.transform = "rotate("+ secDegrees + "deg";
    }, 1000)
    
}

document.addEventListener("DOMContentLoaded", function() {
    workingClock();

})
