var x;
var y;

var cardDeck = [x, y];

playerCards = [];

drawCardFn = () => {
    var randomizedCard = (max) => Math.floor(Math.random(cardDeck) * max);
    var cards = (randomizedCard(4) + ', ' + randomizedCard(13));
    playerCards.push(cards);
};


startGame = () => {

    playerCards = [];
    for (i=0; i<2; i++) {
        drawCardFn();
    }
    console.log(playerCards);
};


hit = () => {
    drawCardFn();
    console.log(playerCards);
};

checkIfTrue = () => {
    
};