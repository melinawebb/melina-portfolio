/*var homeElement = document.getElementById("home");
var workElement = document.getElementById("work");
var aboutElement = document.getElementById("about");
var contactElement = document.getElementById("contact");

var navItem = document.getElementsByClassName("nav-item");

function decide() {
    var contactElementHeight = contactElement.clientHeight / 2;
    if (contactElement.getBoundingClientRect().top <= window.innerHeight - contactElementHeight) {
        navItem[3].classList.add("clicked");
        navItem[0].classList.remove("clicked");
        navItem[1].classList.remove("clicked");
        navItem[2].classList.remove("clicked");
    } else if(aboutElement.getBoundingClientRect().top <= 0) {
        navItem[2].classList.add("clicked");
        navItem[0].classList.remove("clicked");
        navItem[1].classList.remove("clicked");
        navItem[3].classList.remove("clicked");
    } else if(workElement.getBoundingClientRect().top <= 0) {
        navItem[1].classList.add("clicked");
        navItem[0].classList.remove("clicked");
        navItem[2].classList.remove("clicked");
        navItem[3].classList.remove("clicked");
    } else if(homeElement.getBoundingClientRect().top <= 0) {
        navItem[0].classList.add("clicked");
        navItem[1].classList.remove("clicked");
        navItem[2].classList.remove("clicked");
        navItem[3].classList.remove("clicked");
    }
}


document.onscroll = decide;*/
