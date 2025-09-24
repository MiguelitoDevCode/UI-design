const ConLink = document.querySelector(".visit-btn");
const Form = document.querySelector(".connexion");
const Close = document.querySelector(".close");
const Closed = document.querySelector(".closed");
const  Form2 = document.querySelector(".inscrire");
const  Reveal = document.querySelectorAll(".scroll-reveal");


//---------------------Scroll-reveal-------------------//

function  reveal() {
    for (let i = 0; i < Reveal.length; i++) {
        const element = Reveal[i];
        let position = element.getBoundingClientRect();

        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


//---------------------Script pour la connexion-------------------//

ConLink.addEventListener("click", () => {
    Form.style.display = "flex";
});

function connect() {
    Form2.style.display = "none";
    Form.style.display = "flex";
}



//---------------------Script pour l'inscription-------------------//
function inscript() {
    Form.style.display = "none";
    Form2.style.display = "flex";
}

//---------------------Fermer les formulaires--------------------------//

Close.addEventListener("click", () => {
    Form.style.display = "none";
});

Closed.addEventListener("click", () => {
    Form2.style.display = "none";
});
