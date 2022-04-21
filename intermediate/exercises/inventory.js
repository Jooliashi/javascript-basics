function transactionsFor(id, list) {
  return list.filter(item => {
    return item.id === id;
  });
}
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
function isItemAvailable(id, list) {
  let itemMovements = transactionsFor(id, list);
  let quantity = itemMovements.reduce((total, move) => {
    if (move.movement === 'in') {
      return total + move.quantity;
    } else {
      return total - move.quantity;
    }
  }, 0);
  return quantity > 0;
}
console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true