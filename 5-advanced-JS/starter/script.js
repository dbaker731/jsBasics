// Function constructor

// var Person = function( name, yearOfBirth, job ) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calcAge = function() {
//     console.log( 2018 - this.yearOfBirth );
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person( 'John', 1990, 'teacher' );
// john.calcAge();

// var jane = new Person( 'Jane', 1969, 'designer' );
// jane.calcAge();

// var mark = new Person( 'Mark', 1948, 'retired' );
// mark.calcAge();

// console.log( john.lastName );
// console.log( jane.lastName );
// console.log( mark.lastName );

// console.log( john );


// Object.create

// var personProto = {
//     calcAge: function() {
//         console.log( 2016 - this.yearOfBirth );
//     }
// };

// var john = Object.create( personProto );

// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// console.log( john );

// var jane = Object.create( personProto, 
//     {
//         name: { value: 'Jane' },
//         yearOfBirth: { value: 1969 },
//         job: { value: 'designer' },
//     } 
// );

// console.log( jane );

// jane.calcAge();


// Primitives vs objects

// Primitives
// var a = 23;
// var b = a;
// a = 46;

// console.log( a, b );

// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;

// obj1.age = 30;

// console.log( obj1.age, obj2.age );


// // Functions

// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change( a, b ){
//     a = 30;
//     b.city = 'San Francisco';
// }

// change( age, obj );

// console.log( age, obj.city );


//Functions as arguments

// var years = [ 1990, 1965, 1937, 2005, 1998 ];

// function arrCalc( arr, cb ) {
//     var arrRes = [];

//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push( cb( arr[i] ) );        
//     }

//     return arrRes;
// }

// function calcAge( el ) {
//     return 2016 - el;
// }

// function isFullAge( el ){
//     return el >= 18;
// }

// function maxHeartRate( el ){
//     if ( el >= 18 && el <= 81) {
//         return Math.round(206.9 - ( 0.67 * el )); 
//     } else {
//         return -1;
//     }

// }

// var ages = arrCalc( years, calcAge );
// console.log( ages );

// var fullAges = arrCalc( ages, isFullAge );
// console.log( fullAges );

// var heartRates = arrCalc( ages, maxHeartRate );
// console.log( heartRates );






// Functions returning functions

// function interviewQuestion( job ){
//     if ( job === 'designer' ) {
//         return function( name ){
//             console.log( name + ', can you please explain what UX design is?');
//         }; 
//     } else if ( job === 'teacher' ){
//         return function( name ) {
//             console.log( 'What subject do you teach, ' + name + '?' );
//         };
//     } else {
//         return function( name ){
//             console.log( 'Hello ' + name + ', what do you do?' );
//         };
//     }
// }

// var teacherQuestion = interviewQuestion( 'teacher' );
// teacherQuestion( 'John' );

// var desginerQuestion = interviewQuestion( 'designer' );
// desginerQuestion( 'Jane' );

// interviewQuestion( 'teacher' )( 'Mark' );









// Immediately invoked functions

// function game(){
//     var score = Math.random() * 10;
//     console.log( score >= 5 );
// }

// game();

// ( function() {
//         var score = Math.random() * 10;
//         console.log( score >= 5 );
// } )();


// ( function( goodLuck ) {
//         var score = Math.random() * 10;
//         console.log( score >= 5 - goodLuck );
// } )( 5 );








// Closures

// function retirement( retirementAge ){
//     var a = ' years left until retirement.';
//     return function( yearOfBirth ){
//         var age = 2018 - yearOfBirth;
//         console.log( ( retirementAge - age ) + a  );
//     };
// }

// var retirementUS = retirement(66);

// // retirementUS(1990);
// // retirement( 66 )( 1990 );

// var retirementGermany = retirement( 65 );
// var retirementIceland = retirement( 67 );

// retirementUS( 1990 );
// retirementGermany( 1990 );
// retirementIceland( 1990 );


// function interviewQuestion( job ){
//     return function( name ) {
//         if ( job === 'designer') {
//             console.log( name + ', can you please explain what UX design is?');
//         } else if ( job === 'teacher' ){
//             console.log( 'What subject do you teach, ' + name + '?' );
//         } else {
//             console.log( 'Hello ' + name + ', what do you do?' );
//         }
//     };   
// }


// var teacherQuestion = interviewQuestion( 'teacher' );
// teacherQuestion('John');

// var designerQuestion = interviewQuestion( 'designer' );
// designerQuestion('Mike');

// interviewQuestion('Retired')('Sally');





// Bind, call, and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function( style, timeOfDay ) {
//         if ( style === 'formal' ) {
//             console.log( 'Good ' + timeOfDay + ' Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.');
//         } else if ( style === 'friendly' ) {
//             console.log( 'Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.' );
//         }
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation( 'formal', 'morning' );

// john.presentation.call( emily, 'friendly', 'afternoon' );

// // john.presentation.apply( emily, ['friendly', 'afternoon'] );

// var johnFriendly = john.presentation.bind( john, 'friendly' );
// johnFriendly( 'morning' );

// var emilyFormal = john.presentation.bind( emily, 'formal' );
// emilyFormal( 'afternoon' );


// var years = [ 1990, 1965, 1937, 2005, 1998 ];

// function arrCalc( arr, cb ) {
//     var arrRes = [];

//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push( cb( arr[i] ) );        
//     }

//     return arrRes;
// }

// function calcAge( el ) {
//     return 2016 - el;
// }

// function isFullAge( limit, el ){
//     return el >= limit;
// }

// var ages = arrCalc( years, calcAge );

// var fullJapan = arrCalc( ages, isFullAge.bind( this, 20 ) );

// console.log( ages );

// console.log( fullJapan );





// CODING CHALLENGE 7


( function() {

    var score = 0;

    var Question = function( questionText, answers, correctAnswer ) {
        this.text = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };
    
    Question.prototype.showQuestion = function( ) {
        console.log( this.text );
        for (let i = 0; i < this.answers.length; i++) {
            console.log( i + '. ' + this.answers[i] );
        }
      
        this.userAnswer = prompt( 'What is the answer?' );

        if (this.userAnswer === 'exit') {
            console.log('Your final score is ' + score);
            return false;
        } else {
            this.userAnswer = parseInt( this.userAnswer );            
            this.checkAnswer();
        }
    };
    
    Question.prototype.checkAnswer = function() {
        if ( this.userAnswer === this.correctAnswer ) {
            score++;
            console.log('Correct!!!');
            this.displayScore();
        } else {
            console.log( 'Wrong. The correct answer was ' + this.correctAnswer + '. ' + this.answers[ this.correctAnswer ] );
            this.displayScore();
        }
        init();
    };

    Question.prototype.displayScore = function() {
        console.log('Your score is ' + score);
        console.log('----------------------');
    };

    function init (){
        quizQuestions[Math.floor( ( Math.random() * quizQuestions.length ) )].showQuestion();
    }
    
    var q1 = new Question( 'Who is my girlfriend?', [ 'Caitlin', 'Megan', 'Olivia' ], 2 );
    var q2 = new Question( 'What is my favorite band?', [ 'Brand New', 'Drake', 'Eminem', 'Emery' ], 0 );
    var q3 = new Question( 'What is my birthday?', [ '7/30', '7/31', '8/1' ], 1 );
    
    
    var quizQuestions = [ q1, q2, q3 ];

    init();


} )();




