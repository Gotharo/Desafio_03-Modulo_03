const btn = document.querySelector(".caja-color");
const btnBlue = document.querySelector(".blue");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnYellow = document.querySelector(".yellow");

let bgnBlack = false;



btnBlue.addEventListener("click", ()=> {
    if (bgnBlack) {
        btnBlue.style.backgroundColor = "blue";
        btnBlue.textContent = "1"
    } else {
        btnBlue.style.backgroundColor = "black";
        btnBlue.textContent = "BLACK"
    }
    bgnBlack = !bgnBlack;
});

btnRed.addEventListener("click", ()=> {
    if (bgnBlack) {
        btnRed.style.backgroundColor = "red";
        btnRed.textContent = "2"
    } else {
        btnRed.style.backgroundColor = "black";
        btnRed.textContent = "BLACK"
    }
    bgnBlack = !bgnBlack;
});

btnGreen.addEventListener("click", ()=> {
    if (bgnBlack) {
        btnGreen.style.backgroundColor = "green";
        btnGreen.textContent = "3"
    } else {
        btnGreen.style.backgroundColor = "black";
        btnGreen.textContent = "BLACK"
    }
    bgnBlack = !bgnBlack;
});

btnYellow.addEventListener("click", ()=> {
    if (bgnBlack) {
        btnYellow.style.backgroundColor = "yellow";
        btnYellow.style.color = "black"
        btnYellow.textContent = "4"
    } else {
        btnYellow.style.backgroundColor = "black";
        btnYellow.textContent = "BLACK"
        btnYellow.style.color = "white"
    }
    bgnBlack = !bgnBlack;
});
