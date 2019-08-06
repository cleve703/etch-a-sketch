const container = document.getElementById('grid-container');
var numGridSquares = 256;
document.getElementById('resetButton').addEventListener("click", reset)

for (var i = 1; i <= 256; i++) {
  if (i % 16 == 0) {container.innerHTML += `<div class="box" id="box${i}"></div><br>`}
  else {container.innerHTML += `<div class="box" id="box${i}"></div>`}
  };

for (var i = 1; i <= 256; i++) {
  document.getElementById(`box${i}`).addEventListener('mouseover', function(){this.classList.add('boxNewColor')})
};

function reset() {
  for (var i = 1; i <= 256; i++) {
    document.getElementById(`box${i}`).classList.remove('boxNewColor')
  }
  // prompt('How many grid squares per side?', numGridSquares)
  // if (typeOf(numGridSquares) !== "number") {}
}
