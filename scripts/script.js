//Iniciar variáveis
const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

//Inicia o jogo
function startGame() {
    let startGameLayer = document.getElementById('game-start')
    startGameLayer.style.display = 'none'

    game.createCardsFromTechs();
    initializeCards(game.cards);
}

//Adiciona cada uma das cartas no tabuleiro
function initializeCards(cards) {

    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = ''

    cards.forEach((card) => {

        //Cria HTML da carta
        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add(CARD);

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);

        gameBoard.appendChild(cardElement);
    })

}

//Adiciona frente e verso a carta 
function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)
}

//Cria frente e verso da carta
function createCardFace(face, card, cardElement) {
    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add(face);

    if (face === FRONT) {
        let iconElement = document.createElement("img");
        iconElement.classList.add(ICON);
        iconElement.src = "./images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = "&lt/&gt";
    }
    cardElement.appendChild(cardElementFace)
}

//Vira a carta, verifica se ela continuará virada e se o jogo acabou
function flipCard() {

    if (game.setCard(this.id)) {

        this.classList.add("flip")

        if (game.secondCard) {
            if (game.checkMatch()) {
                game.clearCards()
                if (game.checkGameOver()) {
                    let gameOverLayer = document.getElementById('game-over')
                    gameOverLayer.style.display = 'flex'
                }
            } else {

                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id)
                    let secondCardView = document.getElementById(game.secondCard.id)

                    firstCardView.classList.remove('flip')
                    secondCardView.classList.remove('flip')
                    game.unflipCards()
                }, 1000)

            }
        }
    }
}

function restartGame() {
    game.clearCards()
    startGame()
    let gameOverLayer = document.getElementById('game-over')
    gameOverLayer.style.display = 'none'
}