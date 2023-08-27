//cambio de color a cada cuadro

const box1 = document.getElementById("box_1");
const box2 = document.getElementById("box_2");
const box3 = document.getElementById("box_3");
const box4 = document.getElementById("box_4");

box1.addEventListener("click", (Event) => {
  box1.style.backgroundColor = "black";
});
box2.addEventListener("click", (Event) => {
  box2.style.backgroundColor = "black";
});

box3.addEventListener("click", (Event) => {
  box3.style.backgroundColor = "black";
});

box4.addEventListener("click", (Event) => {
  box4.style.backgroundColor = "black";
});

const key = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    key.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    key.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    key.style.backgroundColor = "lightblue";
  }
});

// Creando nuevo cuadro con su color

/* no he podido realizar la creación y la generación de atributos que se solicitan*/