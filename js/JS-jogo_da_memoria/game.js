let game = {
    icons: [
        'gryffindor',
        'hat',
        'hogwarts',
        'hufflepuff',
        'icon',
        'pomo',
        'ravenclaw',
        'slytherin',
        'triangle'
    ],

    cards: [],
    lockMode: false,
    card1: null,
    card2: null,
    playerTurn: 0,
    score: [0,0],
    winner: null,

    startGame: function () {
        this.cards = []
        this.createCards()
        this.clearCards()
        this.playerTurn = 0
        this.score = [0,0]
        this.winner = null
    },

    // cria as cartas embaralhadas

    createCards: function () {
        for (icon of this.icons) {
            this.cards.push(this.createCard(icon))
        }
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards()
    },

    createCard: function (icon) {
        return [{
            id: this.createId(icon),
            icon: icon,
            flipped: false
        }, {
            id: this.createId(icon),
            icon: icon,
            flipped: false
        }]
    },

    createId: function (icon) {
        return icon + Math.floor(Math.random() * 1000)
    },

    shuffleCards: function () {
        let r;
        for (let i = this.cards.length - 1; i >= 0; i--) {
            r = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[r]] = [this.cards[r], this.cards[i]];
        }
    },

    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0];

        if (card.flipped || this.lockMode) {
            return false
        }

        if (!this.card1) {
            this.card1 = card
            this.card1.flipped = true
            return true
        } else {
            this.card2 = card
            this.card2.flipped = true
            this.lockMode = true
            return true
        }
    },

    checkMatch: function () {
        if (this.card1.icon === this.card2.icon) {
            this.score[this.playerTurn] += 1 
            return true
        }
    },

    clearCards: function () {
        this.card1 = null
        this.card2 = null
        this.lockMode = false
    },

    unflipCards: function () {
        this.card1.flipped = false
        this.card2.flipped = false
    },

    changeTurn: function () {
        this.playerTurn = this.playerTurn == 0 ? 1 : 0  
    },

    checkWin: function () {
        let win = this.cards.filter(card=>card.flipped===false)
        if (win.length == 0) {
            this.winner = this.score[0] > this.score[1] ? "p1" : "p2" 
            return true
        }
        return false
    },
}

game.startGame()