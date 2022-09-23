var x;
var y;

var cardDeck = [x, y];

drawCard = () => {
    var randomizedCard = (max) => Math.floor(Math.random(cardDeck) * max);
    console.log(randomizedCard(4) + ', ' + randomizedCard(14));
    
}
