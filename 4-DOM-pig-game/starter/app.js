/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

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

    document.querySelector( '.dice' ).style.display = 'none';
}

init();


function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById( 'current-0' ).textContent = '0';
    document.getElementById( 'current-1' ).textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector( '.dice' ).style.display = 'none';
}

document.querySelector( '.btn-roll' ).addEventListener('click', ()=> { 
    if ( gamePlaying ) {
        var dice = Math.floor( Math.random() * 6 ) + 1;
        var diceDom = document.querySelector( '.dice' );

        diceDom.src = 'dice-' + dice + '.png';
        diceDom.style.display = 'block';

        if ( dice !== 1 ) {
            roundScore += dice;
            document.querySelector( '#current-' + activePlayer ).textContent = roundScore;
        } else {
            switchPlayer();
        }
    }
   
});

document.querySelector( '.btn-hold' ).addEventListener( 'click', () => {
    if ( gamePlaying ) {
        scores[activePlayer] += roundScore;
        document.getElementById( 'score-' + activePlayer ).textContent = scores[activePlayer];
        if ( scores[activePlayer] >= 10 ) {
            document.getElementById( 'name-' + activePlayer ).textContent = 'Winner!';
            document.querySelector( '.dice' ).style.display = 'none';
            document.querySelector( '.player-' + activePlayer + '-panel' ).classList.add('winner');
            document.querySelector( '.player-' + activePlayer + '-panel' ).classList.remove('active');
            gamePlaying = false;
        } else {
            switchPlayer();
        }
    }
} );

 document.querySelector( '.btn-new' ).addEventListener( 'click', init );
















 // document.querySelector( '#current-' + activePlayer ).textContent = dice;
// document.querySelector( '#current-' + activePlayer ).innerHTML = '<em>' + dice + '</em>'


// var x = document.querySelector( '#score-0' ).textContent;
// console.log(x);