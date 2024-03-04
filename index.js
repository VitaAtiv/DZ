const refs = {
  numberBtn: document.querySelector(".numberBtn"),
  cubeContainer: document.querySelector(".cubeContainer"),
  addBtn: document.querySelector(".addBtn"),
  deleteBtn: document.querySelector(".resetBtn"),
};

function atFistCube() {
  const initialCubes = refs.numberBtn.value;
  console.log(initialCubes);

  for (let i = 0; i < initialCubes; i++) {
    addCube();
  }
}

function addCube() {
  const cube = document.createElement("div");
  cube.style.width = `${50 + refs.cubeContainer.childElementCount * 10}px`;
  cube.style.height = `${50 + refs.cubeContainer.childElementCount * 10}px`;
  refs.cubeContainer.appendChild(initialCubes);

  cube.style.backgroundColor = generateRandomColor();
}

function resetCubes() {
  refs.cubeContainer.innerHTML = "";
}
function generateRandomColor() {
  const anyColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return anyColor;
}

refs.addBtn.addEventListener("click", atFistCube);
refs.deleteBtn.addEventListener("click", resetCubes);
