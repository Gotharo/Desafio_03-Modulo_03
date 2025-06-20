
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





// document.querySelector("#ele1").style.backgroundColor  = "green"
// let bkgnColor = document.querySelector("#ele1")

// const pintar = () => {
//     if(bkgnColor.style.backgroundColor === "green") {
//         bkgnColor.style.backgroundColor  = "yellow";
//         bkgnColor.textContent = "Ahora soy de color Amarillo"
        
//     } else {
//         bkgnColor.style.backgroundColor = "green";
//         bkgnColor.textContent = "hi there! volvi a ser Verde"
//     };
// }

// bkgnColor.addEventListener("click", pintar);




// console.log(bkgnColor);

// function pintar(){
//         ele.style.backgroundColor = 'yellow'
//     }
//         const ele = document.getElementById("ele1")
//         ele.addEventListener("click", pintar);