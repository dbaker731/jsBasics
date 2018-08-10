/*jshint esversion: 6 */
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
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    function calcTotal( type ) {
        var sum = 0;

        data.allItems[type].forEach( cur => {
            sum += cur.value;
        });

        data.totals[type] = sum;
    }

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
            if ( type === 'exp' ) {
                newItem = new Expense( ID, des, val ); 
            } else if ( type === 'inc' ) {
                newItem = new Income( ID, des, val ); 
            }
            
            // Push to data
            data.allItems[type].push( newItem );

            console.log( data );
            
            // Return new element
            return newItem;
        },

        testing: function() {
            console.log( data );
            
        },

        deleteItem: function( type, id ) {
            
            var ids, index;

            ids = data.allItems[ type ].map( function( arr ) {
                return arr.id;
            } );         

            index = ids.indexOf(id);           

            if (index !== -1) {
                data.allItems[type].splice( index, 1 );
            }

        },

        calcBudget: function() {

            // calc total income and expenses, calc budget, calc % of income that we spent
            calcTotal( 'exp' );
            calcTotal( 'inc' );

            data.budget = data.totals.inc - data.totals.exp;

            data.percentage = data.budget >= 0 ? data.percentage = Math.round( (data.totals.exp / data.totals.inc) * 100 ) : -1;

        },
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        }
    };
})();




var UIController = ( function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budget: '.budget__value',
        totalInc: '.budget__income--value',
        totalExp: '.budget__expenses--value',
        budgetPercent: '.budget__expenses--percentage',
        container: '.container'
    };


    return {
        getInput: function(){
            return {
                type: document.querySelector( DOMstrings.inputType ).value, // inc or exp
                description: document.querySelector( DOMstrings.inputDescription ).value,
                value: parseFloat( document.querySelector( DOMstrings.inputValue ).value )
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        },
        addListItem: function( obj, type ){
            var html, newHtml, element;

            // Create HTML string with placeholder text
            if ( type === 'inc' ) {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if ( type === 'exp' ) {               
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%> <div class="item__description">%description% <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">2%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }
            
            // Replace placeholder text with some data
            newHtml = html.replace( '%id%', obj.id );
            newHtml = newHtml.replace( '%description%', obj.description );
            newHtml = newHtml.replace( '%value%', obj.value );
            
            // Insert HTML into DOM
           document.querySelector( element ).insertAdjacentHTML( 'beforeend', newHtml );

        },

        removeListItem: function( selectorID ) {

            var el = document.getElementById( selectorID );

            el.parentNode.removeChild( el );

        },

        clearFields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll( DOMstrings.inputDescription + ', ' + DOMstrings.inputValue );

            fieldsArr = Array.prototype.slice.call(fields);
        
            fieldsArr.forEach(field => {
                field.value = '';
            });

            fieldsArr[0].focus();

        },
        updateBudget: function( obj ) {           
            document.querySelector( DOMstrings.budget ).innerHTML = '+ ' + obj.budget;
            document.querySelector( DOMstrings.totalInc ).innerHTML = '+ ' + obj.totalInc;
            document.querySelector( DOMstrings.totalExp ).innerHTML = '- ' + obj.totalExp;
            document.querySelector( DOMstrings.budgetPercent ).innerHTML = obj.percentage > 0 ? obj.percentage + '%' : '---';
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

        document.querySelector( DOM.container ).addEventListener( 'click', ctrlDeleteItem);

    }

    function updateBudget() {
        // TODO:  calc budget, display the budget
        budgetCtrl.calcBudget();
        var budget = budgetCtrl.getBudget();

        UICtrl.updateBudget( budget );
    }

    function ctrlAddItem() {
        
        var input, newItem;
        // Get field input data
        input = UICtrl.getInput();
        console.log( input );
        
        // Add item to budget controller
        if ( input.description && !isNaN( input.value ) && input.value > 0 ) {
            newItem = budgetCtrl.addItem( input.type, input.description, input.value );
            console.log(newItem);
    
            // Add item to the UI 
            UICtrl.addListItem( newItem, input.type );
            UICtrl.clearFields();
    
            // Calculate and update budget
            updateBudget(); 
            
            
        }
      
    }

    function ctrlDeleteItem( e ) {
        var itemID, splitID, type, id;
        itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if ( itemID ) {
            splitID = itemID.split( '-' );
            type = splitID[0];
            id = parseInt( splitID[1] );
            budgetCtrl.deleteItem( type, id );
            UICtrl.removeListItem( itemID );
            updateBudget(); 
        }
        
    }
   
    return {
        init: function(){
            setUpEventListeners();
            UICtrl.updateBudget( { budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1 } );
        },
    };
    

})( budgetController, UIController );


controller.init();
