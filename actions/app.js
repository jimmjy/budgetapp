// budget module
var budgetController = (function() {
   
    //some code
    

})();

//User interface module
var UIController = (function(){

    //creating an object for the classnames incase we change them down the road
    var classNames = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }
    
    return {
        //public functions
        getInput: function() {
            //return and object with all the values read at once, DRY
            return {
                type: document.querySelector(classNames.inputType).value,
                description: document.querySelector(classNames.inputDescription).value,
                value: document.querySelector(classNames.inputValue).value
            };
            // inc for income and exp for expenses
        },

        getClassNames: function() {
            return classNames;
        }
    };
})();

// event controller to tie UI and buget controllers together

var controller = (function(budgetCtrl, UICtrl) {    

    var setupEventListeners = function() {
        //get classnames from UI controller
        var DOM = UICtrl.getClassNames();

    //event listeners to detect either the enter key or mouse click on btn
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.key === 'Enter') {
                ctrlAddItem();
            };
        });
    }    

    var ctrlAddItem = function() {
        // 1. get the field input data
        var input = UICtrl.getInput();

        // 2. Add item to the budget controller
        // 3. Add the new item to the UI controller
        // 4. Calculate the budget
        // 5. display the budget on the UI interface
    };

    return {
        init: function() {
            setupEventListeners();
        }
    };   
    
})(budgetController, UIController);

//initialize application
controller.init();