// var shoppingCart = {
//     banana: "1.25”,
//     mango: .99",
//     Tshirt: "25.01",
//     apple: "0.60",
//     peanutButter: "10.34”,
//     shoes: "22.36"
//   };
// function cashRegister (shoppingCart){
// var items = Object.keys(shoppingCart); // array of items by key
// var sum = 0;
// for (var i = 0; i < items.length; i++) {
// var itemName = items[i]; // get the name of the key for the item
// var itemPrice = shoppingCart[itemName]; // get the price for the item
// sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
// }
// return sum;
// }
// document.write(cashRegister(shoppingCart));
var cartForParty = {
    banana: 1.25,
    mango: .99,
    Tshirt: 25.01,
    apple: 0.60,
    peanutButter: 10.34,
    shoes: 22.36
};

function cashRegister(cart) {
    var items = Object.keys(cart);
    var sum = 0;


for (var i = 0; i < items.length; i++) {
    var itemNames = items[i];   
    // get the nake of the key fo the itemm
    var itemPrice = cart[itemNames];
    // get the rice for theirem
    sum += Number.parseFloat(itemPrice);
    // conerts to price to float and add it to the sum

}
 return sum;
}

document.getElementById("btn").innerHTML = cashRegister(cartForParty);

alert(cashRegister(cartForParty));

document.write (cashRegister(cartForParty));

