const imageContainer = document.querySelector("#image-container")
const iconContainer = document.querySelector('#icon-container')
const messageEl = document.querySelector('#message')

var message

function displayGreeting() {

    var hour = new Date().getHours();

    if(hour >= 4 && hour <= 12) {
        message = "Good Morning"
        goodMorning(message);
    } else 
    if(hour > 12 && hour <= 17) {
        message = "Good Afternoon"
        goodAfternoon(message)
    } else 
    if(hour > 17 && hour <= 21) {
        message = "Good Evening"
        goodEvening(message)
    } else {
        message = "Good Night"
        goodNight(message)
    }
    console.log(message);

}


function goodNight(message) {
    messageEl.innerHTML = message;
    iconContainer.classList.add("night-icon")
    imageContainer.classList.add("night-bg")
}

function goodAfternoon(message) {
    messageEl.innerHTML = message;
    iconContainer.classList.add("afternoon-icon")
    imageContainer.classList.add("afternoon-bg")
}

function goodEvening(message) {
    messageEl.innerHTML = message;
    iconContainer.classList.add("evening-icon")
    imageContainer.classList.add("evening-bg")
}

function goodMorning(message) {
    messageEl.innerHTML = message;
    iconContainer.classList.add("morning-icon")
    imageContainer.classList.add("morning-bg")
}



window.addEventListener('load', displayGreeting)