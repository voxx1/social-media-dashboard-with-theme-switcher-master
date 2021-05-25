const checkboxes = document.querySelectorAll(".checkbox");
const cardBG = document.querySelectorAll(".block");
const cardnumber = document.querySelectorAll(".number");
const cardtext = document.querySelectorAll(".card-text");
const bottomcardBG = document.querySelectorAll(".object");
const slider = document.querySelector(".slider");
let theme = "dark"

const changeTheme = () => {
    if (theme === "dark") {
        document.getElementById("page").style.backgroundColor = "white";
        document.getElementById("title").style.color = "black";
        document.getElementById("followers").style.color = "hsl(228, 12%, 44%)";
        document.getElementById("title-middle").style.color = "hsl(228, 12%, 44%)";
        slider.classList.toggle("slider-background");
        slider.classList.toggle("white");
        for (let i = 0; i < cardBG.length; i++) {
            cardBG[i].classList.toggle("card-light");
        }
        for (let i = 0; i < cardnumber.length; i++) {
            cardnumber[i].classList.toggle("card-title");
        }
        for (let i = 0; i < bottomcardBG.length; i++) {
            bottomcardBG[i].classList.toggle("bottom-card-bg");
        }
        for (let i = 0; i < cardtext.length; i++) {
            cardtext[i].classList.toggle("card-text-color");
        }
        theme = "light";
    } else {
        document.getElementById("page").style.backgroundColor = "hsl(230, 17%, 14%)";
        document.getElementById("title").style.color = "white";
        document.getElementById("followers").style.color = "hsl(228, 34%, 66%)";
        document.getElementById("title-middle").style.color = "white";
        slider.classList.toggle("slider-background");
        slider.classList.toggle("white");
        for (let i = 0; i < cardBG.length; i++) {
            cardBG[i].classList.toggle("card-light");
        }
        for (let i = 0; i < cardnumber.length; i++) {
            cardnumber[i].classList.toggle("card-title");
        }
        for (let i = 0; i < bottomcardBG.length; i++) {
            bottomcardBG[i].classList.toggle("bottom-card-bg");
        }
        for (let i = 0; i < cardtext.length; i++) {
            cardtext[i].classList.toggle("card-text-color");
        }
        theme = "dark";
    }
}

for (const button of checkboxes){
button.addEventListener("change", function() {
        changeTheme();
    })}