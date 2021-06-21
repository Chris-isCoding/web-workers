function fibonacci(num) {
  if (num <= 3) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

export default fibonacci;
