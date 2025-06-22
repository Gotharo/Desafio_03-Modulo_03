
const ele = document.querySelector("#ele1")
ele.style.backgroundColor = "green";

function pintar(color) {
    ele.style.backgroundColor = color;
}

ele.addEventListener("click", function() { 
    if(ele.style.backgroundColor === "green") {
        pintar("yellow");
        ele.textContent = "Ahora cambie a color Amarillo"
    }else {
        pintar("green");
        ele.textContent = "Ahora regrese a ser verde denuevo :D"
    }
});






// function pintar(){
//         ele.style.backgroundColor = 'yellow'
//     }
//         const ele = document.getElementById("ele1")
//         ele.addEventListener("click", pintar);