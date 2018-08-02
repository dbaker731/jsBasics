/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, dice, dice2, prevDice;

function init () {
    scores = [ 0, 0 ];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById( 'name-0' ).textContent = 'Player 1';    
    document.getElementById( 'name-1' ).textContent = 'Player 2';

    document.getElementById( 'score-0' ).textContent = scores[0];
    document.getElementById( 'score-1' ).textContent = scores[1];
    
    document.getElementById( 'current-0' ).textContent = '0';
    document.getElementById( 'current-1' ).textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active');    
    document.querySelector('.player-0-panel').classList.remove('winner');   
    document.querySelector('.player-1-panel').classList.remove('winner');   
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector( '.dice-1' ).style.display = 'none';
    document.querySelector( '.dice-2' ).style.display = 'none';
}

init();


function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById( 'current-0' ).textContent = '0';
    document.getElementById( 'current-1' ).textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector( '.dice-1' ).style.display = 'none';
    document.querySelector( '.dice-2' ).style.display = 'none';
}

document.querySelector( '.btn-roll' ).addEventListener('click', ()=> { 
    if ( gamePlaying ) {
        prevDice = dice;     
        prevDice2 = dice2;  

        dice = Math.floor( Math.random() * 6 ) + 1;
        dice2 = Math.floor( Math.random() * 6 ) + 1;
        var diceDom = document.querySelector( '.dice-1' );
        var diceDom2 = document.querySelector( '.dice-2' );

        console.log(dice, dice2);
        

        diceDom.src = 'dice-' + dice + '.png';
        diceDom.style.display = 'block';
        diceDom2.src = 'dice-' + dice2 + '.png';
        diceDom2.style.display = 'block';

        // if( prevDice === 6 && dice === 6 || prevDice2 === 6 && dice2 === 6 ) {
            
        //     prevDice = 0;
        //     prevDice2 = 0;
        //     scores[activePlayer] = 0;
        //     document.getElementById( 'name-' + activePlayer ).textContent = '0';
        //     switchPlayer();
        // }
        // else 
        
        if ( dice !== 1 && dice2 !== 1 ) {
            roundScore += dice;
            roundScore += dice2;
            document.querySelector( '#current-' + activePlayer ).textContent = roundScore;
        }  else {
            switchPlayer();
        }         
    }
   
});

document.querySelector( '.btn-hold' ).addEventListener( 'click', () => {
    if ( gamePlaying ) {
        var input = document.querySelector( '.score-to-play' ).value;
        var winningScore;

        if( input ) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        scores[activePlayer] += roundScore;
        document.getElementById( 'score-' + activePlayer ).textContent = scores[activePlayer];
        if ( scores[activePlayer] >= winningScore ) {
            document.getElementById( 'name-' + activePlayer ).textContent = 'Winner!';
            document.querySelector( '.dice-1' ).style.display = 'none';
            document.querySelector( '.dice-2' ).style.display = 'none';
            document.querySelector( '.player-' + activePlayer + '-panel' ).classList.add('winner');
            document.querySelector( '.player-' + activePlayer + '-panel' ).classList.remove('active');
            gamePlaying = false;
        } else {
            switchPlayer();
        }
    }
} );

document.querySelector( '.btn-new' ).addEventListener( 'click', init );
