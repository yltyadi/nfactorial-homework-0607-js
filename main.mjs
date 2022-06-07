//import { printBusket, increaseBudgetBy } from "./export.mjs";

const BANANA_PRICE = 800;
const APPLE_PRICE = 1000;
let wantApple = false;
let totalBudget = 2000; 

let busket = {
    apple: 0,
    banana: 0, 
    totalProducts() {
        return this.apple + this.banana;
    },
    addApple() {
        this.apple++;
    }, 
    addBanana() {
        this.banana++;
    }
}

let miniBusket = [];

busket.unknown = 0;
console.log(busket);
delete busket.unknown;

// function to calculate the current price of all items in the busket
let priceCalculator = (busket) => busket.apple * APPLE_PRICE + busket["banana"] * BANANA_PRICE;

// function print the contents of the busket 
function printBusket( {apple, banana} ) {
    console.log(`apple: ${apple}, banana: ${banana}`);
}

// function to increase the initial budget 
let increaseBudgetBy = function(value) {
    totalBudget += value;
}

function miniPrice(arr) {
    let price = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "apple") {
            price += APPLE_PRICE;
        } 
        if (arr[i] == "banana") {
            price += BANANA_PRICE;
        }
    }
    return price;
}

while (priceCalculator(busket) < totalBudget) {
    wantApple = confirm("do you want to buy an apple? you still have money");
    if (wantApple) {
        busket.addApple();
    } else {
        busket.addBanana();
    }
}

do {
    miniBusket.push("apple");
    miniBusket.unshift("banana");
    miniBusket.pop();
    miniBusket.push("apple");
    miniBusket.push("orange");
} while (miniPrice(miniBusket) < totalBudget);

const filteredMini = miniBusket.filter((product) => product == "apple" || product == "banana");

increaseBudgetBy(2000);
console.log("Big Busket: ");
console.log(busket);
printBusket(busket);
console.log(priceCalculator(busket));
console.log("Mini Busket: ");
console.log(filteredMini);
console.log(miniPrice(filteredMini));

if (priceCalculator(busket) < miniPrice(miniBusket)) {
    console.log("buying big busket");
} else if (priceCalculator(busket) === miniPrice(miniBusket)) {
    console.log("choose randomly");
} else {
    console.log("buying mini busket");
}