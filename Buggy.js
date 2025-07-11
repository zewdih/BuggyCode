/*This CODE HAS NOTHING TO DO WITH THE WEBSITE ITS COMPLETELY SEPARATE*/
/*Zewdi wants to go shopping and has created a cart, find the bugs!*/

function viewStoreItems() {
    console.log("Store Items:");
    for (item of myStore) {
        console.log(item + ": $" + myStore[item].toFixed(2));
    }
let cart = [];
const myStore = {
    chickenThighs: 1.0,
    rice: 1.5,
    zeroSugarSoda: 2.5,
    goodPop: 2.0,
    smartFoodPopcorn: 3.5,
    blackBerries: 2.5,
    fishcakeKimBap: 1.0
};

function addToCart(item){
    // add item to cart only if the item is in the store
    if (myStore.includes(item)){
        cart.push[items];
        console. log(item + " was added to cart.");
    }
    else {
        console.log("Item not found in stock");
    }
}



}

function viewCart(){
    // display cart items and total cost
    if (cart == 0) {
        console.log("Cart is empty!");
        return
    }
    let total = null;
    console.log("Your cart has:");
    for (let i = 0; i < cart.length; i++) {
        item = cart[i];
        price = myStore.item;
        console.log(item + ": $" + price.toFixed(2));
        total = total + price;
    }
    console.log("Total is: " + total);
}

// Use Cart
addToCart(" fishcakeKiimBap");
addToCart("zeroSugarSoda   ");
addToCart("rice") ;

viewStoreItems();

viewCart();
