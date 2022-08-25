const frase = document.querySelector(".phrase div:first-of-type")
const phrases = {
    datas: function () {
        switch (data.mm+data.dd) {
            case "0101":
                return "Feliz ano novo"
            case "0614":
                return `${data.untilDate(2016)}o maior e melhor tutorial da história da internet estava sendo postado no Youtube.
                <iframe style="margin-top: 20px;" width="100%" height="65%" src="https://www.youtube.com/embed/ZYVoEqtEBnI" title="Kinemaster sem marca d'agua/Ellen Renatta #youtubeiniciante" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            case "0815":
                return data.untilDate(2021) + "eu te chamei pra ir pra o cinema, e para minha surpresa você aceitou. Foi lá onde tudo começou."
            case "0817":
                return data.untilDate(2021) + "demos o nosso primeiro beijo. E lá, naquela encarada de psicopata que eu vi nos seus olhos que você era diferente 🤣✨❤️"
            case "0818":
                return data.untilDate(2021) + "eu comecei a stalkear todo o seu facebook e encontrar as suas fotos mais maravilhosas 🤣❤️"
            case "0825":
                return data.untilDate(2021) + "você me mandou uma foto chorando pela primeira vez. Não sei porque mas eu sempre guardo essas fotos 🤔"
            case "0827":
                return data.untilDate(2021) + "você disse que 'eu te amo' pela primeira vez em tom de brincadeira, mas mesmo assim deu aquela sensaçãozinha né 🤣❤️"
            case "0831": 
                return data.untilDate(2021) + "eu te fiz ciúmes e você realmente ficou com um pouco de ciúmes 😂❤️"
            case "0903": 
                return "Esse foi um dia muito muito importante pra mim, e " + data.untilDate(2021) + "eu descobri que tenho muito medo de te perder e pela primeira vez eu chorei por você 🥲"
            case "0921":
                return data.untilDate(2021) + "a gente se afastou pela primeira vez."
            case "0930":
                return data.untilDate(2021) + "você estava passando na prova teórica do Detran 🤩"
            case "1202": 
                return data.untilDate(2021) + "você tirou a primeira fotinha comigo 🙂❤️"
            case "1210":
                return data.untilDate(2021) + "você cantou 'Tá vendo aquela lua' pra mim e ainda me deu um beijão na frente de todo mundo 🤩"
        default:
            return getPraise()
        }
    }
}