// 16 * 16 grid of square divs
const div = document.querySelector('.grid-container');
const totalSquares = 16 * 16;

for (let i = 0; i < totalSquares; i++){
  const square = document.createElement("div");
  square.classList.add("grid-item");
  square.setAttribute("style", "border: 1px solid gray; border-radius: 4px; aspect-ratio: 1 / 1; ");
  div.appendChild(square);
}
