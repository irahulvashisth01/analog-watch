let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");

function clock() {

    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();


    // Second hand
    let secondDegree = (seconds * 6) - 90;

    secondHand.style.transform =
        `rotate(${secondDegree}deg)`;


    // Minute hand
    let minuteDegree =
        (minutes * 6) +
        (seconds * 0.1) -
        90;

    minHand.style.transform =
        `rotate(${minuteDegree}deg)`;


    // Hour hand
    let hourDegree =
        ((hours % 12) * 30) +
        (minutes * 0.5) -
        90;

    hourHand.style.transform =
        `rotate(${hourDegree}deg)`;
}


// Start clock
clock();


// Update every second
setInterval(clock, 1000);