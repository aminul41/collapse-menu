const menuBtn = document.querySelector(".hamburger-menu");
const menuSec = document.querySelector("header");
const closebtn = document.querySelector(".close");
const imgSrc = document.querySelector(".hamburger-menu img");
menuBtn.addEventListener("click", () => {
    menuSec.classList.toggle("collapse"); 
    if (menuSec.classList.contains('collapse')) {
        imgSrc.src = 'close_round_icon.png';
    } else {
        imgSrc.src = 'hamburger_icon.png';
    }   
})
closebtn.addEventListener("click", () => {
    menuSec.classList.remove("collapse");
    imgSrc.src = 'hamburger_icon.png';
})
