var color;
var value;

var cardDeck = [color, value];

var cardsPlayed = [];

function build() {
   document.getElementById('hit').disabled = true;
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
    writeCard();
    document.getElementById('hit').disabled = false;

    
};

drawCardFn = () => {
    var randomizedCard = (max) => Math.floor(Math.random(cardDeck) * max);

    color = randomizedCard(4);
    value = randomizedCard(13);
    cards = {color, value};

    includesCard();

    console.table(cardsPlayed);
    console.table(cardDeck);
};

includesCard = () =>  {
    if (cardsPlayed.includes(`${color} ${value}`)) {
        drawCardFn();
    } else {
        cardsPlayed.push(`${color} ${value}`);
        cardDeck.push(cards);
    };
};


hit = () => {
    drawCardFn();
    sum();
    writeCard();
};

writeCard = () => {
    var yourCards = document.getElementById('yourCards');

    if (cards.color === 0) {
        switch (cards.value) {
            case 10:
                yourCards.innerHTML += 'Jack of Hearts<br>';
                break;
            case 11:
                yourCards.innerHTML += 'Queen of Hearts<br>';
                break;
            case 12:
                yourCards.innerHTML += 'King of Hearts<br>';
                break;
            case 0:
                yourCards.innerHTML += 'Ace of Hearts<br>';
                break;
            default: yourCards.innerHTML += (`${value+1} of Hearts<br>`)
    };
    };

    if (cards.color === 1) {
        switch (cards.value) {
            case 10:
                yourCards.innerHTML += 'Jack of Diamonds<br>';
                break;
            case 11:
                yourCards.innerHTML += 'Queen of Diamonds<br>';
                break;
            case 12:
                yourCards.innerHTML += 'King of Diamonds<br>';
                break;
            case 0:
                yourCards.innerHTML += 'Ace of Diamonds<br>';
                break;
            default: yourCards.innerHTML += (`${value+1} of Diamonds<br>`)
    };
    };

    if (cards.color === 2) {
        switch (cards.value) {
            case 10:
                yourCards.innerHTML += 'Jack of Spades<br>';
                break;
            case 11:
                yourCards.innerHTML += 'Queen of Spades<br>';
                break;
            case 12:
                yourCards.innerHTML += 'King of Spades<br>';
                break;
            case 0:
                yourCards.innerHTML += 'Ace of Spades<br>';
                break;
            default: yourCards.innerHTML += (`${value+1} of Spades<br>`)
    };
    };

    if (cards.color === 3) {
        switch (cards.value) {
            case 10:
                yourCards.innerHTML += 'Jack of Clubs<br>';
                break;
            case 11:
                yourCards.innerHTML += 'Queen of Clubs<br>';
                break;
            case 12:
                yourCards.innerHTML += 'King of Clubs<br>';
                break;
            case 0:
                yourCards.innerHTML += 'Ace of Clubs<br>';
                break;
            default: yourCards.innerHTML += (`${value+1} of Clubs<br>`)
    };
    };
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

    if (sum == 21) {
        total.innerHTML += ' YOU WIN!';
       } else if (sum > 21) {
        total.innerHTML += ' YOU LOSE, SKILL ISSUE!';
       };
};
