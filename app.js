//function and object definitions

// Single state object
var state = {
    items: [
        {
            name: "apples",
            checked: false
            },
        {
            name: "oranges",
            checked: false
             },
        {
            name: "milk",
            checked: true
             },

        {
            name: "bread",
            checked: false
             }
    ]
}



//define add item function
function addItem(state, itemObj) {
    //check if the targeting is working
    //alert("I've just activated the addItem() function");
    state.items.push(itemObj);
};


//define check item function
function checkItem(state, itemName) {
    //check if the targeting is working
    //alert('ToggleClass activated');
    var itemsArray = state.items;
    for (var i = 0; i < state.items.length; i++) {
        //        find the item with the same name as the item to be checked
        if (state.items[i].name === itemName) {
            //        change the state from what it currently is
            state.items[i].checked = !state.items[i].checked;
        }
    }
}

//define delete item function
function removeItem(state, itemName) {

    //check if the targeting is working
    //alert('deleteItem activated');
    var itemsArray = state.items;
    var index;
    for (var i = 0; i < itemsArray.length; i++) {
        //find the item with the same name as the item to be deleted
        if (itemsArray[i].name === itemName) {
            index = i;
        }
    }

    //    delete one item from the array
    itemsArray.splice(index, 1);
}

// function to render shopping list
function renderList(state) {
    var renderedHTML = state.items.map(function (item) {

        var row = '';
        row += '<li>';
        if (item.checked == false) {
            row += '<span class="shopping-item">' + item.name + '</span>';
        } else {
            row += '<span class="shopping-item shopping-item__checked">' + item.name + '</span>';
        }
        row += '<div class="shopping-item-controls">';
        row += '<button class="shopping-item-toggle">';
        row += '<span class="button-label">check</span>';
        row += '</button>';
        row += '<button class="shopping-item-delete">';
        row += '<span class="button-label">delete</span>';
        row += '</button>';
        row += '</div>';
        row += '</li>';

        return row;
    });
    $('.shopping-list').html(renderedHTML);
    //reset the input field to an empty value
    $('#shopping-list-entry').val('')
}

//function and object usage
//trigger add item function
//trigger delete item function
//trigger check item function

$(document).ready(function () {

    //    when the page loads show existing items

    renderList(state);

    /*the following function call should be INSIDE the $(document).ready(function() because the targeted containers were created WHEN the page was loaded*/
    // on click on #shopping-list-entry buttom  activte function addItem
    $('#js-shopping-list-form').on('submit keypress', function (event) {
        if (event.type === 'keypress' && event.which === 13 || event.type === 'submit') {
            event.preventDefault();
            var itemName = $('#shopping-list-entry').val();
            var shoppingItem = {
                name: itemName,
                checked: false
            }
            if (itemName) {
                //                    activate addItem function
                addItem(state, shoppingItem);
                //                    and render list with the new item in it
                renderList(state);
            }
        }

    });
});
/*the following 2 function calls should be OUTSIDE the $(document).ready(function() because the targeted containers were created AFTER the page was loaded*/

// on click on .shopping-item-toggle button activate function checkItem
$('ul').on('click', 'button.shopping-item-toggle', function (event) {
    //            get the name of the clicked shopping item
    var itemName = $(this).closest('li').find('.shopping-item').text();
    //            change the state of that item to checked
    checkItem(state, itemName);
    //            render the list with the item checked
    renderList(state);
});


// on click on .shopping-item-delete button activate function deleteItem
$('ul').on('click', 'button.shopping-item-delete', function (event) {
    var itemName = $(this).closest('li').find('.shopping-item').text();

    removeItem(state, itemName);
    renderList(state);
});
