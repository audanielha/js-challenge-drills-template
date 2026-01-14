

let shoppingCart = [];

let addItem = (itemName)=>{
    shoppingCart.push(itemName);
    console.log(`Added ${itemName} to cart.`)
}

addItem("Apple");
addItem("Orange");
addItem("Pear");

let removeItem = (itemName) =>{
   let itemIndex = shoppingCart.indexOf(itemName);
   shoppingCart.splice(itemIndex, 1);
   console.log(`Removed ${itemName} from cart.`)
}


removeItem("Pear");

let currentItems = (items) =>{
    // shoppingCart.length === 0 ? items = "No items in cart." : items = shoppingCart.join(", ");
    shoppingCart.length === 0 ? items = "No items in card." : items = shoppingCart.join(", ");
    console.log(`Current items in cart: ${items}`);
}

let totalItems = () =>{
    
    console.log(`Total items in cart: ${shoppingCart.length}`);
}

totalItems();
currentItems();
