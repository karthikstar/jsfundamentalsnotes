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
            console.log(newItem)
            // Add to items array
            data.items.push(newItem);

            return newItem;

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
        totalCalories : '.total-calories'
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
        clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';


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
        }
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


    // Public methods
    return {
        init: function(){
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

