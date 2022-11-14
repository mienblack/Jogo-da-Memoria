let game = {

    lockmode: false, //Quando a segunda carta ta virada o tabuleiro fica bloqueado
    firstCard: null, //Valor para checar se é igual a segunda carta
    secondCard: null, //Valor para checar se é igual a primeira carta

    characters: ['edward',
        'jotaro',
        'goku',
        'tanjiro',
        'luffy',
        'naruto',
        'pikachu',
        'saitama',
        'shoyo',
        'yugi'
    ],

    cards: null,


    //Checar se a carta foi selecionada
    setCard: function (id) {

        let card = this.cards.filter(card => card.id === id)[0]
        console.log(card)

        if (card.flipped || this.lockmode) {
            return false
        }

        if (!this.firstCard) {
            this.firstCard = card
            this.firstCard.flipped = true
            return true
        } else {
            this.secondCard = card
            this.secondCard.flipped = true
            this.lockmode = true
            return true
        }
        
    },

    //Checar se as cartas formam par
    checkMatch: function() {
        if (!this.firstCard || !this.secondCard) {
            return false
        }
        if (this.firstCard.icon === this.secondCard.icon){
            return true
        }
    },

    //Resata valores para clicar na próxima carta
    clearCards: function(){
        this.firstCard = null
        this.secondCard = null
        this.lockmode = false
    },

    //Se as cartas não formam match, valores resetam
    unflipCards: function() {
        this.firstCard.flipped = false
        this.secondCard.flipped = false
        this.clearCards()
    },

    //
    checkGameOver: function() {

        return this.cards.filter(card => !card.flipped).length == 0
    },

    //Cria cada uma das cartas do tabuleiro
    createCardsFromCharacters: function () {

        this.cards = [];

        //Adiciona o par ao array de todas cartas
        this.characters.forEach((char) => {
            this.cards.push(this.createPairFromChar(char))
        })
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards()
    },

    //Cria um  array com  duas cartas (dois objetos) que formam par
    createPairFromChar: function (char) {

        return [
            {
                id: this.createIdFromChar(char),
                icon: char,
                flipped: false
            },
            {
                id: this.createIdFromChar(char),
                icon: char,
                flipped: false
            }
        ]
    },

    //Cria o id de cada carta
    createIdFromChar: function (char) {

        return char + parseInt(Math.random() * 1000)
    },

    //Embaralha as cartas
    shuffleCards: function (cards) {
    let currentIndex = this.cards.length;
    let randomIndex = 0;

    //Usa o indice da ultima carta para posicionar cartas restantes no array
    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        
        currentIndex--;
        [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
    }
}

}

export default game