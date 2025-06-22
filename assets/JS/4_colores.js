const btnBlue = document.querySelector(".blue");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnYellow = document.querySelector(".yellow");

let bgnBlack = false;



function toggleBtn(element, color, text) {
   if (element.style.backgroundColor === "black") {
        element.style.backgroundColor = color;
        element.style.color = "white";
        element.textContent = text;
    } else {
        element.style.backgroundColor = "black";
        element.style.color = color === "yellow" ? "grey" : "white";
        element.textContent = "BLACK";
    }
};

btnBlue.addEventListener("click", () => toggleBtn(btnBlue, "blue", "1"));
btnRed.addEventListener("click", () => toggleBtn(btnRed, "red", "2"));
btnGreen.addEventListener("click", () => toggleBtn(btnGreen, "green", "3"));
btnYellow.addEventListener("click", () => toggleBtn(btnYellow, "yellow", "4"));