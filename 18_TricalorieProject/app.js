// will hold all our modules - controller mods, local storage stuff, everythn

// basically we are gonna heve a storage controller for local storage , item controller for local data, ui controller that has to do with anythn related to UI, main app controller whr everythng will meet

// Storage Controller


// Item Controller
const ItemCtrl = (function(){
    // Item Constructor
    const Item = function(id,name,calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State 
    const data = {
        items: [
            // {id:0,name:'Steak dinner',calories:1200},
            // {id:1,name:'Cookie',calories:400},
            // {id:2,name:'Eggs',calories:300}

        ],
        currentItem: null,
        totalCalories: 0
    }

    // whatever we return from the module is whats gonna be public
    // Public methods
    return {
        getItems: function(){
            return data.items
        },
        addItem: function(name,calories){
            let ID;
            // Create ID
            if(data.items.length > 0){
                ID = data.items[data.items.length -1].id + 1;

            } else {
                ID = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // Create new Item
            newItem = new Item(ID,name,calories);
            // console.log(newItem)
            // Add to items array
            data.items.push(newItem);

            return newItem;

        },
        getItemById: function(id){
            let found = null;
            // loop through items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found;
        },
        updateItem: function(name, calories){
            // Calories to number
            calories = parseInt(calories);

            let found = null;

            // loop thru items
            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            })
            return found;
        },
        deleteItem: function(id){
            // Get ids
            ids = data.items.map(function(item){
                return item.id
            });

            // Get index of the item to be deleted
            const index = ids.indexOf(id);

            // Remove item
            data.items.splice(index,1);

        },
        clearAllItems : function(){
            data.items = [];
        },

        logData : function(){
            return data;
        },
        getTotalCalories: function(){
            let total = 0;
            // loop thru items and add calories
            data.items.forEach(function(item){
                total += item.calories
            });

            // Set total cal in data structure
            data.totalCalories = total;

            //; return Total
            return data.totalCalories;
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },

        getCurrentItem: function(){
            return data.currentItem;
        }
    }
})();




// UI Controller
const UICtrl = (function(){
    const UISelectors = {
        itemList : '#item-list',
        addBtn: '.add-btn',
        itemNameInput:'#item-name',
        itemCaloriesInput:'#item-calories',
        totalCalories : '.total-calories',
        updateBtn : '.update-btn',
        deleteBtn : '.delete-btn',
        backBtn : '.back-btn',
        listItems : '#item-list li',
        clearBtn : '.clear-btn'
    };

    // Public methods
    return {
        populateItemList: function(items){
            let html = ``;

            items.forEach((item) => {
                html += `            
                <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                </li>`;
            });
            
            // Insert list items

            document.querySelector(UISelectors.itemList).innerHTML = html;

            // this #item-list could be changed at any time and we dont want to go all arnd our javascript and change each individual one. hence we are gonna create an obj called UISelectors and any classes/ids we are gonan use will be put inside it.
        },
        addListItem: function(item){
            // Show the list aka unhide the list
            document.querySelector(UISelectors.itemList).style.display = 'block';

            // Create li element

            const li = document.createElement('li');
            // Add class to li element
            li.className = "collection-item";
            // Add id to li element
            li.id = `item-${item.id}`;

            // Add html
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;

            // Insert item 
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend',li);
        },
        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems); // gives a node list 

            // Turn node list into array so that we can loop thru it
            listItems = Array.from(listItems);
            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');
                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML =  `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;;
                }
            });
        },
        deleteListItem : function(id){
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);
            item.remove();
        },
        removeItems: function(){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function(item){
                item.remove();
            })

        },

        clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';


        },
        // for updating purposes, we add item to current fields to edit them
        addItemToForm: function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },

        hideList : function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showTotalCalories : function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;

        },

        getSelectors : function(){
            return UISelectors;
        },

        getItemInput : function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        clearEditState : function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';


        },
        showEditState : function(){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';


        },
    }
})();




// Main app controller

const App = (function(ItemCtrl,UICtrl,){
    // Load event listeners
    const loadEventListeners = function(){
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable Submit On enter - to force user to click on update btn/ add btn
        document.addEventListener('keypress',function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        })


        // Edit icon click event
        // we need to use event delegation as this edit icon wasnt rendered upon DOM loading, so we need to target some parent element and do a check inside to make sure that its this btn that we are clicking
        document.querySelector(UISelectors.itemList).addEventListener('click',itemEditClick);

        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);

        // Back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click',UICtrl.clearEditState);
        
        // Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click',itemDeleteSubmit);

        // Clear All items Event
        document.querySelector(UISelectors.clearBtn).addEventListener('click',clearAllItemsClick);


    }
    // Add item submit
    const itemAddSubmit = function(e){
        // get Form input from UI Controller
        const input = UICtrl.getItemInput();
        // console.log(input)

        // Check for name and calories
        if(input.name !== '' && input.calories !== ''){
            // Add item

            const newItem = ItemCtrl.addItem(input.name,input.calories);

            // Add Item to UI list
            UICtrl.addListItem(newItem);

            // Get Total Calories
            const totalCalories = ItemCtrl.getTotalCalories();

            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);



            // Clear input fields
            UICtrl.clearInput();

        }


        e.preventDefault();
    }
    // Click edit item
    const itemEditClick = function(e){
        if(e.target.classList.contains('edit-item')){
            // Get list item id (item-0 , item-1)
            const listId = e.target.parentNode.parentNode.id;
            
            // Break into an array , eg : item-0 into item & 0.
            const listIdArr = listId.split('-');

            // Get the actual id
            const id = parseInt(listIdArr[1]);
            
            // Get item
            const itemToEdit = ItemCtrl.getItemById(id);

            // console.log(itemToEdit);

            // Set current Item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICtrl.addItemToForm();


        }

        e.preventDefault();
    }

    // Update item submit
    const itemUpdateSubmit = function(e){
        // Get item input
        const input = UICtrl.getItemInput();
        // Update item

        const updatedItem = ItemCtrl.updateItem(input.name,input.calories);

        UICtrl.updateListItem(updatedItem);

        
        // Get Total Calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();

        e.preventDefault();
    }
    
    // Delete button event
    const itemDeleteSubmit = function(e){
        // Get current item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from data strucuture
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);

                
        // Get Total Calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    // Clear All items event
    const clearAllItemsClick = function(e){
        // Delete all items from data structure
        ItemCtrl.clearAllItems();

        // Get Total Calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        // Remove all items from UI
        UICtrl.removeItems();

        // Hide UL element
        UICtrl.hideList();


    }

    // Public methods
    return {
        init: function(){
            // Clear Edit state / set initial state
            UICtrl.clearEditState();

            // console.log('initializing app....');

            // when app initialises, item controller will fetch items from data structure

            const items = ItemCtrl.getItems();

            // Check if any items 
            if (items.length === 0){
                UICtrl.hideList();

            } else {
                // ui controller will take care of populating the ul with the items that we have retrieved

                UICtrl.populateItemList(items);

            }

            // Get Total Calories - targeted at those in local storage
            const totalCalories = ItemCtrl.getTotalCalories();

            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);



            // Load Event Listeners
            loadEventListeners()

        
        }
    }

})(ItemCtrl,UICtrl);


// Initialize app
App.init()

