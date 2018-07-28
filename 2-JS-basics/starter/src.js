/*
* Variables and data types
*/

// var firstName = 'John';
// console.log( firstName );

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log( fullAge );

// var job;
// console.log( job );

// job = 'Teacher';
// console.log( job );

// Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';
// var if = 23;



/*
* Variables mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log( firstName + ' ' + age );

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log( firstName + ' is a ' + age + ' years old ' + job +'. Is he married? ' + isMarried );

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert( firstName + ' is a ' + age + ' years old ' + job +'. Is he married? ' + isMarried );

var lastName = prompt('What is his last name?');
console.log( firstName + ' ' + lastName );
*/



/*
* Basic operators
*/

// var year, yearJohn, yearMark, ageJohn, ageMark;
// year = 2020;
// ageJohn = 28;
// ageMark = 33;
// // Math operators
// yearJohn = year - ageJohn;
// yearMark = year - ageMark;

// console.log( yearJohn );

// console.log( year + 2 );
// console.log( year * 2 );
// console.log( year / 10 );

// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log( johnOlder );


// // typeof operator
// console.log( typeof johnOlder );
// console.log( typeof ageJohn);
// console.log( typeof 'Mark is older');
// var x;
// console.log( typeof x);

/*
* Operator precedence
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log( isFullAge );

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = ( ageJohn + ageMark ) / 2;
// console.log( average );

// // Multiple assignemnts
// var x, y;
// x = y = ( 3 + 5 ) * 4 - 6;
// console.log( x, y );

// // more operators
// x *= 2;
// console.log( x );
// x += 10;
// console.log( x );
// x ++;
// console.log( x );


/*
* Coding challenge #1
*/

// var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI, compareBMI;

// johnMass = 100;
// johnHeight = 2;
// johnBMI = johnMass / ( johnHeight * johnHeight);

// markMass = 190;
// markHeight = 2.1;
// markBMI = markMass / ( markHeight * markHeight);

// console.log( markBMI, johnBMI );

// compareBMI = markBMI > johnBMI;


// console.log( 'Is Mark\'s BMI higher than John\'s? ' + compareBMI );


/*
* If / Else Statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if ( civilStatus === 'married' ) {
//     console.log( firstName + ' is married' );
// } else {
//     console.log( firstName + ' will hopefully marry soon' );
// }

// var isMarried = true;

// if ( isMarried ) {
//     console.log( firstName + ' is married' );
// } else {
//     console.log( firstName + ' will hopefully marry soon' );
// }



// var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI, compareBMI;

// johnMass = 100;
// johnHeight = 2;
// johnBMI = johnMass / ( johnHeight * johnHeight);

// markMass = 190;
// markHeight = 2.1;
// markBMI = markMass / ( markHeight * markHeight);

// console.log( markBMI, johnBMI );

// // compareBMI = markBMI > johnBMI;

// if ( markBMI > johnBMI ) {
//     console.log( 'Mark\'s BMI is higher than John\'s');
// } else {
//     console.log( 'Mark\'s BMI is not higher than John\'s' );
// }

/*
* Boolean Logic
*/

// let firstName = 'John';
// let age = 20;

// if ( age < 13 ) {
//     console.log( firstName + ' is a boy' );
// } else if ( age >= 13 && age < 20 ) {
//     console.log( firstName + ' is a teenager' );
// } else if ( age >= 20 && age < 30 ) {
//     console.log( firstName + ' is a young man' );
// } else {
//     console.log( firstName + ' is a man' );
// }


/*
* Ternary Operator and Switch Statements
*/

// var firstName = 'John';
// var age = 31;

// // age >= 18 ? console.log( firstName + ' drinks beer.') : console.log( firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';

// console.log( firstName + ' drinks ' + drink );



// var job = 'instructor';

// switch ( job ) {
//     case 'teacher':
//     case 'instructor':
//         console.log( firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log( firstName + ' drives an uber.');
//         break; 
//     case 'designer':
//         console.log( firstName + ' desgins websites.');
//         break;     

//     default:
//         console.log( firstName + ' is unemployed.');
//         break;
// }



// switch ( true ) {
//     case age < 13:
//         console.log( firstName + ' is a boy' );
//         break;

//     case age >= 13 && age < 20:    
//         console.log( firstName + ' is a teenager' );
//         break;

//     case age >= 20 && age < 30 :
//         console.log( firstName + ' is a young man' );
//         break;

//     default:
//         console.log( firstName + ' is a man' );
//         break;   
// }



/*
* Truthy and Falsey 
*/

// var height = 23;

// if ( height || height === 0 ) {
//     console.log( 'boop' );
    
// } else {
//     console.log( 'no boop' );
// }

// // var test = height ? 'boop' : 'no boop';
// // console.log(test);

// if ( height == '23' ) {
//     console.log( 'the height is 23' );
// }




/*
* Coding challenge #2
*/

// var johnScores = [ 89, 120, 103 ];
// var johnAvg = johnScores.reduce( ( a, b ) => a + b, 0 ) / johnScores.length;

// var mikeScores = [ 116, 94, 123 ];
// var mikeAvg = mikeScores.reduce( ( a, b ) => a + b, 0 ) / mikeScores.length;

// var maryScores = [ 97, 134, 105 ];
// var maryAvg = maryScores.reduce( ( a, b ) => a + b, 0 ) / maryScores.length;

// switch ( true ) {
//     case mikeAvg > johnAvg && mikeAvg > maryAvg:
//         console.log( 'Mike\'s team won with an avergare score of ' + mikeAvg + ' to ' + johnAvg, maryAvg );
//         break;

//     case johnAvg > mikeAvg && johnAvg > maryAvg:
//         console.log( 'John\'s team won with an avergare score of ' + johnAvg + ' to ' + mikeAvg, maryAvg );
//         break;  
        
//     case maryAvg > mikeAvg && maryAvg > johnAvg:
//         console.log( 'Mary\'s team won with an avergare score of ' + maryAvg + ' to ' + mikeAvg, johnAvg );
//         break;   

//     default:
//         console.log('The three teams tied');
//         break;
// }


/*
* Functions
*/

// function calcuateAge( birthYear ) {
//     return 2018 - birthYear;
// }

// var ageJohn = calcuateAge( 1990 );
// var ageMike = calcuateAge( 1948 );
// var ageJane = calcuateAge( 1969 );

// console.log( ageJohn, ageMike, ageJane );


// function yearsUntilRetire ( year, firstName ) {
//     var age = calcuateAge ( year );
//     var retirement = 65 - age;

//     if ( retirement > 0 ) {
//         console.log( firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log( firstName + ' is already retired.' );
//     }
    
// }

// yearsUntilRetire( 1993, 'Daniel' );
// yearsUntilRetire( 1948, 'Mike' );
// yearsUntilRetire( 1969, 'Jane' );


/*
* Function statements and expressions
*/

// var whatDoYouDo = function( job, firstName ) {
//     switch ( job ) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';

//         case 'driver':
//             return firstName + ' drives a cab in Lisbon';

//         case 'designer':
//             return firstName + ' designs websites';

//         default:
//             return firstName + ' is unemployed';
//     }
// };

// console.log( whatDoYouDo( 'designer', 'John' ) );
 

/*
* Arrays
*/

// var names = [ 'John', 'Mark', 'Jane' ];
// var years = new Array( 1990, 1969, 1948 );

// console.log( names.length );

// names[1] = 'Ben';
// names[names.length] = 'Mary';

// console.log(names);


// var john = [ 'John', 'Smith', 1990, 'designer', false ];

// john.push( 'blue' );
// john.unshift( 'Mr.' )
// john.pop()
// john.shift();

// console.log( john );

// console.log( john.indexOf(1990) );

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log( isDesigner );

/*
* Coding challenge 3
*/

// var bills = [ 124, 48, 268 ];
// var tips = [];
// var finalAmounts = [];

// function tipCalculator( bill ){
//     var percentage = bill < 50 ? 0.2 : ( bill >= 50 && bill <= 200 ? 0.15 : 0.1 );
//     return percentage * bill;
// }

// tips = bills.map( bill => tipCalculator( bill ) );
// finalAmounts = bills.map( ( bill, i ) => bill + tips[i] );

// console.log( bills );
// console.log( tips );
// console.log( finalAmounts );


/*
* Objects and properties
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: [ 'Jane', 'Mark', 'Bob', 'Emily' ],
//     job: 'Teacher',
//     isMarried: false,
// };

// console.log( john.family );

// john.job = 'designer';
// // john['isMarried'] = true;

// console.log(john);

// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = '1969';
// jane['lastName'] = 'Smith';

// console.log( jane );



/*
* Objects and methods
*/

// var john = {
//         firstName: 'John',
//         lastName: 'Smith',
//         birthYear: 1992,
//         family: [ 'Jane', 'Mark', 'Bob', 'Emily' ],
//         job: 'Teacher',
//         isMarried: false,
//         calcAge: function() {
//             this.age = 2018 - this.birthYear;
//         },
//     };

// john.calcAge();
// console.log( john );




/*
* Coding Challenge 4
*/

//   var mark = {
//       firstName: 'Mark',
//       mass: 1000,
//       height: 1.5,
//       calcBMI: function() {
//           this.BMI = this.mass / ( this.height * this.height );
//           return this.BMI;
//       },
//   }  

//   var john = {
//     firstName: 'John',
//     mass: 10000,
//     height: 1.5,
//     calcBMI: function() {
//         this.BMI = this.mass / ( this.height * this.height );
//         return this.BMI;
//     },
// }  

// if ( mark.calcBMI() > john.calcBMI()) {
//     console.log( mark.firstName + ' has a BMI of ' + mark.BMI + ' while ' + john.firstName + ' only has a BMI of ' + john.BMI  );
// } else if ( john.BMI > mark.BMI ){
//     console.log( john.firstName + ' has a BMI of ' + john.BMI + ' while ' + mark.firstName + ' only has a BMI of ' + mark.BMI  );
// } else {
//     console.log( john.firstName + ' and ' + mark.firstName + ' have the same BMI of ' + john.BMI );  
// }


// john.calcBMI() < mark.calcBMI() ? console.log('test') : console.log('boop');

/*
* Loops
*/

// for (let i = 0; i < 10; i++) {
//     // console.log(i);
// }

// var john = [ 'John', 'Smith', 1990, 'designer', false ];

// for (let i = 0; i < john.length; i++) {
//     if ( typeof john[i] !== 'string' ) continue;
//     console.log(john[i]);
// }

// for (let i = 0; i < john.length; i++) {
//     if ( typeof john[i] !== 'string' ) break;
//     console.log(john[i]);
// }


// john.forEach(x => {
//     console.log( x );
// });

// var i = 0;
// while ( i < john.length ) {
//     console.log(john[i]);
//     i++;
// }

// function tipMaker( bill ){
//     var percentage = bill < 50 ? 0.2 : ( bill >= 50 && bill <= 200 ? 0.15 : 0.1 );
//     return percentage * bill;
// }

// function tipMaker( bill ){
//     var percentage = bill < 100 ? 0.2 : ( bill >= 100 && bill <= 300 ? 0.1 : 0.25 );
//     return percentage * bill;
// }


var johnTipCalculator = {
    bills: [ 124, 48, 268, 180, 42 ],
    tipCalc: function () {
        this.tips = this.bills.map( bill => {
            var percentage = bill < 50 ? 0.2 : ( bill >= 50 && bill <= 200 ? 0.15 : 0.1 );
            return percentage * bill;
        } );
        this.finalBill = this.bills.map( ( bill, i ) => bill + this.tips[i] );
    },
};

var markTipCalculator = {
    bills: [ 77, 475, 110, 45 ],
    tipCalc: function () {
        this.tips = this.bills.map( bill => { 
            var percentage = bill < 100 ? 0.2 : ( bill >= 100 && bill <= 300 ? 0.1 : 0.25 );
            return percentage * bill; 
        } );        
        this.finalBill = this.bills.map( ( bill, i ) => bill + this.tips[i] );
    },
};

johnTipCalculator.tipCalc();
markTipCalculator.tipCalc();

function avgTip ( tipsArr ) {
    var totalAvgTips = 0;
    for (let i = 0; i < tipsArr.length; i++) {
      totalAvgTips += tipsArr[i];
    }
    totalAvgTips = totalAvgTips / tipsArr.length;
    return totalAvgTips;
}

johnTipCalculator.AvgTip = avgTip( johnTipCalculator.tips );
markTipCalculator.AvgTip = avgTip( markTipCalculator.tips );


var avgCompare = markTipCalculator.AvgTip > johnTipCalculator.AvgTip ? 'Mark has a higher average tip at ' + markTipCalculator.AvgTip + ' to ' + johnTipCalculator.AvgTip  : ( johnTipCalculator.AvgTip > markTipCalculator.AvgTip ? 'John has a higher average tip at ' + johnTipCalculator.AvgTip + ' to ' + markTipCalculator.AvgTip  : 'John and Mark have the same average tip at ' + markTipCalculator.AvgTip
);

console.log( avgCompare );


// test