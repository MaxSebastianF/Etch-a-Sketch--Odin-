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

    
    box.style.opacity = "0%";
    

    box.addEventListener("mouseover", () => {
      let currentOpacity = Number(box.style.opacity);
      if (currentOpacity < 1) {
        box.style.opacity = currentOpacity + 0.1;
      }
      box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;



    });

    container.appendChild(box);
  }
}

createGrid(16);

resizeBtn.addEventListener("click", () => {
  let newsize = prompt("Enter the number of squares per side (max 100)");
  newsize = parseInt(newsize);
  if (isNaN(newsize) || newsize < 1 || newsize > 100) {
    alert("error, Enter a number between 1 and 100");
  } else {
    createGrid(newsize);
  }
});
