const frase = document.querySelector(".phrase div:first-of-type")
const phrases = {
    getPraise: function() {
        return praises[Math.floor(Math.random() * 111)] 
    },
    datas: function () {
        switch (data.mm+data.dd) {
            case "0101":
                return "Feliz ano novo"
            case "0817":
                return data.untilDate(2021) + "atrás demos o nosso primeiro beijo."
        default:
            return "Eu te amo MUITO ❤️"
        }
    }
}