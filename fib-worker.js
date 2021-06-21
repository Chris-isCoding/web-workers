function fibonacci(num) {
  if (num <= 3) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

onmessage = ({ data }) => {
  const fibResult = fibonacci(data);
  postMessage(fibResult);
};
