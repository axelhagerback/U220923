console.log('Hello console');

var cardDeck = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
];

var card = {
    Hearts: '',
    Diamonds: '',
    Spades: '',
    Clubs: ''
};

console.table(cardDeck);

console.log(cardDeck[2][3]);


drawCard = () => {

    var randomizedCard = Math.floor(Math.random() * 10);
    console.log(randomizedCard);
}
