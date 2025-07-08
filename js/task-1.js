function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
console.log(makeTransaction(0, 100)); // "You ordered 0 droids worth 0 credits!"
console.log(makeTransaction(7, 2000)); // "You ordered 7 droids worth 14000 credits!"
