const stockItem = {
  Burger: { Stock: 400, Price: 399 },
  ChickenBurger: { Stock: 500, Price: 599 },
  ZingerBurger: { Stock: 520, Price: 549 },
  ChickenRoll: { Stock: 800, Price: 139 },
  Roast: { Stock: 350, Price: 449 },
  CrispyBoti: { Stock: 320, Price: 369 },
};

console.log("=/==========:- Reception -:==============/=");
console.log(
  "1) Burger\n2) ChickenBurger\n3) ZingerBurger\n4) ChickenRoll\n5) Roast\n6) CrispyBoti"
);

const limitOrders = parseInt(prompt("How many order you have: "));
const menu = [
  "Burger",
  "ChickenBurger",
  "ZingerBurger",
  "ChickenRoll",
  "Roast",
  "CrispyBoti",
];

let productBuyList = [];
let totalProduct = 0;
let itemlist = [];
let totalAmount = 0;
const discountRate = 0.1; // 10%

for (let i = 1; i <= limitOrders; i++) {
  const seller = parseInt(prompt("Select item: "));
  if (seller < 1 || seller > menu.length) {
    console.log("Invalid User Input. ");
    break;
  }

  let itemName = menu[seller - 1];

  let quantity = parseInt(prompt(`Enter quantity of ${itemName}: `));
  if (quantity > stockItem[itemName].Stock) {
    console.log("Stock not available for this item.");
    continue;
  }

  stockItem[itemName].Stock -= quantity;
  let price = stockItem[itemName].Price * quantity;

  let itemDiscount = 0;
  if (quantity >= 20) {
    itemDiscount = price * discountRate;
    price -= itemDiscount;
  }

  totalAmount += price;
  totalProduct += quantity;
  itemlist.push(`${itemName} x${quantity}`);
  productBuyList.push(quantity);
}

console.log("=/==============:- Billing -:===============/=");
console.log(`** Total Amount: Rs ${totalAmount.toFixed(2)}`);
console.log(`** Item List: ${itemlist.join(", ")}`);
console.log(`** Total Product: ${totalProduct}`);
console.log(`** Note: Bulk discount of 10% applied on items with quantity >= 20`);
