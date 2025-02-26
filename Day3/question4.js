calculateArea = (length, width = length) => {
  return length * width;
};
console.log(`Area ${calculateArea(11, 22)}`);
console.log(`Area: ${calculateArea(5)}`);
