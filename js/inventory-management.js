function manageInventory(inventory, action) {
    // Your implementation here
    if(action.type === "add"){
        inventory.push(action.item)
    }
    console.log(inventory)
}
// Sample Input
const initialInventory = [
    { name: "apple", quantity: 10 },
    { name: "banana", quantity: 5 }
];
const addAction = {
    type: "add",
    item: { name: "orange", quantity: 7 }
};
const removeAction = {
    type: "remove",
    item: { name: "banana", quantity: 5 }
};
// Expected Output
// After addAction: [
//   { name: "apple", quantity: 10 },
//   { name: "banana", quantity: 5 },
//   { name: "orange", quantity: 7 }
// ]
// After removeAction: [
//   { name: "apple", quantity: 10 },
//   { name: "orange", quantity: 7 }
// ]
const updatedInventoryAfterAdd = manageInventory(initialInventory, addAction);
console.log(updatedInventoryAfterAdd);
const updatedInventoryAfterRemove = manageInventory(updatedInventoryAfterAdd, removeAction);
console.log(updatedInventoryAfterRemove);