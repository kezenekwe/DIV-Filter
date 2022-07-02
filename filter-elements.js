//select buttons
const buttons = document.querySelectorAll(".btn");
const showAll = document.querySelector(".show-all");
const cars = document.querySelector(".cars");
const animals = document.querySelector(".animals");
const fruits = document.querySelector(".fruits");
const colors = document.querySelector(".colors");

//select divs
const divs = document.querySelectorAll(".div");
const carDivs = document.querySelectorAll(".car");
const animalDivs = document.querySelectorAll(".animal");
const fruitDivs = document.querySelectorAll(".fruit");
const colorDivs = document.querySelectorAll(".color");

//default: display all divs
//on show all btn click: display all divs.
//on cars btn click: display all car divs, hide the rest.
//on animals btn click: display all animal divs, hide the rest.
//on fruits btn click: display all fruit divs, hide the rest.
//on colors btn click: display all color divs, hide the rest.
//of course you can refactor the if/else if statements if you want.

buttons.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        let btnClasses = e.currentTarget.classList;
        if (btnClasses.contains("cars")) {
            for (let i = 0; i < animalDivs.length; i++) {
                animalDivs[i].classList.add("hide");
            }
            for (let i = 0; i < fruitDivs.length; i++) {
                fruitDivs[i].classList.add("hide");
            }
            for (let i = 0; i < colorDivs.length; i++) {
                colorDivs[i].classList.add("hide");
            }
            for (let i = 0; i < carDivs.length; i++) {
                carDivs[i].classList.remove("hide");
            }
        }
        else if (btnClasses.contains("animals")) {
            for (let i = 0; i < carDivs.length; i++) {
                carDivs[i].classList.add("hide");
            }
            for (let i = 0; i < fruitDivs.length; i++) {
                fruitDivs[i].classList.add("hide");
            }
            for (let i = 0; i < colorDivs.length; i++) {
                colorDivs[i].classList.add("hide");
            }
            for (let i = 0; i < animalDivs.length; i++) {
                animalDivs[i].classList.remove("hide");
            }
        }
        else if (btnClasses.contains("fruits")) {
            for (let i = 0; i < carDivs.length; i++) {
                carDivs[i].classList.add("hide");
            }
            for (let i = 0; i < animalDivs.length; i++) {
                animalDivs[i].classList.add("hide");
            }
            for (let i = 0; i < colorDivs.length; i++) {
                colorDivs[i].classList.add("hide");
            }
            for (let i = 0; i < fruitDivs.length; i++) {
                fruitDivs[i].classList.remove("hide");
            }
        }
        else if (btnClasses.contains("colors")) {
            for (let i = 0; i < carDivs.length; i++) {
                carDivs[i].classList.add("hide");
            }
            for (let i = 0; i < animalDivs.length; i++) {
                animalDivs[i].classList.add("hide");
            }
            for (let i = 0; i < fruitDivs.length; i++) {
                fruitDivs[i].classList.add("hide");
            }
            for (let i = 0; i < colorDivs.length; i++) {
                colorDivs[i].classList.remove("hide");
            }
        }
        else {
            for (let i = 0; i < carDivs.length; i++) {
                carDivs[i].classList.remove("hide");
            }
            for (let i = 0; i < animalDivs.length; i++) {
                animalDivs[i].classList.remove("hide");
            }
            for (let i = 0; i < fruitDivs.length; i++) {
                fruitDivs[i].classList.remove("hide");
            }
            for (let i = 0; i < colorDivs.length; i++) {
                colorDivs[i].classList.remove("hide");
            }
        }
    })
});
