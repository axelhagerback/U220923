var color;
var value;

var cardDeck = [color, value];

var cardsPlayed = [];

var compCards = [color, value];

function build() {
   document.getElementById('hit').disabled = true;
   document.getElementById('yourCards').disabled = true;
   document.getElementById('firstCards').disabled = true;
   document.getElementById('computerCards').disabled = true;
   document.getElementById('stay').disabled = true;
};


/*
while computertotal är mindre än playertotal drawCardFn
if computertotal == 21 you lose it wins
else if computertotal > playertotal && computertotal < 21 you lose it wins
else you win
*/

computerDrawCards = () => {
  //  while () {

    //}
}


startGame = () => {
    cardDeck = [];
    cardsPlayed = [];
    compCards = [];

    var computerTotal = document.getElementById('computerTotal');
    computerTotal.innerHTML = '';

    var playerTotal = document.getElementById('total');
    playerTotal.innerHTML = '';
   
    
    for (i=0; i<2; i++) {
        drawComputerCard();
        writeComputerCard();
    };


    document.getElementById('yourCards').disabled = false;
    yourCards.innerHTML = 'YOUR CARDS:<br>'
   
    document.getElementById('computerCards').disabled = false;
    computerCards.innerHTML = 'COMPUTERS CARDS:<br>'
    
    
    document.getElementById('firstCards').disabled = false;
    document.getElementById('startGame').disabled = true;
    
};

firstCards = () => {
    for (i=0; i<2; i++) {
        drawCardFn();
        writeCard();
    };

    sum();
    computerSum();
    document.getElementById('hit').disabled = false;
    document.getElementById('firstCards').disabled = true;
    document.getElementById('stay').disabled = false;
}

drawComputerCard = () => {
    var randomizedCard = (max) => Math.floor(Math.random(cardDeck) * max);

    color = randomizedCard(4);
    value = randomizedCard(13);
    cards = {color, value};

    if (cardsPlayed.includes(`${color} ${value}`) || compCards.includes(`${color} ${value}`)) {
        drawComputerCard();
    } else {
        compCards.push(`${color} ${value}`);
        cardDeck.push(cards);
    };

    console.table(compCards);
}

drawCardFn = () => {
    var randomizedCard = (max) => Math.floor(Math.random(cardDeck) * max);

    color = randomizedCard(4);
    value = randomizedCard(13);
    cards = {color, value};

    includesCard();


    //REMOVE WHEN DONE
    console.table(cardsPlayed);
    console.table(cardDeck);
};

includesCard = () =>  {
    if (cardsPlayed.includes(`${color} ${value}`) || compCards.includes(`${color} ${value}`)) {
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

writeComputerCard = () => {
    var computerCards = document.getElementById('computerCards');
    
    if (cards.color === 0) {
        switch (cards.value) {
            case 10:
                computerCards.innerHTML += 'Jack of Hearts<br>';
                break;
            case 11:
                computerCards.innerHTML += 'Queen of Hearts<br>';
                break;
            case 12:
                computerCards.innerHTML += 'King of Hearts<br>';
                break;
            case 0:
                computerCards.innerHTML += 'Ace of Hearts<br>';
                break;
            default: computerCards.innerHTML += (`${value+1} of Hearts<br>`)
    };
    };

    if (cards.color === 1) {
        switch (cards.value) {
            case 10:
                computerCards.innerHTML += 'Jack of Diamonds<br>';
                break;
            case 11:
                computerCards.innerHTML += 'Queen of Diamonds<br>';
                break;
            case 12:
                computerCards.innerHTML += 'King of Diamonds<br>';
                break;
            case 0:
                computerCards.innerHTML += 'Ace of Diamonds<br>';
                break;
            default: computerCards.innerHTML += (`${value+1} of Diamonds<br>`)
    };
    };

    if (cards.color === 2) {
        switch (cards.value) {
            case 10:
                computerCards.innerHTML += 'Jack of Spades<br>';
                break;
            case 11:
                computerCards.innerHTML += 'Queen of Spades<br>';
                break;
            case 12:
                computerCards.innerHTML += 'King of Spades<br>';
                break;
            case 0:
                computerCards.innerHTML += 'Ace of Spades<br>';
                break;
            default: computerCards.innerHTML += (`${value+1} of Spades<br>`)
    };
    };

    if (cards.color === 3) {
        switch (cards.value) {
            case 10:
                computerCards.innerHTML += 'Jack of Clubs<br>';
                break;
            case 11:
                computerCards.innerHTML += 'Queen of Clubs<br>';
                break;
            case 12:
                computerCards.innerHTML += 'King of Clubs<br>';
                break;
            case 0:
                computerCards.innerHTML += 'Ace of Clubs<br>';
                break;
            default: computerCards.innerHTML += (`${value+1} of Clubs<br>`)
    };
    };
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

computerSum = () => {
    var computerTotal = document.getElementById('computerTotal');
    
    let sum = 0;

    for (var i=0; i < cardDeck.length; i++){
        if (cardDeck[i].value > 9) {
            sum += 10;
       } else {
        sum += cardDeck[i].value+1;
        };
    };
    
    computerTotal.innerHTML = sum;

}

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
        document.getElementById('startGame').disabled = false;
        document.getElementById('hit').disabled = true;
        document.getElementById('stay').disabled = true;
       } else if (sum > 21) {
        total.innerHTML += ' YOU LOSE, SKILL ISSUE!';
        document.getElementById('startGame').disabled = false;
        document.getElementById('hit').disabled = true;
        document.getElementById('stay').disabled = true;
       };
};
