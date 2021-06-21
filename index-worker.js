import initDots from './dots.js';
import fibonacci from './fibonacci.js';

initDots();

const index = 40; // index to find fibonnaci number
const btn = document.querySelector('.execute');
const result = document.querySelector('.result');
const btnWorker = document.querySelector('.execute-worker');
const resultWorker = document.querySelector('.result-worker');

btn.addEventListener('pointerdown', () => {
  const fib = fibonacci(index);
  result.innerText = fib;
});

// btnWorker.addEventListener('pointerdown', () => {
//   const worker = new Worker('./fib-worker.js');

//   worker.addEventListener('message', ({ data }) => {
//     resultWorker.innerText = data;
//     worker.terminate();
//   });

//   worker.postMessage(index);
// });

btnWorker.addEventListener('click', () => {
  const worker = new Worker('./fib-worker.js');

  worker.addEventListener('message', ({ data }) => {
    resultWorker.innerText = data;
    worker.terminate();
  });

  worker.postMessage(index);
});
