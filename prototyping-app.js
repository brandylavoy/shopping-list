//define funcions and objects

//add item function will add items to the shopping list
function addItem() {
    alert("I've just activated the addItem() function");
};
//toggleClass function switches between checked and unchecked
function checkItem() {
    alert("I've just activated the checkItem() function");
};
//removeItem function removes the selected item from the list
function removeItem() {
    alert("I've just activated the deleteItem() function");
};



//execute functions and objects
$(document).ready(function () {

    /*the following function call should be INSIDE the $(document).ready(function() because the targeted containers were created WHEN the page was loaded*/

    //    on click on button with id js-shopping-list-form activate function addItem
    $('#js-shopping-list-form').on('submit keypress', function (event) {
        addItem(state, shoppingItem);
    });
});

/*the following 2 function calls should be OUTSIDE the $(document).ready(function() because the targeted containers were created AFTER the page was loaded*/

/*on click on the ".shopping-item-toggle" button activate function called checkItem()*/
$(document).on('click', 'button.shopping-item-toggle', function (event) {
    checkItem(state, itemName);
});

/*on click on the ".shopping-item-delete" button activate function called removeItem()*/
$(document).on('click', 'button.shopping-item-delete', function (event) {
    removeItem(state, itemName);
});
