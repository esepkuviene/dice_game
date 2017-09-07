console.log("Dice game");

var sound = new Audio('pop.mp3');

// kintamuju nueimimas ir priskyrimas


var dice = document.querySelector('.game img');
var round = document.querySelector('.round');
var addPoints = document.querySelector('.game p');
var playerHTML = document.querySelectorAll('.player h1')
var playerName = document.querySelectorAll('h3')
var roundScore = 0;
var pScore = [0, 0];
var curPlayer = 0;
var prevScore = 0;
playerName[curPlayer].classList.add('active');


dice.addEventListener('click', rollDice);

//ridenti kauliuka, generuoti sk. nuo 1 iki 6 
function rollDice() {
    sound.play();
    var rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
    dice.src = 'img/' + rand + '.png';
    if (rand == 1) {
        roundScore = 0;
        takePoints();
    } else {
        roundScore += rand;
    }


    console.log(roundScore);
    round.textContent = roundScore;
    if (prevScore == rand) {
        pScore[curPlayer] = 0;
    }

}

// Pasiimti taskus

addPoints.addEventListener('click', takePoints);

function takePoints() {
    playerName[0].classList.toggle('active');
    playerName[1].classList.toggle('active');
    pScore[curPlayer] += roundScore;
    playerHTML[curPlayer].textContent = pScore[curPlayer]
    roundScore = 0;
    round.textContent = roundScore;

    if (pScore[curPlayer] == 20 || pScore[curPlayer] > 20) {
        console.log('win');
        playerName[curPlayer].classList.remove('active');

        playerName[curPlayer].textContent = 'You win'
        playerName[curPlayer].classList.remove('active');
        playerName[curPlayer].style.color = 'red';
    }
    curPlayer++;
    if (curPlayer == 2) {
        curPlayer = 0
    }

}




// ND padaryti laimetoja, surinkus 100 tasku (nurodyti, kuris zaidejas laimejo). Jei tame paciame raunde ismetamas tas pats skaicius, nunulinti pScore
// jei issukai du kartus ta pati skaiciu, prarandi visus surinktus taskus;
// jei surinktu tasku suma virs 80, issukus 1 prarandi visus surinktus taskus;

//ND pasikartojimui:
//padaryti html deze. paspaudus ant jos pakeisti spalva;
// padaryti text elementa p paspaudus ant jo pakeisti html turini
//sukurti mygtuka, paspaudus ji i konsole atvaizduoti atsitiktini skaiciu nuo 1 iki 10
// sykurti h1 elementa su tekstu 0. Spaudziant ant jo teksta pakeisti vienet1, tada i 2, i 3 ir t.t.
// jei skaicius bus lygus 5, pakeisti h1 elemento spalva i raudona.
