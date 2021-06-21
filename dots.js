const dots = document.querySelector('.dots');

function getVal() {
  return Math.floor(Math.random() * 255 + 1);
}

function addDot() {
  if (dots.childNodes.length === 100) {
    dots.textContent = '';
  }
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.style.backgroundColor = `rgba(${getVal()}, ${getVal()}, ${getVal()})`;
  dots.appendChild(dot);
}

function initDots() {
  setInterval(addDot, 200);
}

export default initDots;
