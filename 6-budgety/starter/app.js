/*jshint esversion: 6 */
var budgetController = ( function(){

    var Expense = function( id, description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    var Income = function( id, description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    Expense.prototype.calcPercent = function( totalInc ) {
        if ( totalInc > 0) {
            this.percentage = Math.round( ( this.value / totalInc ) * 100 );
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
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
        },
        calcPercent: function() {
            data.allItems.exp.forEach(cur => {
                cur.calcPercent( data.totals.inc );
            });
        },
        getPercentage: function() {
            var allPerc = data.allItems.exp.map(expense => {
                return expense.getPercentage();
            });
            return allPerc;
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
        container: '.container',
        percentage: '.item__percentage',
        dateLabel: '.budget__title--date'
    };

    function formatNumber( num, type ) {
            
        var numSplit, int, dec, sign;

        num = Math.abs( num );
        num = num.toFixed( 2 );

        numSplit = num.split( '.' );

        int = numSplit[0];
        dec = numSplit[1];

        if ( int.length > 3) {
           int = int.substr( 0, int.length - 3 ) + ',' + int.substr( int.length - 3, 3 );
        }     

        return ( type === 'exp' ? sign = '-' : sign = '+' ) + ' ' + int + '.' + dec;

    }
    
    function nodeListForEarch( list, cb ) {
        for (let i = 0; i < list.length; i++) {
            cb( list[i], i );              
        }
    }

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
                html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%<div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">2%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }
            
            // Replace placeholder text with some data
            newHtml = html.replace( '%id%', obj.id );
            newHtml = newHtml.replace( '%description%', obj.description );
            newHtml = newHtml.replace( '%value%', formatNumber( obj.value, type ) );
            
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
            var type = obj.budget >= 0 ? 'inc' : 'exp';

            document.querySelector( DOMstrings.budget ).innerHTML = formatNumber( obj.budget, type );
            document.querySelector( DOMstrings.totalInc ).innerHTML = formatNumber( obj.totalInc, 'inc' );
            document.querySelector( DOMstrings.totalExp ).innerHTML = formatNumber( obj.totalExp, 'exp' );
            document.querySelector( DOMstrings.budgetPercent ).innerHTML = obj.percentage > 0 ? obj.percentage + '%' : '---';
        },

        displayPercentage: function( arr ) {

            var fields = document.querySelectorAll( DOMstrings.percentage );           

            nodeListForEarch( fields, function( curr, i ) {
                curr.textContent = arr[i] > 0 ? arr[i] + '%' : '---';
            } );
        },

        displayMonth: function() {
            var now, year, month, months;

            now = new Date();

            months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector( DOMstrings.dateLabel ).textContent = months[month] + ' ' + year;
        },

        changedType: function() {

            var fields;

            fields = document.querySelectorAll(   
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue 
            );
            
            nodeListForEarch( fields, function( cur ) {
                cur.classList.toggle( 'red-focus' );
            } );

            document.querySelector( DOMstrings.inputBtn ).classList.toggle('red');

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

        document.querySelector( DOM.inputType ).addEventListener( 'change', UICtrl.changedType );

    }

    function updateBudget() {
        // TODO:  calc budget, display the budget
        budgetCtrl.calcBudget();
        var budget = budgetCtrl.getBudget();

        UICtrl.updateBudget( budget );
    }

    function updatePercent() {
        // TODO: calc %, read % from budget, update UI
        budgetCtrl.calcPercent();
        var percentage = budgetCtrl.getPercentage();
        console.log( percentage );

        if ( percentage.length ) {
            UICtrl.displayPercentage( percentage );
            
            
        }
        
       
    }

    function ctrlAddItem() {
        
        var input, newItem;
        // Get field input data
        input = UICtrl.getInput();
        
        // Add item to budget controller
        if ( input.description && !isNaN( input.value ) && input.value > 0 ) {
            newItem = budgetCtrl.addItem( input.type, input.description, input.value );
    
            // Add item to the UI 
            UICtrl.addListItem( newItem, input.type );
            UICtrl.clearFields();
    
            // Calculate and update budget
            updateBudget(); 
            updatePercent(); 
            
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
            updatePercent(); 
        }
        
    }
   
    return {
        init: function(){
            setUpEventListeners();
            UICtrl.updateBudget( { budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1 } );
                UICtrl.displayMonth();
        },
    };
    

})( budgetController, UIController );


controller.init();
