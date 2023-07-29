function nav() {
    document.getElementById('nav').innerHTML =
        `<ul>
            <li>
                <a href="index.html">
                    <img src="/images/ico/home.png" id="home" alt="início">
                </a>
            </li>
            <li>
                <a href="calendar.html">
                    <img src="images/ico/calendar.png" alt="calendário">
                </a>
            </li>
            <li>
                <span class="pointer" onclick="switchDisplay(this)" id="games">
                    <img src="images/ico/games.png" alt="games">
                </span>
                <div class="noneDisplay" style="display: none;">
                    <a href="jogo_da_velha.html">Jogo da velha</a>
                    <br>
                    <a href="jogo_da_memoria-6x3.html">Jogo da memória 1</a>
                    <br>
                    <a href="jogo_da_memoria-7x4.html">Jogo da memória 2</a>
                    <br>
                    <a href="https://term.ooo/" target="_blank">Termo</a>
                </div>
            </li>
        </ul>

        <a href="support.html">
            <img src="images/ico/support.png" alt="ajuda">
        </a>`
}
// o valor do display block não importa agora, ele irá receber outro valor na função switchDisplay
let displayBlockId = "games"

function switchDisplay(e) {
    let div = document.querySelector("#" + e.id + "+div")
    if (div.style.display == "none") {
        document.querySelector("#" + displayBlockId + "+div").style.display = "none"
        div.style.display = "block"
        displayBlockId = e.id
    } else {
        div.style.display = "none"
    }
}