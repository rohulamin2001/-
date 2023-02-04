/**
 * App Name : CountDown
 * Developed By : Rohul Amin
 * Date: 23-10-2022
 */

let startDay = 30;
let startHours = 24;
let startMiniutes = 60;
let startSeconds = 60

const [day, hour, minite, second] = document.getElementsByClassName("display")

day.innerHTML = startDay
hour.innerHTML = startHours
minite.innerHTML = startMiniutes
second.innerHTML = startSeconds

function main() {

    if (startSeconds > 0) {
        second.innerHTML = --startSeconds

    }

    if (startSeconds <= 0) {
        second.innerHTML = 60
        startSeconds = 60
        minite.innerHTML = --startMiniutes

    }
    if (startMiniutes == 0) {

        minite.innerHTML = 60
        startMiniutes = 60

        hour.innerHTML = --startHours

    }

    if (startHours <= 0) {
        hour.innerHTML = 24
        startHours = 24
        day.innerHTML = --startDay

    }

    if (startDay === 0) {
        [...document.getElementsByClassName("display")].forEach(v => {
            v.innerHTML = 0
        })

        clearInterval(stopInterVal)
    }

}

let stopInterVal = setInterval(main,1000)