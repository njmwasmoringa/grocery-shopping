
// get the add item button
// const addItemsButton = document.querySelector('#addItemsButton');
const gloceryTable = document.querySelector('#groceryTable');
const shoppingCartTable = document.querySelector('#shoppingCart');
const searchField = document.querySelector('input');

updateGroceryTable();

//assign click event to the button
/* addItemsButton.addEventListener('click', () => {
    const items = prompt("Enter a list of items separated with commas")
        .split(',');

    // Using the forEach
    let tableBodyContent = '';
    items.forEach((item)=>{
        tableBodyContent += `<tr>
            <td>`+item+`</td>
        </tr>`;
    });
    
    gloceryTable.querySelector('tbody').innerHTML = tableBodyContent;

    console.log(items);

    let tableBodyContent = items.map((item) => {
        return `<tr>
            <td>`+ item + `</td>
        </tr>`;
    }).join('');

    gloceryTable.querySelector('tbody').innerHTML = tableBodyContent;
}); */

searchField.addEventListener('keyup', (evnt)=>{
    const valueOfSearchField = evnt.target.value;
    const lengthOfValueString = valueOfSearchField.length;

    const searchResults = itemsInStock.filter((item)=>{
        const subStringOfItemName = item.name.substring(0, lengthOfValueString);
        return subStringOfItemName.toLocaleLowerCase() == valueOfSearchField.toLocaleLowerCase();
    });

    updateGroceryTable(searchResults);
});


function updateGroceryTable(itemsToList = itemsInStock) {
    // uses the map and join to populate the gloceryTable
    gloceryTable.querySelector("tbody").innerHTML = itemsToList.map((item, index) => {
        return `<tr>
        <td>`+ item.name + `</td>
        <td>KES `+ item.price + `</td>
        <td>
            <button type="button" 
                class="btn btn-sm btn-warning" data-index="`+ index + `">Add to cart</button>
        </td>
    </tr>`;
    }).join('');

    // assign the click event to addtocart button
    gloceryTable.querySelectorAll('tbody button').forEach((button) => {
        button.addEventListener('click', (evnt) => {
            const clickedButton = evnt.target;
            const indexOfClickedItem = clickedButton.dataset.index;
            const item = itemsToList[indexOfClickedItem];
            uiAddItemToShoppingCart(item);
        })
    });
}

function uiAddItemToShoppingCart(item) {
    const qty = prompt("How many " + item.name);
    addItemToShoppingCart(item, qty);
    updateShoppingCart();
}

function updateShoppingCart() {
    shoppingCartTable.querySelector('tbody').innerHTML = shoppingCart.map((item, index) => {
        return `<tr>
            <td>`+ item.name + `</td>
            <td>`+ item.quantity + `</td>
            <td>`+ (item.quantity * item.price) + `</td>
        </tr>`;
    }).join('');

    document.querySelector('#total').textContent = total();
}