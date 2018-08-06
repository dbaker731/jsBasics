var budgetController = ( function(){

  

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
        var input = UICtrl.getInput();
        console.log( input );
    
    }
   
    return {
        init: function(){
            setUpEventListeners();
        },
    };
    

})( budgetController, UIController );


controller.init();
