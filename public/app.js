var color;
var value;

var cardDeck = [color, value];

var cardsPlayed = [];

build = () => {
   document.getElementById('hit').disabled = true;
    
};

drawCardFn = () => {
    var randomizedCard = (max) => Math.floor(Math.random(cardDeck) * max);

    color = randomizedCard(4);
    value = randomizedCard(13);
    cards = {color, value};

    includesCard();

    console.table(cardsPlayed);
    console.table(cardDeck);
    /*
        problem: hur lägger vi till true/false till kortet
        
        funktionen ska köras för varje kort som tas eftersom att man inte ska
        kunna starta med likadana kort, vilket är möjligt just nu

        kolla i cardDeck om kortet finns
        finns det, skriv inte ut
        finns det inte, skriv ut
    */
};

includesCard = () =>  {
    if (cardsPlayed.includes(`${color} ${value}`)) {
        drawCardFn();
    } else {
        cardsPlayed.push(`${color} ${value}`);
        cardDeck.push(cards);
    };
};



startGame = () => {
    cardDeck = [];
    cardsPlayed = [];
    
    var playerTotal = document.getElementById('total');
    playerTotal.innerHTML = '';
   
    for (i=0; i<2; i++) {
        drawCardFn();
    };

    sum();

    document.getElementById('hit').disabled = false;
};


hit = () => {
    drawCardFn();
    sum();
};

colorName = () => {
    
};

sum = () => {
    var playerTotal = document.getElementById('total');

    let sum = 0;

    for (var i=0; i < cardDeck.length; i++){
        if (cardDeck[i].value > 9) {
            sum += 10;
       } else {
        sum += cardDeck[i].value+1;
        };
    };
    playerTotal.innerHTML = sum;

};
