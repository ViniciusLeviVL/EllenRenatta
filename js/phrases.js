const frase = document.querySelector(".phrase div:first-of-type")
const phrases = {
    datas: function () {
        switch (data.mm+data.dd) {
            case "0101":
                return "Feliz ano novo."
            case "0219":
                return `${data.sinceDate(2022)}:
                <img class="added" src="images/auêis/poolparty.jpg" alt="foto nossa na piscina">`
            case "0320": 
                return data.sinceDate(2022) + "eu desinstalei o whatsapp e pela primeira vez falei 'amo você', e você falou que me amava de volta 🥰."
            case "0327":
                return data.sinceDate(2022) + "eu te mandei um sms e de acordo com você eu te conquistei com esse sms 😂🤩❤️."
            case "0614":
                return `${data.sinceDate(2016)}o maior e melhor tutorial da história da internet estava sendo postado no Youtube.
                <iframe width="100%" height="65%" src="https://www.youtube.com/embed/ZYVoEqtEBnI" title="Kinemaster sem marca d'agua/Ellen Renatta #youtubeiniciante" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                Porém ${data.sinceDate(2022)} essa data se tornou muito especial para nós 🥰.`
            case "0423":
                return data.sinceDate(2022) + "Yves foi um amigo incrível e pela primeira vez ficamos sozinhos no mesmo ambiente 😂❤️."
            case "0505":
                return data.sinceDate(2022) + "você ficou com ansiedade porque eu tava com raiva de você e nesse dia eu me senti amado como nunca tinha me sentido antes ❤️."
            case "0514":
                return data.sinceDate(2022) + "você me deixou todo boiolinha citando qualidades que viu em mim 🥰."
            case "0720":
                return data.sinceDate(2022) + "eu fui com você para você assinar o contrato do seu primeiro emprego de muitos 🤩❤️."
            case "0722":
                return data.sinceDate(2022) + "eu fui na sua casa conhecer minha sogra, foi uma noite incrível com um fricassê delicioso mas eu não sabia onde enfiar a cara 🤣❤️."
            case "0726":
                return data.sinceDate(2022) + "tivemos uma conversa de centavos mas no fim decidimos ter um relacionamento sério 🥰❤️."
            case "0728":
                return `${data.sinceDate(2022)}você conheceu minha família e sua sogra ficou bestinha e super animada por te conhecer, tanto que já marcou o encontro de família pra toda sexta ❤️.
                <img class="added" src="images/auêis/main.jpg">`
            case "0815":
                return data.sinceDate(2021) + "eu te chamei pra ir pra o cinema, e para minha surpresa você aceitou. Foi lá onde tudo começou."
            case "0817":
                return `${data.sinceDate(2021)}demos o nosso primeiro beijo. E foi naquele dia que eu vi nos seus olhos que você era diferente ✨❤️. <br> ${data.sinceDate(2022)}tiramos a foto de 30 reais 🤣:
                <img class="added" src="images/auêis/thumb.jpg">`
            case "0818":
                return data.sinceDate(2021) + "eu comecei a stalkear todo o seu facebook e encontrar as suas fotos mais maravilhosas 🤣❤️."
            case "0819": 
                return `${data.sinceDate(2022)}você conheceu um pedacinho da minha família por parte de mãe.
                <img class="added" src="images/auêis/vovo.jpeg">`
            case "0821":
                return data.sinceDate(2022) + "eu conheci meu sogro que é muito simpático e engraçado e tem o dom de fazer coisas muito muito gostosas 😋❤️."
            case "0825":
                return `${data.sinceDate(2021)}você me mandou uma foto chorando pela primeira vez. Não sei porque mas eu sempre guardo essas fotos 🤔.
                <img class="added" src="images/auêis/crying.jpg" alt="você chorando">`
            case "0827":
                return data.sinceDate(2021) + "você disse que 'eu te amo' pela primeira vez em tom de brincadeira, mas mesmo assim deu aquela sensaçãozinha né 🤣❤️."
            case "0828":
                return `${data.sinceDate(2021)} nós fizemos a maior ligação da minha vida e conhecemos bastante coisa um sobre o outro ❤️.           
                <img style="border-radius: 10px; margin-top: 10px;" src="images/auêis/ligação.jpeg" width="100% alt="print de uma ligação com 12 horas de duração">`
            case "0831": 
                return data.sinceDate(2021) + "eu te fiz ciúmes e você realmente ficou com um pouco de ciúmes 😂❤️."
            case "0903": 
                return "Esse foi um dia muito muito importante pra mim, e " + data.sinceDate(2021) + "eu descobri que tenho muito medo de te perder e pela primeira vez eu chorei por você 🥲."
            case "0921":
                return data.sinceDate(2021) + "a gente se afastou pela primeira vez."
            case "0930":
                return data.sinceDate(2021) + "você estava passando na prova teórica do Detran 🤩."
            case "1126": 
                return data.sinceDate(2022) + "aconteceu um evento falando sobre gratidão no colégio e eu te vi chorando pela primeira vez, e chorei horrores também e enquanto eu chorava você me deu a mão, e naquele momento eu agradeci muito a Deus por ter te conhecido 🥺❤️."
            case "1202": 
                return `${data.sinceDate(2021)}você tirou a primeira fotinha comigo 🙂❤️.
                <img class="added" src="images/auêis/firstphoto.jpg" alt="foto de casal">`
            case "1206":
                return data.sinceDate(2022) + "você leu a primeira de 3067 páginas de Harry Potter."
            case "1210":
                return data.sinceDate(2021) + "você cantou 'Tá vendo aquela lua' pra mim e ainda me deu um beijão na frente de todo mundo 😂🤩."
            case "1221":
                return data.sinceDate(2022) + "a gente foi assistir homem-aranha, depois de um bom tempo sem se ver 🙂❤️."
        default:
            return getPraise()
        }
    }
}