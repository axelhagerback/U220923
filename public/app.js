var x;
var y;

var cardDeck = [x, y];

playerCards = [];

cardInfo = {
    Color: '',
    Value: ''
};

drawCardFn = () => {
    var randomizedCard = (max) => Math.floor(Math.random(cardDeck) * max);
    var cards = (`${randomizedCard(4)}, ${randomizedCard(13)}`);
    playerCards.push(cards);
    console.table(playerCards);


   // cardInfo = {Color: randomizedCard(4), Value: randomizedCard(13)}
   // playerCards.push(cardInfo);

    /*
        problem: hur lägger vi till true/false till kortet

        när kortet hämtas ska den kolla ifall den är true eller false,
        * är den FALSE så ska kortet pusha in i playerCards och sättas till true
        * är den TRUE så ska den hämta ett nytt kort, alltså köra if-satsen igen
        
        funktionen ska köras för varje kort som tas eftersom att man inte ska
        kunna starta med likadana kort, vilket är möjligt just nu

        kolla i playerCards om kortet finns
        finns det, skriv inte ut
        finns det inte, skriv ut
        
    
    if (cardDeck[x,y] = false) {

   }*/
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

