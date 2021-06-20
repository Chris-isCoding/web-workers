function fibonacci(num) {
  const fibHelper = (num, prev, cur) => {
    if (num === 0) return prev; // prev was cur @ func invocation
    return fibHelper(num - 1, cur, prev + cur);
  };
  return fibHelper(num, 0, 1);
}

export default fibonacci;
