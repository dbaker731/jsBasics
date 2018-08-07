var budgetController = ( function(){

    var Expense = function( id, description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function( id, description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
    };


    var data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
    };

    return {
        addItem: function( type, des, val ) {
            var newItem, ID;

            // Create new ID
            if( data.allItems[type].length > 0 ){
                ID = data.allItems[type][ data.allItems[type].length - 1 ].id + 1;
            } else {
                ID = 0;
            }
            

            // Create new item based on 'inc' or 'exp'
            if ( type === 'expense' ) {
                newItem = new Expense( ID, des, val ); 
            } else if ( type === 'income' ) {
                newItem = new Income( ID, des, val ); 
            }
            
            // Push to data
            data.allItems[type].push( newItem );

            console.log( data );
            
            // Return new element
            return newItem;
        },
    };
})();




var UIController = ( function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };


    return {
        getInput: function(){
            return {
                type: document.querySelector( DOMstrings.inputType ).value, // inc or exp
                description: document.querySelector( DOMstrings.inputDescription ).value,
                value: document.querySelector( DOMstrings.inputValue ).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();




var controller = ( function( budgetCtrl, UICtrl ){

    function setUpEventListeners() {
        var DOM = UIController.getDOMstrings();

        document.querySelector( DOM.inputBtn ).addEventListener( 'click', ctrlAddItem );

        document.addEventListener( 'keypress', function( e ) {

            if ( e.keyCode === 107 || e.keyCode === 13 || e.which === 107 || e.which === 13 ) {
                ctrlAddItem();
            }

        } );
    }

    

    function ctrlAddItem() {
        // TODO: add item to budget controller, add item to the UI, calc budget, display the budget
        var input, newItem;
        // Get field input data
        input = UICtrl.getInput();
        console.log( input );
        
        // Add item to budget controller
        newItem = budgetCtrl.addItem( input.type, input.description, input.value );
        console.log(newItem);
        
    }
   
    return {
        init: function(){
            setUpEventListeners();
        },
    };
    

})( budgetController, UIController );


controller.init();
