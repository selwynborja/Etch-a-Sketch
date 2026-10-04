// 16 * 16 grid of square divs
const div = document.querySelector('.container');
const totalSquares = 16 * 16;

for (let i = 0; i < totalSquares; i++){
  const square = document.createElement("div");
  square.classList.add("grid-item");
  div.appendChild(square);
}
