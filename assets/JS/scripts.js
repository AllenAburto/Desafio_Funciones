//cambio de color

const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green"

function pintar(){
    ele.style.backgroundColor = 'yellow'
}
    ele.addEventListener("click", pintar);
