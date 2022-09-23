var x;
var y;

var cardDeck = [x, y];

playerCards = [];

startGame = () => {

    playerCards = [];
    var randomizedCard = (max) => Math.floor(Math.random(cardDeck) * max);
    for (i=0; i<2; i++) {
    var cards = (randomizedCard(4) + ', ' + randomizedCard(13));
    playerCards.push(cards);
    }
    console.log(playerCards);
  
}


