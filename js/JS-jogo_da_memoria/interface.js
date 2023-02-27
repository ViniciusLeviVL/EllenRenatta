const gameboard = document.getElementById('gameboard')
const gameover = document.getElementById('gameover')
const FRONT = 'card_front'
const BACK = 'card_back'
const CARD = 'card'
const PLAYER_TURN_CARD_BACK_COLOR = 'card-back-color'
const PLAYER_TURN_CARD_FRONT_COLOR = 'card-front-color'
const FLIP = 'flip'
const backBackgroundIcon = 'glasses'

function doGameboard() {
game.cards.forEach(card => {
        let cardDiv = document.createElement('div')
        cardDiv.id = card.id
        cardDiv.classList.add(CARD)
        cardDiv.dataset.icon = card.icon
        createCardFace(FRONT, card, cardDiv)
        createCardFace(BACK, card, cardDiv)
        cardDiv.addEventListener('click',flipCard)
        gameboard.appendChild(cardDiv)
    })
}

function createCardFace(face, card, div) {
    let e = document.createElement('div')
    if (face === FRONT) {
        e.classList.add(FRONT)
        e.appendChild(createCardImage(card.icon))
    } else {
        e.classList.add(BACK)
        e.appendChild(createCardImage(backBackgroundIcon))
    }
    div.appendChild(e)
}

function createCardImage(name) {
    let img = document.createElement('img')
    img.src = 'images/jogo_da_memoria/' + name + '.png'
    return img
}

function changeCardsColors() {
    let cards = document.getElementsByClassName("card")
    for (let i = 0; i < cards.length; i++) {    
        cards[i].firstChild.classList.toggle(PLAYER_TURN_CARD_FRONT_COLOR)
        cards[i].lastChild.classList.toggle(PLAYER_TURN_CARD_BACK_COLOR)
    }
}

function flipCard() {
    if (game.setCard(this.id)) {
        this.classList.add(FLIP)
        if (game.card1 != null && game.card2 != null) { 
            if (game.checkMatch()) {
                game.clearCards()
                if (game.checkWin()) {
                    gameover.style.display = 'flex'
                    document.getElementById("win_p").innerHTML = game.winner == "p1" ? "AZUL" : "ROSA"
                }
            } else {
                setTimeout(()=> {
                    game.unflipCards()
                    document.getElementById(game.card1.id).classList.remove(FLIP)
                    document.getElementById(game.card2.id).classList.remove(FLIP)
                    game.clearCards()
                }, 500)
                setTimeout(()=>{
                    changeCardsColors()
                },900)

            }
        }
    }
}

function playAgain() {
    game.startGame()
    gameover.style.display = 'none'
    gameboard.innerHTML = ''
    doGameboard()
}

doGameboard()