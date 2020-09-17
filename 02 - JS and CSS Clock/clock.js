const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function getDate() {
    let date = new Date();

    let seconds = date.getSeconds();
    let secondsDegree = (seconds / 60) * 360 + 90;
    if (secondHand.classList.contains("notransition"))
        secondHand.classList.remove("notransition");
    if (secondsDegree === 90) secondHand.classList.add("notransition");

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    let minutes = date.getMinutes();
    let minutesDegree = (minutes / 60) * 360 + 90;
    if (minHand.classList.contains("notransition"))
        minHand.classList.remove("notransition");
    if (minutesDegree === 90) minHand.classList.add("notransition");
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    let hours = date.getHours();
    let hoursDegree = (hours / 24) * 360 + 90;
    if (hourHand.classList.contains("notransition"))
        hourHand.classList.remove("notransition");
    if (hoursDegree === 90) hourHand.classList.add("notransition");
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(getDate, 1000);
