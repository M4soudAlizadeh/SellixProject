const SellixClient = (d) => {
  const increment = (a, b) => {
    return a + b / d;
  };

  const decrement = (a, b) => {
    return a - b / d;
  };

  return { increment, decrement };
};
export default SellixClient;
