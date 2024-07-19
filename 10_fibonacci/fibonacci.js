const fibonacci = function (index) {
  let n1 = 1;
  let n2 = 1;
  let next;

  let count;
  if (typeof index !== "number") {
    count = parseInt(index);
  } else {
    count = index;
  }

  if (count === 0) return 0;
  if (count < 0) return "OOPS";

  for (let i = 1; i < index; i++) {
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
  return n1;
};

// Do not edit below this line
module.exports = fibonacci;
