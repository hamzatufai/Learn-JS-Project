const stocksItem = {
  Burger: { Stock: 400, Price: 139 },
  ZingerBurger: { Stock: 390, Price: 399 },
  Roast: { Stock: 234, Price: 599 },
  FiredChicken: { Stock: 520, Price: 499 },
  ChickenRoll: { Stock: 540, Price: 119 },
};

console.log("=/==========:- Reception -:==============/=");
console.log(
  "1) Burger\n2) Zinger Burger\n3) Roast\n4) Fired Chicken\n5) Chicken Roll",
);

const limitItem = parseInt(prompt("How many item you want: "));
for (let i = 1; i <= limitItem; i++) {
  menu = ["Burger", "ZingerBurger", "Roast", "FiredChicken", "ChickenRoll"];
  let seller = parseInt(prompt("Select Item number: "));
  if (seller < 1 || seller > menu.length) {
    console.log("Invalid User Input. ");
    continue;
  }

  let itemName = menu[seller - 1];
  let quantity = parseInt(prompt(`Enter quantity of ${itemName}: `));
  if (quantity > stocksItem[itemName].Stock) {
    console.log("Stock not available");
    continue;
  }
  stocksItem[itemName].Stock -= quantity;
  console.log(stocksItem);
  
}
