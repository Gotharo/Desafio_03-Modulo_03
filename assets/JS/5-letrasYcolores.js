const keyDown = document.querySelector(".key");
const newDiv = document.querySelector("#new-div");


document.addEventListener('keydown', function (event) {

switch (event.key) {
    case 'a':
        keyDown.style.backgroundColor = "pink";
        break;
    case 's':
        keyDown.style.backgroundColor = "orange";
        break;
    case 'd':
        keyDown.style.backgroundColor = "cyan";
        break;
    case 'q':
        newDiv.classList.add("new-key");
        newDiv.style.backgroundColor = "violet";
        newDiv.textContent = "New Div";
        break;
    case 'w':
        newDiv.classList.add("new-key");
        newDiv.style.backgroundColor = "grey";
        newDiv.textContent = "New Div";
        break;
    case 'e':
        newDiv.classList.add("new-key");
        newDiv.style.backgroundColor = "brown";
        newDiv.textContent = "New Div";
        break;
    default:
        newDiv.style.backgroundColor = "white";
}
});



