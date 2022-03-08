const itemsInStock = [
    {
        name: "Milk",
        quantity: 10,
        price: 55
    },
    
    {
        name: "Bread",
        quantity: 5,
        price: 65
    },
    
    {
        name: "Sugar",
        quantity: 100,
        price: 120
    }
];
const shoppingCart = [];

function addItemToShoppingCart(item, qty){
    shoppingCart.push({
        name: item.name,
        quantity: qty,
        price: item.price
    });
}

function total(){
    return shoppingCart.reduce((total, item)=>{
        total += item.price * item.quantity;
        return total;
    }, 0);
}




/* //explaining how callback functions work
// sendBulkMessage 
// @sendMessageFunc Function
function sendBulkMessage(sendMessageFunc){

    const message = "Hello friend, Happy womens day!";
    
    sendMessageFunc('+254712723723', message);
    sendMessageFunc('+254712723723', message);
    sendMessageFunc('+254712723723', message);
    sendMessageFunc('+254712723723', message);
    sendMessageFunc('+254712723723', message);
    sendMessageFunc('+254712723723', message);
}

function sendMessage(contact, message){
    //them message is sent
    console(contact, message);
}

sendBulkMessage(sendMessage); */