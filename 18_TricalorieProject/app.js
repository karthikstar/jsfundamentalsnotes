// will hold all our modules - controller mods, local storage stuff, everythn

// basically we are gonna heve a storage controller for local storage , item controller for local data, ui controller that has to do with anythn related to UI, main app controller whr everythng will meet

// Storage Controller


// Item Controller
const ItemCtrl = (function(){
    // Item Constructor
    const Item = function(id,name,calories){
        this.id = id;
        this.name = id;
        this.calories = calories;
    }

    // Data Structure / State 
    const data = {
        items: [
            {id:0,name:'Steak dinner',calories:1200},
            {id:1,name:'Cookie',calories:400},
            {id:2,name:'Eggs',calories:300}

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

        logData : function(){
            return data;
        }
    }
})();




// UI Controller
const UICtrl = (function(){
    const UISelectors = {
        itemList : '#item-list'
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
        }
    }
})();




// Main app controller

const App = (function(ItemCtrl,UICtrl,){
    // Public methods
    return {
        init: function(){
            // console.log('initializing app....');

            // when app initialises, item controller will fetch items from data structure

            const items = ItemCtrl.getItems();
            // console.log(items);

            // ui controller will take care of populating the ul with the items that we have retrieved
            UICtrl.populateItemList(items);

        
        }
    }

})(ItemCtrl,UICtrl);


// Initialize app
App.init()

