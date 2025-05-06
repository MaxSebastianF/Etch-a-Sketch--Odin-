const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  container.innerHTML = "";

  const totalBox = size * size;
  const sizeBox = 960 / size;

  for (let i = 0; i < totalBox; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "black";
    });

    container.appendChild(box);
  }
}

createGrid(16);

resizeBtn.addEventListener("click", () => {
  let newsize = prompt("Introduce the number of squares per side (max 100)");
  newsize = parseInt(newsize);
  if (isNaN(newsize) || newsize < 1 || newsize > 100) {
    alert("error, introduce a number between 1 and 100");
  } else {
    createGrid(newsize);
  }
});
