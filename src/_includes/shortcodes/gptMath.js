const liters = (parameters) => {
  const gpt3 = 175000;
  const ml = 10;
  return ((parameters / gpt3) * ml).toFixed(3);
};

module.exports = liters;
